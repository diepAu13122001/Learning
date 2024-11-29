/**
 * - Bind: rang buoc
 * - Phuong thuc bind se tra ve 1 ham moi (k sua this)
 * - Co the nhan doi so nhu ham ban dau
 */

// ===============================================
// Vi du 1: sao chep phuong thuc trong object
first_name = "A";
last_name = "B";
const person = {
  first_name: "M",
  last_name: "N",
  //   ham khong tham so
  get_fullname() {
    return `${this.first_name} ${this.last_name}`;
  },
  //   ham co tham so truyen vao
  say_something(a, b) {
    console.log(a, b);
  },
};

console.log(person.get_fullname()); // M N
const get_name = person.get_fullname;
console.log(get_name()); // A B
// => do goi ham khong thong qua doi tuong => goi den global
// dung bind ---------------------------
const get_name2 = person.get_fullname.bind(person); // tao 1 ham get_fullname moi
console.log(get_name2()); // M N

const say = person.say_something.bind(person, 12, 4); // chi nhan 12, 4
say(111, 111); // tham so khi truyen tai day khong nhan => out 12 4

// ===============================================
// Vi du 2: goi pth cua object cho dom element
const clickMeBtn = document.getElementById("click_me_btn");
clickMeBtn.onclick = function () {
  person.get_fullname(); // cach viet dung
  // function k co object dung truoc => tro toi global
};

// cach 2:
clickMeBtn.onclick = person.get_fullname; // this tro toi button click me
// => tra ve undefined
// cach viet dung:
clickMeBtn.onclick = person.get_fullname.bind(person);
