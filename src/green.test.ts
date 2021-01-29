function odd(input: number[]): number[] {
    return [...new Set<number>(
        input.map(x => [
            x,
            input.reduce((repeatedTimes, y) => x === y
                ? repeatedTimes + 1
                : repeatedTimes, 0)]
        )
            .filter(([, repeatedTimes]) => repeatedTimes % 2 !== 0)
            .map(([num]) => num)
    )]
}

describe('Odd function should', () => {
    it('return an array', () => {
        expect(odd([])).toStrictEqual([])
    })
    it('return the numbers that are repeated odd times', () => {
        expect(odd([2])).toStrictEqual([2])
        expect(odd([2, 1, 1])).toStrictEqual([2])
        expect(odd([2, 1, 1, 1])).toStrictEqual([2, 1])
    })
})
