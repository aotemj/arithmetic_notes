/**
 * 使用滑动窗口进行二分查找
 */



function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1, middle = -1
    while (left <= right) {
        middle = parseInt((left + right) / 2)
        const currentNum = nums[middle]
        if (currentNum > target) {
            right = middle - 1
        } else if (currentNum < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return middle
}

console.log(binarySearch([1, 3, 4, 5, 6, 7, 9, 11, 22, 35], 3));
