function insertionSort (array) {
    let holePos, valToInsert

    for (let i = 1; i < array.length; i++) {
        holePos = i
        valToInsert = array[i]

        while (holePos > 0 && array[holePos - 1] > valToInsert) {
            array[holePos] = array[--holePos]
        }

        array[holePos] = valToInsert
    }

    return array
}

module.exports = insertionSort
