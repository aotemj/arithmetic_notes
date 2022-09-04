/**
 * 77. Combinations
 Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

 You may return the answer in any order.

 Example 1:

 Input: n = 4, k = 2
 Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 Explanation: There are 4 choose 2 = 6 total combinations.
 Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 Example 2:

 Input: n = 1, k = 1
 Output: [[1]]
 Explanation: There is 1 choose 1 = 1 total combination.

 Constraints:

 1 <= n <= 20
 1 <= k <= n
 * @param n
 * @param k
 */
function combine(n: number, k: number): number[][] {
  let result: number[][] = []
  let patch: number[] = []
  backTracking(n, k, 1)

  function backTracking(n: number, k: number, index: number): void {
    if (patch.length == k) {
      result.push([...patch])
      return
    }

    for (let i = index; i <= n; i++) {
      patch.push(i);
      backTracking(n, k, i + 1);
      patch.pop();
    }
  }

  return result
};

console.log(combine(4, 2));