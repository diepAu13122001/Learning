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
