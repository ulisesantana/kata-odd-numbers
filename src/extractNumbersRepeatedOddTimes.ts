export const extractNumbersRepeatedOddTimes = pipe(
  sortList,
  groupNumbers,
  filterNumbersRepeatedEvenTimes
)

function pipe (...process: Function[]): (input: number[]) => number[] {
  return (input: number[]) => {
    if (process.length === 0) {
      return input
    }
    const [nextProcess, ...processQueue] = process
    return pipe(...processQueue)(nextProcess(input))
  }
}

function sortList (list: number[]): number[] {
  return list.sort((a, b) => a > b
    ? 1
    : a < b
      ? -1
      : 0
  )
}

function groupNumbers (listToCheck: number[], groupedNumbers = [] as number[][]): number[][] {
  const [numberToGroup] = listToCheck
  const nextNumberToGroupIndex = listToCheck.lastIndexOf(numberToGroup) + 1

  if (nextNumberToGroupIndex === listToCheck.length) {
    return [...groupedNumbers, listToCheck]
  }

  if (nextNumberToGroupIndex < listToCheck.length) {
    return groupNumbers(
      listToCheck.slice(nextNumberToGroupIndex),
      [...groupedNumbers, Array<number>(nextNumberToGroupIndex).fill(numberToGroup)]
    )
  }

  return groupedNumbers
}

function filterNumbersRepeatedEvenTimes (listToCheck: number[][], filteredNumbers = [] as number[]): number[] {
  const [groupedNumbers, ...restOfListToCheck] = listToCheck
  if (groupedNumbers === undefined) {
    return filteredNumbers
  }
  return filterNumbersRepeatedEvenTimes(
    restOfListToCheck,
    groupedNumbers.length % 2 !== 0
      ? [...filteredNumbers, groupedNumbers[0]]
      : filteredNumbers
  )
}

export default extractNumbersRepeatedOddTimes
