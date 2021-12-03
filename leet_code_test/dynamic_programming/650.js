/**
 650. 只有两个键的键盘
 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：

 Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
 Paste (粘贴) : 你可以粘贴你上一次复制的字符。
 给定一个数字 n 。你需要使用最少的操作次数，在记事本中打印出恰好 n 个 'A'。输出能够打印出 n 个 'A' 的最少操作次数。

 示例 1:

 输入: 3
 输出: 3
 解释:
 最初, 我们只有一个字符 'A'。
 第 1 步, 我们使用 Copy All 操作。
 第 2 步, 我们使用 Paste 操作来获得 'AA'。
 第 3 步, 我们使用 Paste 操作来获得 'AAA'。
 说明:

 n 的取值范围是 [1, 1000] 。
 */

/**
 * 最后一步的结果
 * 思路：
 * 1.如果当前 n 为质数，则最少需要 n 次
 * 2. 如果当前 n 不是质数，则需要求出 所有 n 的 每组因数组成的最小次数，最小次数
 * 2.1
 * @param {number} n
 * @return {number}
 */

let stepMap = {}
var minSteps = function (n) {
  if (n === 1) return 0
  if (stepMap[n]) return stepMap[n]
  let factors = []
  for (let i = 1; i < Math.ceil(n / 2); i++) {
    if (n % i === 0) {
      factors.push([i, n / i])
    }
  }
  // 质数
  const l = factors.length
  if (l === 1) {
    stepMap[n] = n
    return n
  } else {
    let minCount = n
    for (let i = 1; i < l; i++) {
      const [a, b] = factors[i]
      // 由规律可知，n 的每一对因数（a,b）都有如下规律：
      // n 的最小操作次数 = a的最小操作次数 + b 或
      // n 的最小操作次数 = b的最小操作次数 + a
      minCount = Math.min(minSteps(a) + b, minSteps(b) + a, minCount)
    }
    stepMap[n] = minCount
    return minCount
  }
}

console.log(minSteps(1))

// 1. copy ALl  A
// 2. Paste     AA
// 3. Paste     AAA
// 4. CopyAll   AAA
// 5. Paste     AAAAAA

// 1. copy ALl  A
// 2. Paste     AA
// 3. COPYALL   AA
// 4. paste     AAAA
// 5. paste     AAAAAA

