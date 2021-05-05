/**
 746. 使用最小花费爬楼梯
 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。



 示例 1：

 输入：cost = [10, 15, 20]
 输出：15
 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
 示例 2：

 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 输出：6
 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。


 提示：

 cost 的长度范围是 [2, 1000]。
 cost[i] 将会是一个整型数据，范围为 [0, 999]
 */

/**
 * 动态规划经典案例:
 思路：dpArr 为每一个台阶需要花费的体力值，由题意可知，当前 第一个和第二个台阶不花费体力值，从第三个台阶开始需要计较，
 从第一阶上到第三阶划算还是从第二阶上到第3阶划算，然后把比较的结果填入 dpArr,最后取出跳到目标台阶的最划算值即可
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const l = cost.length
    let dpArr = [0, 0]
    while (dpArr.length <= l) {
        const dpl = dpArr.length
        dpArr[dpl] = Math.min(dpArr[dpl - 1] + cost[dpl - 1], dpArr[dpl - 2] + cost[dpl - 2])
    }
    return dpArr.pop()
};

const cost = [10, 15, 20]
// const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

console.log(minCostClimbingStairs(cost));

// i    花费体力
// 0    10
// 1    15
// 2    20


// 0    1
// 1    100
// 2    1
// 3    1
// 4    1
// 5    100
// 6    1
// 7    1
// 8    100
// 9    1