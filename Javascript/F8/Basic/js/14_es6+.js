// es6: 2015 - ESMAScript 6 (like W3C)
//-----------------------------------------------------
// 1. Let, const
// >< var: scope, hosting (code block {}) --------------
// if (true) // khong can viet
{
  var course = "Javascript basic";
  const a = "abc";
  {
    const a = "xyz"; // uu tien block nho nhat
  }
  console.log(a);
}
// console.log(a); // error
console.log(course);

// hosting: trinh bien dich viet lai cac dinh nghia bien len dau file => scope toan bo file
// let, const khong ho tro hosting

// >< var: assignment  (lenh gan value) -----------------
const a = 123;
// a = 1234; // khong the su dung TOAN TU GAN LAN THU 2 => loi
const obj = { name: "abc" };
obj.name = "xyz"; // van se thay doi duoc cac thuoc tinh cua constant

//-----------------------------------------------------
// 2. Template Literals ` ${var}`
const courseName = "abc";
// const courseDescription = 'It is: ' + courseName;
const courseDescription = `It is: ${courseName}`;
// them ky tu dat biet + "\"
const specialSymbols = `this is a special symbol: \${}`;

//-----------------------------------------------------
// 3. Multi-line string (use template string)
const lines_1 = "line 1\nline 2\nline 3";
console.log(lines_1);
const lines = `line 1
line 2
line 3`;
console.log(lines); // tat ca string deu xuong hang dung theo phan edit

//-----------------------------------------------------
// 4. Arrow function
// Declarations function - named function
function message2(message) {
  console.log(message);
}
// anonymous function - expression function (vo danh)
const message1 = function (message) {
  console.log(message);
};
// arrow function
const message = (mess) => console.log(mess);
// *** how to return an object in arrow function? => use ()
const objectA = (a, b) => ({ a, b });
console.log(objectA(12, 54));
// *** khong the su dung cho context
const course1 = {
  name: "Javascript",
  getName: function () {
    return this.name; // context
  },
  getNameArrowFunc: () => this.name,
};
console.log(course1.getName()); // javascript
console.log(course1.getNameArrowFunc()); // undefined
// *** khong the tao ra constructor function
function expClass(name) {
  this.name = name;
}
var cls = new expClass("abc");
console.log(cls.name);

const expClass2 = (name) => {
  this.name = name;
};
// var cls2 = new expClass2("abc");
// console.log(cls2.name); // error: Class2 is not a constructor

