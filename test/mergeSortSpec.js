const expect = require('chai').expect
const mergeSort = require('../sorting/mergeSort')
const {sortInt} = require('./helpers')

module.exports = function bubbleSortSpec () {
    describe('merge sort', function () {
        it('should sort an array of numbers', function () {
            const array = [4, 5, 1, 10, 3, 9, 8, 2, 6, 7]
            const cSorted = array.slice().sort(sortInt)
            const bSorted = mergeSort(array)

            expect(bSorted).to.eql(cSorted)
        })

        it('should sort an array of negative numbers', function () {
            const array = [-4, -5, -1, -10, -3, -9, -8, -2, -6, -7]
            const cSorted = array.slice().sort(sortInt)
            const bSorted = mergeSort(array)

            expect(bSorted).to.eql(cSorted)
        })

        it('should sort an array of strings', function () {
            const array = ['f', 'a', 'g', 'b', 'c', 'e', 'f']
            const cSorted = array.slice().sort()
            const bSorted = mergeSort(array)

            expect(bSorted).to.eql(cSorted)
        })
    })
}
