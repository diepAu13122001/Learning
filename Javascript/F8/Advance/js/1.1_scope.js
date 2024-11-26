/** Scope: Pham vi
 * + Cac loai pham vi:
 *  - Global: toan cau
 *  - Code block: khoi ma: let, const
 *  - Local scope: ham: var, function
 * + Khi goi 1 ham -> 1 pham vi moi duoc tao
 * + Cac ham co the truy cap cac bien duoc khai bao trong
 * pham vi trong va ngoai no
 * + Cach thuc 1 bien duoc truy cap?
 * + Khi nao bien bi xoa khoi bo nho
 *  - Bien toan cau (luon o trong bo nho): chi khi refresh, tat web, exit program
 *  - Bien trong code block + ham: khi thoat khoi {}/ ham sau khi goi va thuc thi -> xoa
 *  - *** Bien trong ham duoc tham chieu boi 1 ham:
 */

// global scope ----------------------
var msg = "abc";
function log() {
  console.log(msg);
}
let a = 10;
const pi = 3.14;

// code block scope {} ----------------
// if - else, for, while, function
{
  let b = 10;
  var m = false;
}

// console.log(b) // is not defined
console.log(m); // khong the gioi han scope

// function scope ---------------------
function hello() {
  // function thuoc pham vi global
  var hello_name = "abc";
  console.log(`hello ${hello_name}`);
}
// console.log(hello_name) // loi khong truy cap duoc

hello(); // moi lan goi -> 1 pham vi cua ham hello
// moi pham vi co bien, param va agr khac nhau -> luu gia tri khac nhau
hello(); // pham vi 2
hello(); // pham vi 3

// cach thuc truy cap bien --------------
const age = 18;
{
  const age = 17;

  {
    const age = 16;

    {
      const age = 15;

      {
        const age = 14;

        {
          const age = 13;

          {
            const age = 12;

            {
              const age = 11;
              console.log(age); // 11
              // uu tien pham vi gan nhat => lay gia tri
              // const age = 11; // bao loi neu de sau (is not defined)
              // van nhan duoc age -> sai vi tri khai bao
            }
          }
        }
      }
    }
  }
}

// cach su dung bien ham long ham
function makeCounter() {
  let count = 0;
  function increase() {
    return ++count;
  }
  return increase;
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
/**
 * -> bien count trong ham makeCounter van duoc giu lai
 * bien counter goi den makeCounter
 * makeCounter tra ve ham increase
 * ham increase tra ve bien count 
 * => counter luu gia tri count => bien toan cuc
 * => khong bi xoa
 */