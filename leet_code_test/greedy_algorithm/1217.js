/**
 1217. 玩筹码
 数轴上放置了一些筹码，每个筹码的位置存在数组 chips 当中。

 你可以对 任何筹码 执行下面两种操作之一（不限操作次数，0 次也可以）：

 将第 i 个筹码向左或者右移动 2 个单位，代价为 0。
 将第 i 个筹码向左或者右移动 1 个单位，代价为 1。
 最开始的时候，同一位置上也可能放着两个或者更多的筹码。

 返回将所有筹码移动到同一位置（任意位置）上所需要的最小代价。

 示例 1：

 输入：chips = [1,2,3]
 输出：1
 解释：第二个筹码移动到位置三的代价是 1，第一个筹码移动到位置三的代价是 0，总代价为 1。
 示例 2：

 输入：chips = [2,2,2,3,3]
 输出：2
 解释：第四和第五个筹码移动到位置二的代价都是 1，所以最小总代价为 2。

 提示：

 1 <= chips.length <= 100
 1 <= chips[i] <= 10^9

 */

/**
 * 由于向左向右移动两个单位的代价是0，也就是说奇数位置相互移动、偶数位置相互转化不消化代价，则只需要看奇数位转换成偶数位、偶数位转换成奇数位的代价就可以了，这时由个数少的转化为个数多的代价最小，所以返回当前奇数位个数和偶数位个数的最小值即可
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    const l = position.length
    let oddCount = 0, evenCount = 0
    for (let i = 0; i < l; i++) {
        const item = position[i]
        if (item % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }
    return oddCount > evenCount ? evenCount : oddCount
};

// const chips = [1, 2, 3]
const chips = [2, 2, 2, 3, 3]
console.log(minCostToMoveChips(chips));