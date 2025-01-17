// Định nghĩa: là phương thức trong prototype của Function constructor,
// phương thức này được dùng để gọi hàm và cũng có thể "bind this" cho hàm.

// [SO SANH]: bind là ràng buộc this, call là ràng buộc + gọi lại hàm và chạy

// -----------------------------
// Gọi hàm với call method
function abc() {
  console.log("abc");
}
// cach goi thuong
abc();
// goi bang call
abc.call();

// -----------------------------
// Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
// tao object
const obj_person1 = {
  name: "abc",
  age: 12,
};

const obj_person2 = {
  name: "xyz",
  age: 25,
  showInfo() {
    console.log(`${this.name}:  ${this.age}`); // this -> window
  },
};

// obj_person2.showInfo.call(); // undefined vi khong nhan duoc this
obj_person2.showInfo.call(obj_person1); // abc: 12
obj_person2.showInfo.call(obj_person2); // xyz: 25

// use strict mode -------------------------------------
("use strict"); // khong nhan duoc this => window
this.firstName = "A";
this.lastName = "B";

function showName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

showName(); // khong the goi lai vi strict mode
showName.call(this); // hien thi "A B"

// -----------------------------
// Thể hiện kế thừa (extends) trong OOP
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Fish(name, weight, length) {
  // cach viet ke thua
  Animal.call(this, name, weight);
  this.length = length;
}

const fish_1 = new Fish("Fish 1", 2000, 1000);
console.log(fish_1);

// -----------------------------
// Mượn hàm (function borrowing), thêm ví dụ với arguments

// [CHÚ Ý] vì arguments là 1 đối tượng không có đầy đủ các thuộc tính như array
// => cần mượn phương thức từ đối tượng array.
function logger() {
  // su dung doi so arguments
  console.log(arguments);
  // mượn hàm => truyen lai tham so this la arguments
  // cach 1:
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });

  // cach 2:
  const arr = Array.prototype.slice.call(arguments); // cat chuoi => array
  console.log(arr); // doi kieu du lieu thanh array

  //   cach 3: (dung vong for)

  // cach 4: dung ES6
  const arr1 = [...arguments]; // doi thanh kieu du lieu array
  console.log(arr1); 
}
logger(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]
