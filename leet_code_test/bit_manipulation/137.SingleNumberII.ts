/**
 * 137. Single Number II
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 *  
 *
 * Example 1:
 *
 * Input: nums = [2,2,3,2]
 * Output: 3
 * Example 2:
 *
 * Input: nums = [0,1,0,1,0,1,99]
 * Output: 99
 *  
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 104
 * -231 <= nums[i] <= 231 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/single-number-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param nums
 */
function singleNumber(nums: number[]): number {
  const l = nums.length;
  const map:{[key:string]:number} = {}
  const onceMap:{[key:string]:number}  = {}
  for(let i =0;i<l;i++){
    const item = nums[i]
    if(map[item]){
      map[item]+=1
      delete onceMap[item]
    } else {
      map[item] = 1
      onceMap[item] = 1
    }
  }

  return Number(Object.keys(onceMap)[0])
};
