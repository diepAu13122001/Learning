/**
 * [Value types]: bien luu chinh gia tri (khong phai luu dia chi tham chieu)
 * [Primitive types]: tai 1 thoi diem chi chua 1 gia tri cu the
 * - String
 * - Boolean
 * - Number
 * - BigInt
 * - Symbol
 * - undefined
 * - null
 */
let a = 10;
let a_perform = {
  name: "a",
  gia_tri: 10,
  o_nho: 10, // stack
};

// khi b duoc tao => cap 1 o nho khac => sao chep gia tri cua a vao o nho moi
let b = a;
let b_perform = {
  name: "b",
  gia_tri: 10,
  o_nho: 10, // stack
};
console.table([a_perform, b_perform]);

a = 13;
a_perform = {
  name: "a",
  memory_cell: "13", // chuyen doi gia tri cua o nho
  value: 13,
};
console.log(a); // 13
console.log(b); // 10

/** -------------------------------------------
 * [Reference types: Non-primitive types]
 * - Object
 * - Array
 * - Function
 */
let object_1 = {
  // duoc cap 1 o nho va luu gia tri cua obj, tra ve dia chi da luu => cho cho bien object_1
  name: "abc",
};

const object_2 = object_1; // bien object_2 se tro toi cung dia chi o nho cua bien object_1
object_1.name = "xyz"; // ca 2 obj deu bi sua lai => side effect - tac dung phu

const obj1_perform = {
  name: "obj 1",
  gia_tri: "<#001>", // stack
  dia_chi: "#001",
  o_nho: { name: "abc" }, // heap
};

const obj2_perform = {
  name: "obj 2",
  gia_tri: "<#001>", // stack
};

console.table([obj1_perform, obj2_perform]);

// tuy nhien neu gan object 1 cho mot gia tri khac => tao 1 vung nho KHAC => luu lai dia chi cua vung nho moi
object_1 = {
  age: 15,
};

const obj1_perform2 = {
  gia_tri: "<#002>",
  dia_chi: "#002",
  o_nho: { age: 15 },
};

console.table([obj1_perform, obj1_perform2]);

// ----------------------------------------------------------------------------
// [TH2] Object chua object con
// [Moi obj/func se duoc luu tai 1 vung nho khac nhau] => thuoc tinh se luu dia chi cua vung nho con (k luu obj/func)
const student = {
  name: "abc",
  profile: {
    // luu dia chi tham chieu toi object nay
    firstName: "a",
    lastName: "bc",
  },
};

// ----------------------------------------------------------------------------
// [TH3] Truyen doi so cho function nhung khong doi gia tri ngoai
// ================================================================
// Pass by value (truyen theo gia tri)
/**
 * 1. sao chep gia tri bien: let y = x;
 * 2. truyen ban sao vao ben trong ham
 * [Dac diem] gan lai tham so trong ham, khong lam doi bien ngoai ham
 */
function sum(a, b) {
  // let a = c
  // let b = d
  a = 0;
  b = 0;
  console.log(a, b); // 0,0
}

const c = 1;
const d = 2;
sum(c, d); // khong bi thay doi do nhan gia tri => sua cua bien nao thi doi gia tri cua bien do
console.log(c, d); // 1,2

// ================================================================
// [Khong co trong JS] Pass by reference (truyen theo tham chieu)
/**
 * Truyen truc tiep tham chieu cua bien vao ben trong ham
 * [Dac diem] gan lai tham so trong ham -> bien ngoai ham cung bi thay doi => khong dung
 * vd: x = {a: 1} => y = x => y = {a: 2} => da doi thanh 1 dia chi tham chieu moi => chi doi y
 * JS chi co the sua gia tri bien ngoai bang cach gan THUOC TINH trong ham
 * vd: x = {a: 1} => y = x => y.a = 10 => ca 2 deu bi doi
 */
function show_object(obj) {
  // const obj = new_obj => tro toi 1 dia chi tham chieu
  obj.name = "xyz"; // ca 2 obj deu bi sua: side effect
  console.log(obj);
}

const new_obj = {
  name: "mno",
};
show_object(new_obj); // xyz
console.log(new_obj); // xyz

//  cach khac phuc (reference types) **********************
// [Cach 1] doi thanh JSON => han che khi gap du lieu phuc tap va nhieu tang
function show_object_1(obj) {
  obj = JSON.parse(JSON.stringify(obj)); // tao vung nho moi cho object
  obj.name = "xyz";
  console.log(obj);
}

// [Cach 2] dung SPREAD operator => khong copy duoc cac tang con (nhieu object con se khong thay doi dia chi vung nho)
// Phu hop cho object co 1 CAP ************
function show_object_2(obj) {
  obj = { ...obj };
  obj.name = "xyz";
  obj.sub_obj.a = 1001;
  console.log(obj);
}

const new_obj_2 = {
  name: "mno",
  sub_obj: {
    a: 10,
    b: 100,
  },
};

show_object_2(new_obj_2);
console.log(new_obj_2); // ca 2 gia tri a deu bi sua

// ----------------------------------------------------------------------------
// [TH4] So sanh 2 object => so sanh dia chi vung nho
const x = { a: 1 };
const y = { a: 1 };
const z = y;

console.log(x == y); // false
console.log(x === y); // false
console.log(z == y); // true
console.log(z === y); // true

// khong duoc thay doi gia tri khi gan cho object (reference => primitive: loi)
x = "abc"; // assign for constant
x.a = "abc"; // khong co loi
