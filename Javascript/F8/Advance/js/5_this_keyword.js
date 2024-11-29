/**
 * Tu khoa this trong JS de cap den doi tuong ma *no thuoc ve*
 * - Moi function co 1 ngu canh - context de run => this phu thuoc vao context
 * - Arrow function KHONG co context => khong co this
 * ----------------------------------------------------------------
 * [Dac tinh]
 * 1. Trong 1 phuong thuc, this tham chieu toi doi tuong truy cap phuong thuc (dt trc dau .)
 * 2. Dung ngoai phuong thuc, this tham chieu toi doi tuong global (this trong function)
 * ----------------------------------------------------------------
 * [Luu y]
 * - this trong ham tao la dai dien cho doi tuong se duoc tao
 * - this trong 1 ham la *undefined* khi o "strict mode"
 * - Cac phuong thuc bind, call, apply co the tham chieu this toi doi tuong khac mac dinh
 */

const my_phone = {
  // thuoc tinh: property
  name: "No name",
  color: "light purple",
  brand: "No name",
  // phuong thuc: method
  takePhoto() {
    console.log(this); // tra ve chinh object my_phone
  },
  objChild: {
    name: "abc",
    method_child() {
      console.log(this); // tra ve object child
    },
  },
};

// ---------------------------------------------------------
// Ham tao - constructor
function Cat(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.speak = function () {
    console.log(this, " meww~~~"); // this trong ham tao
  };
}
// them phuong thuc moi
Cat.prototype.sleep = function () {
  console.log(this); // tro den object cat
  // ham long trong phuong thuc => this tro den global
  function subFunc() {
    console.log(this); // tro den window object (day la ham, khong phai method)
    // neu co strict mode => undefined
  }
  subFunc();
  // arrow function => tra ve chinh this cua ben ngoai
  const arrow_func = () => {
    console.log(this); // cat object
  };
  arrow_func();
};

const didi = new Cat("Didi", "golden", 1);
didi.speak(); // tra ve chinh object didi => this = didi
didi.sleep();

// ---------------------------------------------------------
// HTML DOM
const clickMeBtn = document.getElementById("click_me_btn");

clickMeBtn.onclick = function () {
  console.log(this); // tro toi chinh element button click me
};

/**
 * viec viet code trong JS tuong duong voi viet JS inline trong HTML
 * vd: <button onclick="console.log(this)">Click me</button>
 * => van in ra chinh element button click me
 */

// ---------------------------------------------------------
// strict mode voi global this trong function
function func() {
  console.log(this);
}

func(); // tra ve object window (global object) vi khong co OBJECT DUNG TRUOC NO
// neu co them strict mode => khong chap nhan this vi k co object => undefined
/** "use strict";
 * window.func() => tra ve object window, k bi undefined
 */
