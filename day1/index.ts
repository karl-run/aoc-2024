import * as R from 'remeda'
import { inputAsLines } from '../utils/input.ts'

const input = await Bun.file('day1/input.txt').text()

function splitInput(input: string) {
  return R.pipe(
    input,
    inputAsLines,
    R.flatMap(R.split('   ')),
    R.map((it) => +it),
    R.partition((value, index) => index % 2 === 0),
    R.map(R.sortBy(R.identity())),
  )
}

function part1() {
  const [left, right] = splitInput(input)

  const output = R.pipe(
    R.zip(left, right),
    R.map(([a, b]) => Math.abs(b - a)),
    R.sum(),
  )

  console.log(`Day 1 result: ${output}`)
}

function part2() {
  const [left, right] = splitInput(input)
  const output = R.pipe(
    left,
    R.map((l) => l * right.filter((it) => it === l).length),
    R.sum(),
  )

  console.log(`Day 1 part 2 result: ${output}`)
}

part1()
part2()
