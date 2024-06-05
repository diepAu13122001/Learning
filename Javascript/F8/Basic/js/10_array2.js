var data = [
  { course: "a", name: "abc", price: 123 },
  { course: "b", name: "def", price: 12 },
  { course: "c", name: "gih", price: 1 },
  { course: "d", name: "lmn", price: 87 },
  { course: "e", name: "opq", price: 140 },
  { course: "f", name: "rsu", price: 200 },
  { course: "g", name: "xyz", price: 50 },
];
// forEach()--------------------------------------------------------------------------
data.forEach((element, index) => {
  // callback function
  console.log(index, ":", element);
});

// every() ---------------------------------------------------------------------------
//kiem tra tat ca cac phan tu co thoa 1 dieu kien nao khong
// return boolean - neu element 1 true => moi kiem den element 2
console.log(
  data.every((element, index) => {
    return element.price > 0;
  })
); // => true

console.log(
  data.every((element, index) => {
    console.log(index); // chi in ra 0 => dung luon
    return element.price == 0;
  })
); // => false

// some() ----------------------------------------------------------------------------
// nguoc lai voi every - 1 element thoa dieu kien => return true
console.log(
  data.some((element, index) => {
    console.log(index); // in tat ca vi khong kiem thay true de stop
    return element.price == 0;
  })
); // => false

console.log(
  data.some((element, index) => {
    return element.price > 100;
  })
); // => true

// find() ----------------------------------------------------------------------------
// kiem tra co phan tu hay khong => return element (ONLY ONE)
console.log(
  data.find((element, index) => {
    return element.name === "opq"; // tim thay => ket thuc ngay
  })
); // => { course: 'e', name: 'opq', price: 140 }

// filter() ---------------------------------------------------------------------------
// same find() => return a list elements for fit the condition
console.log(data.filter((element, index) => element.price > 100));
/**
 *  => [
  { course: 'a', name: 'abc', price: 123 },
  { course: 'e', name: 'opq', price: 140 },
  { course: 'f', name: 'rsu', price: 200 }
]
*/

// map() ------------------------------------------------------------------------------
// duyet qua toan bo mang => return a new list
// viet gon + ngan hon vong lap
// change value for properties of all elements in list
var newData = [...data];
newData.map((element, index, originalArr) => {
  // originalArr => return the old list per loop
  element.name = "Khoa hoc: " + element.name;
  element.index = index;
  return element; // khong co dong nay => chi tra ve list of name
});
console.log(newData); // a list with new name and add index property

// reduce() ---------------------------------------------------------------------------
// viet gon + ngan hon vong lap
// tinh tong
// 0: gia tri khoi tao; neu k co => chay 2 element lien tuc trong lan chay dau tien
// accumulator: gia tri luu tru (tong cu)
// =>lan dau tien: = gia tri khoi tao, k co => lay phan tu dau tien cua mang
// => tu lan 2, luu lai gia tri return cua lan chay truoc
// currentValue: gia tri hien tai
// currentIndex: dia chi cua element hien tai
// originalArr: danh sach dang su dung => khi danh sach thay doi, originalArr cung thay doi
var totalPrice = data.reduce(
  (accumulator, currentValue, currentIndex, originalArr) => {
    console.table({
      "lan chay": currentIndex + 1,
      "bien tich tru": accumulator,
      "phan tu hien tai": JSON.stringify(currentValue),
    });
    return currentValue.price + accumulator;
  },
  0
);

// Example ---------------------
// lam phang (plat) mang sau (depth array) => tra ve 1 mang duy nhat
var depthArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// return arr => gia tri khoi tao = []
// su dung concat de noi mang
var platArr = depthArr.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(platArr); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// build lai ham reduce -----------------------------------
// add them mot function trong object Array
Array.prototype.my_reduce = function (callback, init) {
  let index = 0;
  // kiem tra xem  co truyen doi so init khong
  if (arguments.length < 2) {
    index = 1;
    init = this[0];
  }
  for (; index < this.length; index++) {
    init = callback(init, this[index], index, this);
  }
  return init;
};

console.log(platArr.my_reduce((a, c) => a + c));

// change array => object
function arrToObj(arr) {
  return arr.reduce((a, c) => {
    a[`${c[0]}`] = c[1];
    return a;
  }, {});
}

// Expected results:
var arr = [
  ["name", "Diep Au"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Diep Au', age: 18 }

// includes() -----------------------------------------------------------------------------
// kiem tra co chua gia tri khong => return boolean
// string -----------------
var s = "Hello world";
console.log(s.includes("h")); // false

// array -----------------
var names = data.map((element) => element.name);
console.log(names);
console.log(names.includes("abc")); // false
console.log(names.includes("Khoa hoc: abc")); // true (phai nhap het gia tri phan tu)
// co truyen them vi tri bat dau tim
console.log(names.includes("Khoa hoc: abc", 1)); // false (tim tu vi tri thu 1)
console.log(names.includes("Khoa hoc: abc", -7)); // true (tim tu vi tri thu len + - 7)

// callback function se ton thoi gian hon so voi vong lap (khong dang ke) *********
