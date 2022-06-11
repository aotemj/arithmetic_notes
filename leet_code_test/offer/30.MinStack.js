var MinStack = function () {
  this.list = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.list.push(x)
}
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.list.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.list[this.list.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return Math.min(...this.list)
}
