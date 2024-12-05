import * as R from 'remeda';

const input = await Bun.file('day1/input.txt').text();
const [left, right] = R.pipe(
    input,
    R.split('\n'),
    R.flatMap(R.split("   ")),
    R.filter(it => it.length > 0),
    R.map(it => +it),
    R.partition((value, index) => index % 2 === 0),
    R.map(R.sortBy(R.identity())),
);

const output = R.pipe(
    R.zip(left, right),
    R.map(([a, b]) => Math.abs(b - a)),
    R.sum(),
)

console.log(`Day 1 result: ${output}`);
