function mergeSort (array) {
    if (array.length === 1) {
        return array
    }

    const middle = Math.ceil(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge (
        mergeSort(left),
        mergeSort(right)
    )
}

function merge (left, right) {
    const result = []
    let lInd = 0
    let rInd = 0

    while (lInd < left.length && rInd < right.length) {
        if (left[lInd] < right[rInd]) {
            result.push(left[lInd])
            lInd++
        } else {
            result.push(right[rInd])
            rInd++
        }
    }

    return result.concat(left.slice(lInd)).concat(right.slice(rInd))
}

module.exports = mergeSort
