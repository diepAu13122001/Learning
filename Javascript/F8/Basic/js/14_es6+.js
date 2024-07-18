// es6: 2015 - ESMAScript 6 (like W3C)
//-----------------------------------------------------
// 1. Let, const
// >< var: scope, hosting (code block {}) --------------
// if (true) // khong can viet
{
  var course = "Javascript basic";
  const a = "abc";
  {
    const a = "xyz"; // uu tien block nho nhat
  }
  console.log(a);
}
// console.log(a); // error
console.log(course);

// hosting: trinh bien dich viet lai cac dinh nghia bien len dau file => scope toan bo file
// let, const khong ho tro hosting

// >< var: assignment  (lenh gan value) -----------------
const a = 123;
// a = 1234; // khong the su dung TOAN TU GAN LAN THU 2 => loi
const obj = { name: "abc" };
obj.name = "xyz"; // van se thay doi duoc cac thuoc tinh cua constant

//-----------------------------------------------------
// 2. Template Literals ` ${var}`
const courseName = "abc";
// const courseDescription = 'It is: ' + courseName;
const courseDescription = `It is: ${courseName}`;
// them ky tu dat biet + "\"
const specialSymbols = `this is a special symbol: \${}`;

//-----------------------------------------------------
// 3. Multi-line string (use template string)
const lines_1 = "line 1\nline 2\nline 3";
console.log(lines_1);
const lines = `line 1
line 2
line 3`;
console.log(lines); // tat ca string deu xuong hang dung theo phan edit

//-----------------------------------------------------
// 4. Arrow function

//-----------------------------------------------------
// 5. Classes
//-----------------------------------------------------
// 6. Default parameter values
//-----------------------------------------------------
// 7. Destructuring
//-----------------------------------------------------
// 8. Rest parameters
//-----------------------------------------------------
// 9. Spread
//-----------------------------------------------------
// 10. Enhanced object literals
//-----------------------------------------------------
// 11. Tagged template literal
//-----------------------------------------------------
// 12. Modules
//-----------------------------------------------------
// Babel
