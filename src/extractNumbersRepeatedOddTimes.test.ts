import extractNumbersRepeatedOddTimes from './extractNumbersRepeatedOddTimes'

describe('extractNumbersRepeatedOddTimes should', () => {
  it('return an array', () => {
    expect(extractNumbersRepeatedOddTimes([])).toStrictEqual([])
  })
  it.each([
    [[2], [2]],
    [[2, 1, 1], [2]],
    [[2, 1, 1, 1], [1, 2]],
    [[1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], [1, 3, 5]],
    [[2, 12, 2, 2, 3, 4, 3, 2, 5, 4, 3, 5, 56, 4, 3, 2, 1], [1, 2, 4, 12, 56]]
  ])('return the numbers that are repeated odd times. For %j should return %j', (input, expected) => {
    expect(extractNumbersRepeatedOddTimes(input)).toStrictEqual(expected)
  })
})
