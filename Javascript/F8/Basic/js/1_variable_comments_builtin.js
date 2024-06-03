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
confirm("Xac nhan ban du tuoi?"); // tao ra hop thoai co Ok va Cancel
// 4. Prompt
// 5. Set timeout (doi sau n giay => thuc hien function)
setTimeout(() => {
  document.write("Hello");
}, 1500);
// 6. Set interval (thuc hien dinh ky sau n giay)
setInterval(() => {
  document.getElementsByTagName("body")[0].innerHTML += "\nhello";
}, 1000);
