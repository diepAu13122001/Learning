// lenh re nhanh if - else --------------------------------
var date = 7;
if (date === 2) {
  // da kiem tra dung => bo qua cac dk phia sau
  console.log("Hom nay la thu 2");
} else if (date === 3) {
  console.log("Hom nay la thu 3");
} else if (date > 0) {
  // khong kiem tra vi da tim thay dk true
  console.log("Ngay lon > 0");
} else {
  console.log("khong biet");
}

// lenh re nhanh switch -----------------------------------
switch (date) {
  case 2: // su dung toan tu ===
    console.log("Hom nay la thu 2");
    break;
  case 3:
    console.log("Hom nay la thu 3");
    break;
  default:
    console.log("Khong biet");
    break;
}

// cach khong dung break (gop dieu kien)
switch (date) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Ngay trong tuan");
    break;
  case 7: // khong viet duoc kieu (7, 8)
  case 8:
    console.log("Ngay cuoi tuan");
    break;
  default:
    console.log("Khong biet");
    break;
}

// khi nao if - else / switch - case
/**
 * can su dung so sanh >, <, != (dung sai) => if - else
 * biet truoc gia tri chinh xac can xet => switch - case
 * neu switch - case co < 3 case => doi if - else
 */

// Toan tu 3 ngoi (ternary op) ----------------------------------
var course = {
  name: "Java Core",
  price: 0,
};
// kiem tra gia - cach 1 if else
if (course.price > 0) {
  console.log(course.price + " coins");
} else {
  console.log("Free");
}
// cach 2 - nhanh hon (truong hop chi 2 dieu kien)
// tim max, min 
var result = course.price > 0 ? course.price + " coins" : "Free";
console.log(result);
