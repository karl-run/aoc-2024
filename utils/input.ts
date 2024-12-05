import * as R from 'remeda'

export const inputAsLines: (input: string) => string[] = R.piped(
  R.split('\n'),
  R.filter((it) => it.length > 0),
)

export function peek<T>(input: T): T {
  console.log(input)
  return input
}
