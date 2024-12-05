import * as R from 'remeda'
import { inputAsLines, peek } from '../utils/input.ts'

const input = await Bun.file('day2/input.txt').text()

function splitInput(input: string) {
  return R.pipe(input, inputAsLines, R.map(R.split(' ')), R.map(R.map((it) => +it)))
}

function part1() {
  const output = R.pipe(
    splitInput(input),
    R.map((it) => R.zip(it, it.slice(1))),
    R.map(R.map(([a, b]) => b - a)),
    R.map(
      R.reduce((last, current) => {
        if (last === Infinity || current === 0) {
          // Has already been marked unsafe or has no change
          return Infinity
        }

        // Changes direction; illegal
        if ((last > 0 && current < 0) || (last < 0 && current > 0)) {
          return Infinity
        }

        // Changes too much; illegal
        const change = Math.abs(current)
        if (change < 1 || change > 3) {
          return Infinity
        }

        return current
      }, 0),
    ),
    R.filter((it) => it !== Infinity),
    R.length,
  )

  console.log(`Day 1 result: ${output}`)
}

part1()
