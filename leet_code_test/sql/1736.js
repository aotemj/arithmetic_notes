/**
 1736. 替换隐藏数字得到的最晚时间
 给你一个字符串 time ，格式为 hh:mm（小时：分钟），其中某几位数字被隐藏（用 ? 表示）。

 有效的时间为 00:00 到 23:59 之间的所有时间，包括 00:00 和 23:59 。

 替换 time 中隐藏的数字，返回你可以得到的最晚有效时间。

 示例 1：

 输入：time = "2?:?0"
 输出："23:50"
 解释：以数字 '2' 开头的最晚一小时是 23 ，以 '0' 结尾的最晚一分钟是 50 。
 示例 2：

 输入：time = "0?:3?"
 输出："09:39"
 示例 3：

 输入：time = "1?:22"
 输出："19:22"

 提示：

 time 的格式为 hh:mm
 题目数据保证你可以由输入的字符串生成有效的时间
 */

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  const [hour1, hour2, , minute1, minute2] = time
  const symbol = '?'
  let resHour = `${hour1}${hour2}`
  let resMinute = `${minute1}${minute2}`
  if (hour1 === symbol && hour2 === symbol) {
    resHour = '23'
  }
  if (hour1 === symbol && hour2 !== symbol) {
    switch (hour2) {
      case '0':
      case '1':
      case '2':
      case '3':
        resHour = `2${hour2}`
        break
      default:
        resHour = `1${hour2}`
    }
  } else if (hour1 !== symbol && hour2 === symbol) {
    switch (hour1) {
      case '0':
      case '1':
        resHour = `${hour1}9`
        break
      default:
        resHour = `${hour1}3`
    }
  }

  if (minute1 === symbol && minute2 === symbol) {
    resMinute = '59'
  }
  if (minute1 !== symbol && minute2 === symbol) {
    resMinute = `${minute1}9`
  } else if (minute1 === symbol && minute2 !== symbol) {
    resMinute = `5${minute2}`
  }
  return `${resHour}:${resMinute}`
}
// const time = '0?:3?'
const time = '1?:22'
// const time = '2?:?0'
console.log(maximumTime(time))
