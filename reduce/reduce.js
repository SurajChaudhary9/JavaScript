Array.prototype.myReducer = function (callback) {
  var a = 0;                                        // Accumulator a
  for (
    let i = 0;
    i < this.length;
    i++                                             // For loop 1 - n
  ) {
    callback((a = a + this[i]));                    // Accumulate sum in a
  }

  return a;                                         // Return Accumulator a
};

//**Array to be iterated**//
var array = [5, 21, 61, 8, 1];
let result = array.myReducer((acc, item) => acc + item);
console.log(result);
