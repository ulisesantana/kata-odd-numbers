export const extractNumbersRepeatedOddTimes = pipe(
  computeRepeatedTimes,
  filterNumbersRepeatedEvenTimes,
  mapToNumber,
  removeRepeatedNumbers
)

function pipe (...process: Function[]): (input: number[]) => number[] {
  return (input: number[]) => process.reduce((result, fn) => fn(result), input)
}

function computeRepeatedTimes (list: number[]): Array<[number, number]> {
  return list.map(number => [number, reduceRepeatedTimes(list, number)])
}

function reduceRepeatedTimes (list: number[], repeatedNumber: number): number {
  return list.reduce((repeatedTimes, number) =>
    repeatedNumber === number
      ? repeatedTimes + 1
      : repeatedTimes,
  0)
}

function filterNumbersRepeatedEvenTimes (list: Array<[number, number]>): Array<[number, number]> {
  return list.filter(([_, repeatedTimes]) => repeatedTimes % 2 !== 0)
}

function mapToNumber (list: Array<[number, number]>): number[] {
  return list.map(([number]) => number)
}

function removeRepeatedNumbers (list: number[]): number[] {
  return [...new Set(list)]
}

export default extractNumbersRepeatedOddTimes
