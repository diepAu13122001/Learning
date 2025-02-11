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

// hàm bổ trợ
// 1. find index
console.log(firstName.indexOf("D")); // 0
console.log(firstName.search("D")); // 0
console.log(firstName.lastIndexOf("D")); // 0

// 2. Cut string
var subString = firstName.slice(-2, 1);
// 3. Replace
var replaceString = firstName.replace("D", "d");
// replace all
replaceString = firstName.replace(/ABC/g, " ");

// 4. uppercase + lowercase
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// 5. trim - thuong dung cho phan check form
console.log(firstName.trim());
console.log(firstName.trimEnd());
console.log(firstName.trimStart());

// 6. split
var numbers = "1,2,3,4,5,6,7,8,9";
console.log(numbers.split(",")); // tra ve 1 array

// 7. get a character by index
console.log(firstName.charAt(15)); // trả về chuỗi rỗng nếu index > len
console.log(firstName[15]); // trả về undefined nếu index > len
