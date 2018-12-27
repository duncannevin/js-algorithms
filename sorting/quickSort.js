function quickSort (array) {
    if (array.length <= 1) return array

    const pivot = array.splice(Math.ceil(array.length / 2), 1)
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot[0]) left.push(array[i])
        else if (array[i] > pivot[0]) right.push(array[i])
        else pivot.push(array[i])
    }

    return quickSort(left).concat(pivot).concat(quickSort(right))
}

module.exports = quickSort
