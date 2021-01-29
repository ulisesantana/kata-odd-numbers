import extractNumbersRepeatedOddTimes from './extractNumbersRepeatedOddTimes'

describe('extractNumbersRepeatedOddTimes should', () => {
  it('return an array', () => {
    expect(extractNumbersRepeatedOddTimes([])).toStrictEqual([])
  })
  it.each([
    [[2], [2]],
    [[2, 1, 1], [2]],
    [[2, 1, 1, 1], [2, 1]]
  ])('return the numbers that are repeated odd times. For %j should return %j', (input, expected) => {
    expect(extractNumbersRepeatedOddTimes(input)).toStrictEqual(expected)
  })
})
