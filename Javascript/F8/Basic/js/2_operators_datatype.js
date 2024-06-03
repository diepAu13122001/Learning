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
