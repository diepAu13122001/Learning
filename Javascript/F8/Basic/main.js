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
// Boolean + if else -----------------------------------------------------
var fullName = "Au Ngoc Diep";
// tra ve true
if (fullName) console.log("Dieu kien dung");
else console.log("Dieu kien dung");
// Truthy and Falsy -----------------------------------------------
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean
// mà có giá trị true thì ta gọi giá trị đó là Truthy

// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean
// mà có giá trị false thì ta gọi giá trị đó là Falsy

/** 6 kieu du lieu sau khi convert => boolean => false (con lai deu la true)
 * 0
 * false
 * chuoi rong '' / ""
 * undefined
 * null
 * NaN
 */
/** Những loại này vẫn trả về True
 * mảng rỗng []
 * object rỗng {}
 * ' '
 * '0'
 * hàm rỗng function() {}
 */

// Ngoại lệ document.all ---------------------------------------
/** Mặc dù cũng là kiểu object nhưng lại trả về false
 * document.all chuyển sang boolean sẽ là false
 * document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
 * Khi typeof document.all sẽ trả về "undefined"
 */

// 4. Toan tu logic: Logical(|| && !)
// Toán tử and => chỉ trả về giá trị vế phải trong biểu thức ---------------
var result = "A" && "B" && "C";
console.log("result", result); // C
// Nếu and gặp giá trị # 6 giá trị trả về false => gán kết quả thành giá trị của vế phải
var result = null && "B" && "C";
console.log("result", result); // null
// Nếu có giá trị trong 6 giá trị trả về false => gắn kết quả là giá trị của vế trái luôn

// Toán tử or => chỉ trả về giá trị khác 6 giá trị trên ---------------
var result_or = "A" || "B" || null || "D";
console.log("result_or", result_or); // 'A'

// Kieu du lieu --------------------------------------------------
// 1. Du lieu nguyen thuy: Primitive data
// Luu vao vung nho RAM: khi gán lại giá trị => tạo ra 1 vùng nhớ mới để lưu lại value => gọi là nguyên thủy
/**
 * Number
 * String
 * Boolean
 * Undefined (không sử dụng toán tử gán cho một biến => trả về undefined)
 * Null
 * Symbol - ES6
 */
// Sử dụng typeof để kiểm tra kiểu  dữ liệu
console.log(typeof 1);
console.log(typeof null); // trả về object

// symbol:
var a = Symbol("id"); // giá trị là duy nhất - unique
var b = Symbol("id");
console.log(a === b); // false

// 2. Du lieu phuc tap: Complex data
/**
 * Function
 * Object types (object, array)
 */
// function - hàm tự định nghĩa
var my_func = function () {
  console.log("This is my function");
};

// Toán tử so sánh -----------------------------------------------
// === (so sánh giá trị và cả kiểu dữ liệu)
// !==
var a = "1";
var b = 1;
console.log(a == b); // true (chỉ quan tâm đến giá trị)
console.log(a === b); // false

// function--------------------------
/**
 * Bao gom:
 * Ham tu dinh nghia
 * Ham built-in
 */
/**
 * Tham so: parameter
 * Goi func => truyen du lieu = > đối số (agrument)
 */

function test(a) {
  // trả về danh sách bao gồm các đối số được truyền vào hàm
  console.log(arguments);
}
test("item 1", "item 2", "item 1");
// hàm không có return => trả về undefined
/**
 *  Function trùng tên => khi gọi trả về function cuối cùng
 * Function trong function + biến trong function => thuộc dạng private, out khỏi hàm không gọi được
 */
function sum() {
  console.log(1);
}
function sum() {
  console.log(2);
}
sum(); // trả về 2

// Declaration function - hàm cần đặt tên
// Có thể gọi trước khi khai báo
func_name(); // vẫn hoạt động
function func_name() {}

// Expression function - hàm không cần đặt tên (callback)
var my_func_2 = function () {};
setTimeout(function () {});
var new_obj = {
  my_func: function () {},
};

// String --------------------------------------------------
// 2 cách khai báo chuỗi
var firstName = "Diep";
var lastName = new String("Au");
print(typeof lastName); // trả về kiểu object => không chính xác và không tối ưu

// neu 1 trong 2 ve khong phai number => nối chuỗi lại
console.log(`Tôi là: ${firstName} + ${lastName}`); // cách chèn biến trong chuỗi
console.log((firstName += lastName)); // DiepAu

// backflash (\) để chèn một số ký tự đặc biệt
print("Day la cach in dau \\");

// độ dài chuỗi
console.log(firstName.length);
