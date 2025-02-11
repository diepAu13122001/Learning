// Hoisting: dua len, keo len => khai bao bien, ham se duoc dua len tren
// => giup bien duoc dua len dau pham vi, khong lay sai du lieu
// cua nhung bien ngoai pham vi

// Hoisting voi var/ function declaration ----------------------------------
/**
 * dua cac khai bao bien voi var va khai bao ham len dau pham vi duoc khai bao
 * [Chu y]: chi dua phan khai bao, khong them phan gan gia tri
 */

// var
console.log(age); // undefined
// console.log(fullname); // error is not defined
var age = 16;

// function
console.log(sum(1, 2)); // 3

function sum(a, b) {
  return a + b;
}

// Hoisting voi let/ const -------------------------------------------------
/**
 * [Chu y]: khai bao bien voi let, const khi duoc hoisted khong duoc tao ra gia tri
 * => dua vao "temporal dead zone"
 */
{
  //   console.log(fullname); // error: cannot access before init
  let fullname = "abc";
}

// ----------------------------------------------------------------------
const counter = makeCounter();
console.log(counter()); // 1

function makeCounter() {
  let count = 0;
  // increase duoc goi la closure
  return increase; // khong bi anh huong do phai khai bao ham

  function increase() {
    return ++count;
  }
}
