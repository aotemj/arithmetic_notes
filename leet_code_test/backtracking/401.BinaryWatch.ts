/**
 * A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
 *
 * For example, the below binary watch reads "4:51".
 *
 *
 * Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *
 * For example, "01:00" is not valid. It should be "1:00".
 * The minute must be consist of two digits and may contain a leading zero.
 *
 * For example, "10:2" is not valid. It should be "10:02".
 *  
 *
 * Example 1:
 *
 * Input: turnedOn = 1
 * Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 * Example 2:
 *
 * Input: turnedOn = 9
 * Output: []
 *  
 *
 * Constraints:
 *
 * 0 <= turnedOn <= 10
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/binary-watch
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param turnedOn
 */
function readBinaryWatch(turnedOn: number): string[] {
  let time = [800, 400, 200, 100, 32, 16, 8, 4, 2, 1];
  let path: number[] = []
  let result: string[] = []
  backtracking(turnedOn, 0)

  function backtracking(turnedOn: number, index: number) {
    if (path.length === turnedOn) {
      const {hour, minute, time} = transforTime(path)
      if (hour < 12 && minute < 60) {
        result.push(time)
      }
      return
    }


    for (let i = index; i < time.length; i++) {
      path.push(time[i]);
      backtracking(turnedOn, i + 1)
      path.pop()
    }
  }

  function transforTime(path: number[]): { time: string, hour: number, minute: number } {
    let result: string = ''
    let hour = 0
    let minute = 0
    for (let i = 0; i < path.length; i++) {
      if (path[i] >= 100) {
        hour += path[i]
      } else {
        minute += path[i]
      }
    }
    let tempMinute = `${minute}`
    // console.log(tempMinute)
    result = `${hour/100}:${tempMinute.padStart(2, '0')}`
    return {
      time: result,
      hour:hour/100,
      minute: minute
    }
  }

  return result
};
