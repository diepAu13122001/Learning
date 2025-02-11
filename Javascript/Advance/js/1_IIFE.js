// IIFE: immediately invoked function expression
// IIFE = self-invoking function
// bieu thuc tao ham va ham duoc goi ngay lap tuc

// 1. IIFE la gi? -------------------------------------
// function expression
const sayHi = function () {
  console.log("hi");
};
sayHi(); // muon ham chay phai goi ra

(function () {
  console.log("hello");
})(); // ham duoc khai bao va goi chay cung buoc (immediate)

((name) => console.log(`your name is ${name}`))("Diep");
/**
 * Dau () nghia la tra lai gia tri trong ngoac khi console.log
 * (function () {}) -> f () {}
 * ("string") -> "string"
 * ([1,2,4]) -> [1,2,4]
 * Sau khi tra ve function, goi them () lan nua -> run
 */

// 2. Dung dau ; truoc IIFE ---------------------------
/**
 * Bat buoc phai ; cho dong truoc IIFE (bi nham thanh function)
 */

/* let fullName = "Diep Au" // error: fullName is not a function
(() => {})()
*/
let a = 10;
(() => {})();
// 3. IIFE la ham "private" ---------------------------
// chi dung duoc 1 lan :)
(function myFunction() {
  console.log("abc");
})();
// myFunction(); // out scope -> error: is not defined

// co the goi lai trong pham vi ham (de quy)
let i = 0;
(function de_quy() {
  i++;
  console.log(i);
  if (i < 10) {
    de_quy();
  }
})();

// 4. Su dung khi nao? --------------------------------
/**
 * - Khong co muc dich tai su dung
 * - Han che tao bien toan cuc (neu viet luon ngoai script)
 * - Cac bien duoc gioi han trong IIFE -> khong bi trung lap
 * => Phu hop de viet thu vien (carousel, bootstrap)
 */

// 5.Cach tao ra 1 IIFE -------------------------------
// cach 1:
/**
 * ;
 * (function <func_name> (params) {
 *  // todo
 * }) ()
 */

// cach 2: dung them 1 toan tu truoc IIFE (bo 1 () truoc)
// vi toan tu logic chuyen func -> boolean
// phai thuc thi function truoc khi convert
/* !/ &&/ || /-+* */ //!function () {}();

// 6. Vi du su dung IIFE ------------------------------
// tinh dong goi cua OOP (encapsulation)
// cach 1: danger code (user can destroy cars values)
const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
  delete(index) {
    this.cars.splice(index, 1);
  },
};

app.cars = null; // khong an toan
// app.add("abc"); // khong the su dung duoc nua -> loi do da gan cars la null

// cach 2: su dung IIFE
const app2 = (function () {
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();

// app2.cars // khong the truy cap
app2.add("xe 1");
console.log(app2.get(0)); 