//-----------------------------------------------------
// 5. Classes (thay the cho object constructor)
// viet gon hon constructor function + chia tang cho method de nhin hon
class abc {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//-----------------------------------------------------
// 6. Default parameter values
// su dung cho ham co tham so khong bat buoc phai nhap vao
function checkUndefined(log, type) {
  if (type === undefined) {
    console.log(log);
    return;
  }
  console[type](log); // type can be: warn, error, ...
}
checkUndefined("message...");

// param = default value if user didn't input that param
function checkUndefined2(log, type = "log") {
  console[type](log); // type can be: warn, error, ...
}
checkUndefined2("message...");

//-----------------------------------------------------
// 7. Destructuring (use for object + array)
var course_list = ["JS", "Java", "PHP"];
var [q, w, e] = course_list;
// var q = course_list[0];
// var w = course_list[1];
// var e = course_list[2];
console.table({ q, w, e });

//-----------------------------------------------------
// 8. Rest parameters (destructuring => lay ra phan con lai - last)
// *** with array
var [r, ...rest] = course_list;
console.log(rest); // return a list with all last items in list (- r)

// *** with object
var course_obj = {
  name: "Java",
  price: 1000,
  image: "address",
  children: {
    name: "Spring",
  },
};
var { name, ...newObject } = course_obj; // need to call exactly property name
// how to remove or create sub object by old object but not use 'delete'
console.log(newObject); // return a object
// get children properties value (name - duplicate) => set a new name for the var
var {
  name: parentName,
  children: { name: childrenName },
  ...newObject
} = course_obj;
console.log({ parentName, childrenName });
// add default value for null property
var { newProperty = "default value", ...rest } = course_obj;
console.log(newProperty);

// *** with function (like arguments[])
function logger(a, b, ...params) {
  // console.log(arguments); // return an Object (like array)
  return params; // => an array (without 2 first param for a,b)
}

console.log(logger(1)); // []
console.log(logger(1, 23, 4)); // [4]
console.log(logger(...course_list)); // [ 'PHP' ]

// old way ---
// function logger2(obj) {console.log(obj.name)}
// new way ---
function logger2({ name, price, ...rest }) {
  console.log(name);
}

function logger3([a, b, ...rest]) {
  console.log(a, b);
  console.log(rest);
}

//-----------------------------------------------------
// 9. Spread (toan tu rai tham so)
// spread: argument || rest: create a var/ parameter

// *** noi mang
var arr1 = ["12", "ac", "de"];
var arr2 = ["e", "ca"];
// var arr1_2 = arr1.concat(arr2);
var arr1_2 = [...arr1, ...arr2, "oo"];
console.log(arr1_2);

// *** noi object
var obj1 = { a: "a", b: "b", c: "c" };
var obj2 = { d: "d", e: "e" };
var obj1_2 = { ...obj1, ...obj2, a: "a" }; // mat api bi trung => lay cai cuoi cung
console.log(obj1_2);

//-----------------------------------------------------
// 10. Enhanced object literals
// 1. dinh nghia key: value trong object (rut gon hon)
var x = 123,
  y = 45;
var object_1 = { x: x, y: y };
var object_2 = { x, y }; // gon hon

// 2. Dinh nghia method cho object
var object_3 = {
  x: x,
  y: y,
  getSum: function () {
    return this.x + this.y;
  },
};
var object_4 = {
  x,
  y,
  getSum() {
    // k can ghi function + k co name property
    return this.x + this.y;
  },
};

// 3. Dinh nghia key cho object duoi dang bien => tuy chinh thuoc tinh
var user_input = "property";
object_4[user_input] = "abc";
console.log(object_4);

var object_5 = {
  name: "xyz",
  [user_input]: "abc",
};
console.log(object_5);

//-----------------------------------------------------
// 11. Tagged template literal (tao ra ham tao html tag giong React)
// Template literal = ` `
// tao ham highlight cac bien noi suy
function highlight([first, ...strings], ...values) {
  // first: string tu dau => truoc bien noi suy dau tien
  //  values: danh sach bien noi suy
  // console.table({first, strings, values});
  return values.reduce(
    (acc, curr) => [...acc, `<strong>${curr}</strong>`, strings.shift()],
    [first]
  );
}
var t = "abc";
var y = "xyz";
const html = highlight`Day la 2 bien noi suy ${t} va ${y}`; // return an arr
console.log(html.join(""));

//-----------------------------------------------------
// 12. Modules (import/export)
// import exportModule, { a, b, c } from "./logger.js";
// import exportModule, * as cons_obj from "./logger.js";
// {a,b,c}/ cons_obj => destructuring => create an object with 3 property

// *** dung cho file trung gian - endpoint
// import myFunc  as abc from './abc.js'; export default abc; // cach 1
// export { default as abc } from "./abc.js"; // cach 2
// => lay ra phuong thuc export default trong file abc.js

//-----------------------------------------------------
// 13. Optional chaining (?.) - check undefined/null arr/obj
// old way ---
const non_obj = { child1: { child2: 2 } };
if (non_obj) {
  if (non_obj.child1) {
    if (non_obj.child1.child2) {
      if (non_obj.child1.child2.child3) {
        console.log(non_obj.list);
      }
    }
  }
}
// new way ---
// nghi ngo cho nao khong ton tai => them ? vao chinh xac
if (non_obj.child1.child2?.child3) {
  console.log(non_obj.child3);
}

/**
 * obj.val?.prop
 * obj.val?.[expr]
 * obj.arr?.[index]
 * obj.func?.(args)
 */

//-----------------------------------------------------
// Babel
