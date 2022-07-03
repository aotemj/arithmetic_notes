/**
 * 剑指 Offer 63. 股票的最大利润
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 * 限制：
 *
 * 0 <= 数组长度 <= 10^5
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let length = prices.length
//   if (!length) {
//     return 0
//   }
//
//   let dp = {
//     '0': 0,
//     '1': prices[1] > prices[0] ? prices[1] - prices[0] : 0
//   }
//
//   let index = 2
//   if (length < index) {
//     return dp[length - 1]
//   }
//   while (index < length) {
//     dp[index] = Math.max(dp[index - 1], prices[index] - Math.min(...prices.slice(0, index)))
//     index += 1
//   }
//
//   return dp[length - 1]
// }
var maxProfit = function (prices) {
  let length = prices.length
  let profit = 0
  let cost = Number.MAX_VALUE
  let index = 0
  while (index < length) {
    cost = Math.min(cost, prices[index])
    profit = Math.max(profit, prices[index] - cost)
    index += 1
  }

  return profit
}

// let prices = [7, 1, 5, 3, 6, 4]
// let prices = [7, 6, 4, 3, 1]
// let prices = [1, 2]
let prices = [2, 1, 4]
console.log(maxProfit(prices))
