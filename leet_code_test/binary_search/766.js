/**
 * 766. 托普利茨矩阵
 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。


 示例 1：

 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 输出：true
 解释：
 在上述矩阵中, 其对角线为:
 "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
 各条对角线上的所有元素均相同, 因此答案是 True 。
 示例 2：


 输入：matrix = [[1,2],[2,2]]
 输出：false
 解释：
 对角线 "[1, 2]" 上的元素不同。


 提示：

 m == matrix.length
 n == matrix[i].length
 1 <= m, n <= 20
 0 <= matrix[i][j] <= 99


 进阶：

 如果矩阵存储在磁盘上，并且内存有限，以至于一次最多只能将矩阵的一行加载到内存中，该怎么办？
 如果矩阵太大，以至于一次只能将不完整的一行加载到内存中，该怎么办？
 通过次数45,080提交次数63,720
 */

/**
 * @param {number[][]} matrix
 * 思路：
 * 遍历当前二维矩阵，判断 matrix[i,j] 是否与 matrix[i-1,j-1] 相同，如果相同，继续比较下一个，如果不同，返回false
 * @return {boolean}
 */
// 当前方法的效率不是太高，时间复杂度 O(m*n)
var isToeplitzMatrix = function (matrix) {
    const l = matrix.length
    const subL = matrix[0].length
    let map = {}, flag = true
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < subL; j++) {
            const currentItem = matrix[i][j]
            map[`${i}${j}`] = currentItem

            if (map[`${i - 1}${j - 1}`] != null && map[`${i - 1}${j - 1}`] !== currentItem) {
                flag = false
                break
            }
        }
    }
    return flag
};
// const matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
// const matrix = [[1, 2], [2, 2]]
const matrix = [[0, 33, 98], [34, 22, 33]]
console.log(isToeplitzMatrix(matrix));

















