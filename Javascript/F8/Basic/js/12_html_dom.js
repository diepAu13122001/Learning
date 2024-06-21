// DOM la gi? Vai tro + y nghia -------------------------------------------------
// DOM: document object model
// khi trình duyệt load lên, cần 1 quy chuẩn để chuyển từ code => DOM (mô hình dạng cây) - W3C
// DOM: gồm 3 thành phần:
// 1. element: id, class, tag name, CSS selector, HTML collection
// 2. attribute
// 3. text
// Node: mỗi điểm ghồ lên (element/ attribute/ text) trên sơ đồ cây
// Tài liệu: Core DOM (standard for all doc), XML DOM, HTML DOM
// => HTML DOM chỉ là quy chuẩn để viết HTML file

// Javascript --------------------------------------------------------------------
// JS chỉ cung cấp bộ công cụ để truy xuất vào HTML DOM => HTML DOM k phải là của JS
// JS chạy được trên Browser + Server, Browser có Web API => có DOM API => JS sử dụng được HTML thông qua web API

// Document object ---------------------------------------------------------------
// document: all the webpage

// Supported functions for JS -----------------------------------------------------
// get element methods: id, class, tag name, CSS selector, HTML collection
// id ----------------
var element_node = document.getElementById("abc"); // neu k co => tra ve null
console.log({ element: element_node }); // xuat ra mot node obj voi thuoc tinh cua node nay

// class + tag name -----------------
var class_elements = document.getElementsByClassName("abc"); // tra ve 1 HTML collection[]
// HTML collection k  co map, filter, ... => phai lap bang vong for

var tag_elements = document.getElementsByTagName("abc"); // tra ve 1 HTML collection[]

// CSS selector -----------------------
var css_selector = document.querySelector("h1 .class #id"); // tra ve 1 phan tu, k co => null
console.log(css_selector);

var css_selectors = document.querySelectorAll("html .class"); // tra ve 1 Node list (array-like)
// NodeList k  co map, filter, ... => phai lap bang vong for
console.log(css_selectors);

// Sự khác biệt giữa HTML collection và Node List ---------------------
/**
 * 1. Node list có foreach - HTML collection muốn dùng foreach phải chuyển về Array
 * 2. Nodelist (querySelectorAll) sẽ không được cập nhật khi appendChild (k live) như HTML collection
 * => nếu muốn dùng live node thì sử dụng childNodes (vd: document.querySelectorAll('div')[0].childNodes;)
 */

// HTML collection -------------------------------
// các thẻ được quy vào là đối tượng trong HTML collection => k cần phải lấy qua hàm hỗ trợ
console.log(document.forms["form-1"]); // key giống với id
console.log(document.anchors); // tra ve tat ca the a co name attribute
console.log(document.images); // tra ve tag img

// Attribute node & Text node ---------------------
// ******DOM attribute ----------------------------------------------------------
var heading = document.querySelector("h1");
// khi thêm vào sẽ không thể hiển thị trên phần code HTML nếu tra từ web (source code ctrl + U)
// cách 1
heading.title = "heading-1";
heading.className = "heading"; // add a class ***

// add a new attribute (không có sẵn để call ., attribute tự tùy biến)
// cách 2
heading.setAttribute("class", "heading");

// lấy giá trị của attribute
console.log(heading.id);
console.log(heading.getAttribute("id")); // lấy các attribute tự tùy biến

// ********InnerText vs textContent Property -----------------------------------------
var h1 = document.querySelector("h1");
// xuat ra gia tri cua thuoc tinh
console.log(h1.innerText);
console.log(h1.textContent);
// set gia tri cho node
// => khong chèn được HTML code khi gọi 2 thuộc tính này.
h1.innerText = "heading";
h1.textContent = "heading";
// su khac biet ***
/**
 * 1. innerText (attribute của element): lay ra noi dung giong voi phan duoc hien thi tren trinh duyet
 * => lay het phan text cua element con, bo qua the tag, bo qua display none (lấy ra text node)
 * => khi gán giá trị mới có xuống dòng => trả thêm thẻ <br>
 * => chỉ cho element
 * 2. textContent: lay ra noi dung thuc trong code
 * Because: tất cả các tag đều được xem là element node => lấy hết element node
 * => lay luon phan khoang cach + xuong dong + ma css neu co style tag + ma JS neu co script
 * => khi gán giá trị mới có xuống dòng => có xuống dòng ở code nhưng k thêm thẻ <br>
 * => cho 3 phần: element, attribute, text
 */
// vd: code HTML (xem o trang index.html)
console.log(h1.innerText);
// output: "Text"
console.log(h1.textContent);
/**output:
 *
 * Heading
 * Text
 *  h1 {
 *        color: red;
 *    }
 *
 *  console.log('first');
 *
 */

// InnerHTML vs OuterHTML Property ---------------------------------------------
// InnerHTML: add attribute node, text node and element node
// => use for scrolling lazy loading
var h1 = document.querySelector("h1");
h1.innerHTML = "<h2 title='hello'>Hello</h2>"; // add a node and an attribute
console.log(h1.innerHTML); // return a string all element, text in tag

