// code js an toan hon (ES6)
// =================================================================
// TH1: quen them tu khoa pham vi bien

// "use strict";
fullName = "abc";
function myFunc() {
  //   "use strict";
  age = 15;
}
myFunc();
// van tra duoc ket qua binh thuong
console.log(fullName);
console.log(age); // khong gioi han duoc scope => tao loi logic, tran RAM

// =================================================================
// TH2: Khi gan lai gia tri cho thuoc tinh co writable: false (object)
const student = {
  name: "Nguyen Van A",
};
student.name = "abc"; // name: writable: true
console.log(student); // abc

const student_2 = Object.freeze({
  name: "Nguyen Van A", // writable: false
});
student_2.name = "mno"; // khong chay duoc dong nay => bao loi khi co "strict"
console.log(student_2); // Nguyen Van A

const student_3 = {};
Object.defineProperty(student_3, "name", {
  // cach viet day du cua cach 1
  value: "Nguyen Van 3",
  writable: false,
});
student_3.name = "xyz";
console.log(student_3);

// =================================================================
// TH2.2: Bao loi khi xoa object (OBJECT KHONG THE XOA)
delete student; // khong hoat dong
console.log(student); // van out ra duoc

// =================================================================
// TH3: Khi ham co tham so trung ten
function tong(a, a) {
  //  lay gia tri cua a thu 2 => a + a = 2a
  return a + a;
}
console.log(tong(1, 5)); // 10

// =================================================================
// TH4: Khai bao ham trong code block thi ham se thuoc pham vi code block
{
  function hello() {
    console.log("hello");
  }
}

hello(); // khong an toan -> khong nen dung ham ngoai pham vi

// =================================================================
// TH5: khong dat ten bien, ham bang keyword cua ngon ngu 
//  private, protected, public (tuong lai cua JS)
const protected = 10; // bao loi
console.log(protected);

/**
 * [Cach su dung]
 * 1. them "use strict"; vao dau (k duoc co code truoc -> no work) file .js
 * 2. them "use strict"; vao ngay sau the mo <script> 
 *      <script>
            "use strict";
 *          todo...
        </script>
 * 3. them "use strict"; vao dau pham vi ham
 * ---------------------------------------------------------------------------
 * [Cong dung]
 * 1. Tranh quen tu khoa khai bao bien
 * 2. Tranh trung ten bien dan toi loi logic
 * 3. Su dung bo nho hieu qua va tranh tao bien global 
 */
