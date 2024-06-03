//Object ----------------------------------------------------------
// Trường hợp cần khai báo một key không có tên hợp lệ => dùng ''
var myObj = {
  "full-name": "Au Ngoc Diep", // sẽ không bị báo lỗi
  age: 15,
};

// object constructor (xay dung doi tuong - ham tao)----------------------------
// dinh nghia doi tuong - tao ban thiet ke (khong phai doi tuong) => tao obj khong bi chiem khong gian code

// decreation function
var User_A = function () {};

// expression function
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  // phuong thuc
  this.getName = function () {
    return this.firstName + " " + this.lastName;
  };
}
// tao doi tuong
var author = new User("Diep", "Au", "...");
console.log(author);
console.log(author.constructor === User);
/**
 * Neu doi tuong duoc tao tu object constructor # tao obj thuong
 * + khi in doi tuong se co them phan "__proto__" => mo ra: constructor
 */
// tao them thuoc tinh cho object
author.title = "Loved ones"; // khong anh huong toi ban thiet ke va cac obj khac
console.log(author.getName());

// object prototype ---------------------------------------------------
// 1. prototype la gi? Nguyen lieu de tao ra ngoi nha, deu duoc ke thua

// 2. su dung khi nao? Add duoc property + method o ben ngoai obj constructor
// Tao them 1 thuoc tinh + phuong thuc cho User
User.prototype.className = "ABC"; // ko nhan duoc gia tri truyen vao tu constructor
User.prototype.getClassName = function () {
  return this.className;
};

console.log(author); //se khong nhin thay property className ngay ma phai vao "__proto__" xem
console.log(author.className); // ABC

// date object (xem them o Mozilla) ---------------------------------------
var date = new Date(); // co new => doi tuong
console.log(typeof date); // object
console.log(date); // tra ve 1 string

// neu khong dung new => xem date nhu function
var date1 = Date(); // khong truy xuat duoc cac phuong thuc
console.log(typeof date1); // string

// phuong thuc bo tro
var year = date.getFullYear();
var month = date.getMonth() + 1; // tra ve tu 0 -> 11 => phai cong 1
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

// Math object (Math k phai obj constructor) ---------------------------------
// k can khai bao obj new

// Math.PI
console.log(Math.PI);
// Math.round()
console.log(Math.round(12.3)); // 12
// Math.abs() - absolute - tri tuyet doi
console.log(Math.abs(-1)); // 1
// Math.ceil() - lam tron len
console.log(Math.ceil(4.1)); // 5
// Math.floor() - lam tron xuong
console.log(Math.floor(4.9)); // 4
// Math.random() - tra ve 1 so < 1
console.log(Math.floor(Math.random() * 10)); // random tu 0 -> 10 (muon rd toi dau => * ...)
// Math.min()
console.log(Math.min(10, -1, 23, 44)); // -1
// Math.max()
console.log(Math.max(10, -1, 23, 44)); // 44