// OuterHTML: get/ set the element self
console.log(h1.outerHTML); // get itself: <h1>Heading</h1>
h1.outerHTML = "<p>Test</p>"; // change the current tag (h1) => p

// Node properties ----------------------------------------------------------------
// giải thích các thuộc tính trong 1 node object

// DOM style ---------------------------------------------------------------------
var div = document.createElement("div");
console.log(div.style); // in ra toàn bộ các thuộc tính của style
div.style.width = "100px";
div.style.height = "200px";
div.style.backgroundColor = "red";
// thay doi nhieu thuoc tinh bang 1 dong => su dung object
Object.assign(div.style, {
  with: "100px",
  height: "200px",
  backgroundColor: "green",
});

document.querySelector("body").appendChild(div);

// ClassList Property (for element - array-like) ------------------------------------------
/**
 * 1. add - them class
 * 2. contains - kiem tra class co ton tai trong tag k
 * 3. remove - xoa class
 * 4. toggle - them/ xoa class (neu co => xoa, neu chua => them)
 */

console.log(document.querySelector("div").classList.value); // tra ve chinh xac chuoi viet trong className ben HTML
// vd: <div class="box         box-2"></div>
// => value return: "box         box-2"

// DOM events -----------------------------------------------------------------------------
// tim hieu them cac ham o trang ws3school
// this: chinh la node element do (chu y cho OOP) - chi su dung duoc khi goi tren HTML
// Sự kiện nổi bọt: cha có attribute onclick => khi click vào cha thì con cũng thực thi theo
// hoặc con có sự kiện nổi bọt => khi thực thi xong thì truyền tới cha thực thi (nếu cha và con đều gọi chung hành vi)

// click
document.querySelectorAll("p").forEach(
  (element) =>
    (element.onclick = (e) => {
      console.log(e); // mouse event sau khi thuc thi
      console.log(e.target); // return the node you just clicked
      console.log("You clicked me?");
    })
);

// onchange: bat su kien khi gia tri nhap sau # gia tri cu + phai bo focus => moi exe

// onInput: bat su kien sau moi lan go chu trong input field

// *** example ------------------
// 1. input/ select
// document.querySelector('input[type="text"]').onInput = (e) => {
//   console.log(e.target.value);
// };

// document.querySelector('input[type="checkbox"]').onChange = (e) => {
//   console.log(e.target.checked);
// };

// document.querySelector("select").onChange = (e) => {
//   console.log(e.target.value); // in ra thuoc tinh value chu khong phai text trong tag option
// };

// 2. keyup / keydown (nhap nha phim) - su dung cho phan dieu khien thong bao (esc, left, right)
// document.querySelector('input[type="text"]').onkeydown = (e) => {
//   // nha phim moi bat su kien
//   console.log(e.target.value);
//   console.log(e.which); // dang bam nut nao (tra ve so)
// };

// document.querySelector('input[type="text"]').onkeyup = (e) => {
//   // nhan phim la bat su kien
//   console.log(e.target.value);
// };

// 2. keypress (de phim => van chay su kien)

// PreventDefault and StopPropagation ----------------------------------------------------
// Phuong thuc cua doi tuong event
/**
 * 1. PreventDefault: xoa bo hanh vi mac dinh trong tag HTML
 * 2. StopPropagation: xoa bo su kien noi bot
 */

// PreventDefault ---------------------------
// lay tat ca the a => neu ng dung click the a => moi chuyen trang
var a_list = document.links;
for (let index = 0; index < a_list.length; index++) {
  if (a_list[index].name !== "a") {
    a_list[index].onclick = (e) => {
      e.preventDefault(); // khi bam b se khong chuyen
    };
  }
}

// ngan chan viec click vao li bi bien mat do code CSS o phan input (auto search)
document.querySelector("ul").onmousedown = (e) => {
  e.preventDefault();
  console.log(e.target);
};

// StopPropagation ----------------------
document.querySelector("#div").onclick = (e) => {
  console.log(e.target);
};
document.querySelector("button").onclick = (e) => {
  // thêm phần gọi hàm ngăn sự kiện nổi bọt
  //   e.stopPropagation();
  console.log(e.target); // bị vướng sự kiện nổi bọt => clg: DIV + click me!
};

// Event listener ----------------------------------------------------------
// 1. xu ly nhieu viec dien ra cung luc => su dung dom event (tru khi func qua dai => addEvent tach code)
// 2. lang nghe/ huy bo lang nghe => su dung event listener (để cụ thể hơn phần add từng function)

// addEventListener: them 1 event nua, dom event khong the them nhiu event (phải viết cùng 1 function khi bắt sự kiện)
var viec1 = () => console.log("clicked");
document.querySelector("button").addEventListener("click", viec1);

// after 3 sec => remove action log 'clicked' when clicking this button
setTimeout(() => {
  document.querySelector("button").removeEventListener("click", viec1);
}, 3000);
