var sum = function(a, b) {
  return a + b;
};

function somemore() {
  var x = this.sum + 3;
  return x;
}
module.exports = sum;
module.exports = somemore;
