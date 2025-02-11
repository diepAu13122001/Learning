// for - lap voi dieu kien dung ----------------------------------------------
/**
 * bao gom 3 doan ma khi viet vong for (khong can phai co du ca 3):
 * khai bao bien: chay 1 lan duy nhat khi chay loop
 * dieu kien dung => moi lan chay deu kiem lai
 * tang bien dem => moi lan chay deu thuc thi
 */
for (let index = 1; index < 101; index++) {
  console.log(`This is ${index} times`);
}

var i = 0;
for (; i < 100; ) {
  i++;
  console.log(i);
}

// duyet qua phan tu trong array
var arr = [1, 5, 7, 9, 3];
for (let index = 0; index < arr.length; index++) {
  console.log(index + 1, ":", arr[index]);
}

// for/in - lap qua key cua object (array/ object/ string) -------------------
// object => duyet qua cac property
// ***duyet qua ca cac prototype cua obj
var myInfo = {
  name: "ABC",
  age: 12,
  address: "HCM, Vn",
};

for (const key in myInfo) {
  // key: dang chuoi - string
  console.log(key, ": ", myInfo[key]);
}

// array - key la index
var languages = ["a", "b", "c", "d"];
for (const key in languages) {
  // key la index
  console.log(key, ": ", languages[key]);
}

// string - tach ra tung ky tu
var str = "This is a string";
for (const key in str) {
  console.log(key, ": ", str[key]);
}

// for/of - lap qua value cua (array, obj) ---------------------------------------
// array ----
var languages = ["a", "b", "c", "d"];
for (const iterator of languages) {
  console.log(iterator); // in ra tung phan tu
}

var myInfo = {
  name: "ABC",
  age: 12,
  address: "HCM, Vn",
};

// object ----
// khong thu su dung cho object => can su dung danh sach key/value
// Duyet tu danh sach key
for (const iterator of Object.keys(myInfo)) {
  console.log(iterator, ":", myInfo[iterator]);
}

// Duyet tu danh sach key
for (const iterator of Object.values(myInfo)) {
  console.log(iterator);
}

// while - lap lai khi dieu kien dung ----------------------------------------
var ind = 1;
while (ind < 11) {
  // in tu 1 => 11
  console.log(ind);
  ind++;
}

// duyet qua phan tu trong danh sach
var arr = [1, 5, 7, 9, 3];
ind = 0;
while (ind < arr.length) {
  console.log(arr[ind]);
  ind++;
}

// do/while - lap it nhat 1 lan, lap tiep neu dieu kien dung -----------------
// xu ly do truoc while
var x = 0;

do {
  x++;
  console.log(x); // chay it nhat 1 lan
} while (x > 11);

// su dung cho bai toan: kiem tra 3 lan truoc khi bao that bai (nap the cao)
x = 0;
var isSuccess = false;
do {
  x++;
  console.log("Nap the lan", x);
  // neu thanh cong => ngung
  //   if (false) {
  if (true) {
    isSuccess = true;
    console.log("Thanh cong");
  }
} while (!isSuccess && x < 3); // sau 3 lan chay => khong thu nua

// break (thoat khoi vong lap) -----------------------------------
// chi in tu 0 => 4 (tuy nhien lap 10 lan)
for (let index = 0; index < 10; index++) {
  if (index > 4) {
    break;
  }
  console.log(index);
}

// continue (bo qua mot vai lan lap) -----------------------------------
for (let index = 0; index < 10; index++) {
  if (index % 2 !== 0) {
    continue; // bo qua cac so le trong vong lap
  }
  console.log(index);
}

// nested loop (vong lap long nhau) ------------------------------------------------
// ung dung cho cac mang 2 chieu tro len
var matrix = [
  [1, 2],
  [3, 4],
  [12, 0],
];

// co the su dung for i/j de thay ro hon
for (const item of matrix) {
  console.log(item); // in ra cac mang con
  for (const subItem of item) {
    console.log(subItem);
  }
}

// vi du -----------------------------------------------------------------
// in day nguoc tu 100 => 1
for (let index = 10; index > 0; index--) {
  console.log(index);
}

// in ra so cach nhau 5 step
for (let index = 0; index < 51; index += 5) {
  console.log(index);
}

// de quy ----------------------------------------------------------------
// lap vo han + de quy khong diem dung => tran stack (max stack size)
function countDown(num) {
  if (num < 0) {
    console.log("Done");
    return 0; // xac dinh diem dung
  }
  setTimeout(() => {
    console.log(num);
    countDown(num - 1);
  }, 1000);
}

countDown(3); // dem tu 3 => 0, moi so cach nhau 1 giay

// xoa phan tu trung lap trong mang (khong dung ham built-in, return an array)
var my_arr = ["a", "b", "c", "a", "a", "v", "c"];
// cach 1: chuyen ve set
var new_set = [...new Set(my_arr)]; // cast to array + spread operator
console.log("Set:", new_set);
// cach 2: de quy
function removeDuplicate(start, arr) {
  if (start < arr.length) {
    if (arr.slice(start, arr.length - 1).includes(arr[start])) {
      arr.splice(start, 1);
    }
    removeDuplicate(start + 1, arr);
  }
  return arr;
}

console.log("De quy:", removeDuplicate(0, my_arr));

// su dung de quy tinh giai thua
