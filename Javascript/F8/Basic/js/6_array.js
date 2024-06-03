// Array --------------------------------------------
// Cách tạo mảng
var arr = [1, 2, "a", function () {}, null, undefined];
var arr2 = new Array([1, 2, "a", function () {}, null, undefined]); // trả về kiểu object
// cách kiểm tra kiểu arr (vì arr là kiểu obj => typeof => object)
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// truy xuất mảng
console.log(arr.length);
console.log(arr[1]); // lấy phần tử theo index

// Cac ham bo tro
var arr3 = [1, 2, 3];
//1. toString()
console.log(arr3.toString());
//2. join => chuyển arr về string, các phần tử ngăn cách bằng đối số được truyền vào
console.log(arr3.join(" ")); // 1 2 3
//3. push, pop
arr3.push(4); // chen vao cuoi
arr3.pop(); // xoa phan tu cuoi cung
[].pop(); // undefined
console.log(arr3);
// 4. shift, unshift
// shift: xóa phần tử đầu mảng + return lại phần tử đó
var a = arr3.shift();
console.log(a, arr3);
var b = [].shift(); // undefined
// unshift: thêm 1 phần tử vào đầu mảng + return độ dài mới của mảng
console.log(arr3.unshift(5));
console.log(arr3);
// 5. splicing
var subArr = arr3.splice(1, 2); // xóa 2 phần tử tính từ index thứ 1
var subArr2 = arr3.splice(1, 0, 6); // chèn thêm item 6 vào vị trí thứ 1, 0 là không xóa ai cả
var subArr3 = arr3.splice(1, 1, 6); // thay vị trí thứ 1 thành 6

// 6. concat - nối arr
arr3.concat(arr);
console.log(arr3);

// 7. slicing - cắt mảng + return lại phần bị cắt ra
console.log(arr3.slice(-2, 2)); // cắt 2 phần tử tính từ vị trí thứ 2 từ sau ra trước => return mảng có 2 phần tử nảy
console.log(arr3.slice(0)); // cắt hết mảng => thường dùng để copy
