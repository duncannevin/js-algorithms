function binarySearch (array, target) {
  const midInd = Math.floor(array.length / 2)

  if (array[midInd] === target) return target
  else if (array.length <= 1) return null

  if (array[midInd] < target) {
    return binarySearch(array.slice(midInd), target)
  } else {
    return binarySearch(array.slice(0, midInd), target)
  }
}

module.exports = binarySearch
