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

// ===============================================
// cách sử dụng $ để lưu giá trị của element trong HTML
// const $ = document.querySelector;
// const $$ = document.querySelectorAll;

// console.log(document.querySelector("body")); // tra ve body
// console.log($("body")); // tra ve undefined vi this tro toi global (window)
// => dung bind: const $ = document.querySelector.bind(document);

// vi du: tao app them - xoa item cho danh sach
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const items = ["A", "B", "C"];
  // lay element tu hTML
  const input = $("#input_field");
  const addBtn = $("#add_btn");
  const list = $("#output_list");

  return {
    // ham khoi tao
    init() {
      // handle add item
      // addBtn.onclick = this.add.bind(this);
      addBtn.onclick = () => {
        this.add();
        // truong hop nay dung arrow function k co context => tu dong tro ra ngoai
      };
      // handle remove item
      list.onclick = this.delete.bind(this);
      this.render();
    },
    // add input data in list
    add() {
      if (input === "") return;
      items.push(input.value);
      this.render();
    },
    // render list
    render() {
      list.innerHTML = "";
      items.forEach((item, index) => {
        if (item == "") {
          return;
        }
        list.innerHTML += `<li>${item} <button class="del_btn" data-index="${index}">X</button></li>`;
      });
    },
    // remove item in UI
    delete(event) {
      // xoa chinh xac phan tu tai vi tri click (chi xoa khi click vao button)
      const del_btn_clicked = event.target.closest(".del_btn");
      if (del_btn_clicked) {
        // xoa trong danh sach
        // dat them thuoc tinh "data-[...]" => JS co the goi lai thong qua dataset.[...]
        items.splice(del_btn_clicked.dataset.index, 1);
        this.render();
      }
    },
  };
})();

app.init();
