// Callback: la ham, duoc truyen qua doi so khi goi ham khac, duoc goi lai trong ham khac

function checkVar(...params) {
  params.forEach((element) => {
    console.table({ value: element, type: typeof element });
  });
}

function myFunc(callback) {
  // phai kiem tra truoc khi thuc thi
  if (typeof callback === "function") {
    callback("Hello");
  }
}

function myCallBack(param) {
  console.log("value: ", param);
}

checkVar(123, myCallBack); // spread operator
myFunc(myCallBack);

//vi du -----------------------------------------------------
var course = ["JavaScript", "Java", "Python"];
// viet lai function map -------------------------
// add them phuong thuc trong prototype cua array
Array.prototype.map2 = function (callback) {
  // this => goi toi obj (vd: course)
  console.log(this); // course
  let output = [],
    arrLen = this.length; // de nhanh hon, khong bi goi qua length nhiu lan
  for (let index = 0; index < arrLen; index++) {
    // map goi lai function callback
    let result = callback(this[index], index);
    output.push(result);
  }
  return output; // tra ve danh sach => callback phai co return
};

let lis = course.map2((e, i) => {
  console.log(i, e);
  return i + ": " + e;
});

console.log(lis);

// viet lai function forEach -------------------------
// forEach truyen 2 doi so: cb (element, index, array), thisAgr (hoc sau)
// khong return
// chi lap qua cac phan tu thuc => phai dung for in
// dinh nghia function
Array.prototype.forEach2 = function (cb) {
  // duyet luon ca map2 va forEach2 (vi forEach2 duoc xem la key - obj prototype)
  // prototype se khong duoc ke thua tu object/ array class => khi tu dinh nghia => k duoc ke thua
  for (const i in this) {
    // van de can giai quyet: k duyet qua element cua prototype

    // kiem tra index co nam trong phan tu gan nhat hay nam trong thuoc tinh con
    if (this.hasOwnProperty(i)) {
      cb(this[i], i, this);
    }
  }
};
console.log("forEach---------------------------------");
course.forEach2((e, i, arr) => {
  console.log(i, e, arr);
});

// viet lai function find -------------------------
// viet lai function filter -------------------------
// viet lai function some -------------------------
// viet lai function every -------------------------
// viet lai function reduce -------------------------
