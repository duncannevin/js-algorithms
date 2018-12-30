const expect = require('chai').expect
const binarySearch = require('../searching/binarySearch')
module.exports = function bubbleSortSpec () {
  describe('binary search', function () {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    it('should find all numbers in sorted array', function () {
      array.forEach((int) => {
        expect(binarySearch(array, int)).to.equal(int)
      })
    })

    it('should return null if number not found', function () {
      expect(binarySearch(array, 1000)).to.equal(null)
    })
  })
}
