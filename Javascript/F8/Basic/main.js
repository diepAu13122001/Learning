// input, output ---------------------------------------------
// alert("Day la thong bao");
// prompt("Day la phan can nhap vao: ");

// Variable ---------------------------------------------------
var fullName = "Au Ngoc Diep";
// dau "=": gan, assign

// Comment ---------------------------------------------------
// Cong dung:
// 1. ghi chu, de nho va de doc lai ma
// 2. Vo hieu hoa ma (thuong su dung /* ... */ cu phap mo - dong)

// Ham built-in (ham duoc xay dung san) -----------------------
// 1. Alert
// 2. Console
console.log("hello");
console.warn("Warning"); // co them sign warning => hien thi cuoi cung sau tat ca code
// 3. Confirm
// confirm("Xac nhan ban du tuoi?"); // tao ra hop thoai co Ok va Cancel
// 4. Prompt
// 5. Set timeout (doi sau n giay => thuc hien function)
// setTimeout(() => {
//   document.write("Hello");
// }, 1500);
// 6. Set interval (thuc hien dinh ky sau n giay)
// setInterval(() => {
//   document.getElementsByTagName("body")[0].innerHTML += "\nhello";
// }, 1000);

// Operators ---------------------------------------------------
// 1. Toan tu so hoc: Arithmetic (+-*/%//)
var a = 12 ** 2; // luy thua
a++; // cong them 1 don vi
a--; // tru 1 don vi
// Co 2 cach su dung:
// 1. tien to - prefix (++var):  tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.
a = 10;
console.log(++a); // 11
console.log(a); //11
// 2. hau to - postfix (var++): tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.
a = 10;
console.log(a++); // 10
console.log(a); // 11
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm

// 2. Toan tu gan: Assignment (= -= += *= /= **=)
// 3. Toan tu so sanh: Comparison (< > == >= <=)
// 4. Toan tu logic: Logical(|| && !)

// String operators ----------------------------------------------
var firstName = "Diep";
var lastName = "Au";
// neu 1 trong 2 ve khong phai number => nối chuỗi lại
console.log(firstName + lastName); // DiepAu
console.log((firstName += lastName)); // DiepAu
