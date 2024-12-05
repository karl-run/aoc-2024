import * as R from 'remeda';

export const getInputAsLines: (input: string) => string[] = R.piped(
    R.split('\n'),
    R.filter(it => it.length > 0),
)