function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
       if (array[i] > array[i+1]) {
           const holds = [array[i], array[i+1]]
           array[i] = holds[1]
           array[i + 1] = holds[0]
           bubbleSort(array)
       }
    }
    return array
}

module.exports = bubbleSort
