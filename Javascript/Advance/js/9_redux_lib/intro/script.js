// Search: redux flow diagram + Redux NPM để hiểu hơn về cách hoạt động Redux (https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
// Sử dụng skypack redux để lấy được thư viện (https://www.skypack.dev/view/redux)

// Store (kho chứa dữ liệu): chứa Reducer để xử lý logic => xuất ra State
// State: lưu trữ trạng thái output của dữ liệu
// Reducer: lấy lại output State trước làm input cho lần xử lý tiếp theo
// Dispatch: bắn dữ liệu đầu vào vào Store để xử lý
// subscribe: thông báo lại dưới dạng callback sau khi state được cập nhật

// App xu ly nap/ rut tien

// Redux có sẵn hàm để quản lý Store
import { createStore } from "https://cdn.skypack.dev/redux";

const initState = 0;

// reducer mình tự build
function reducer(state = initState, action) {
  switch (action.type) {
    case "NAP_TIEN":
      return state + action.value; // cong them tien vao tai khoan
      break;
    case "RUT_TIEN":
      return state - action.value; // tru tien khoi tai khoan
      break;
    default:
      return state; // tra ve so du hien tai
  }
}

// Tạo Store
const store = createStore(reducer);

// xu ly giao dien
const balance = document.querySelector("#balance");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
// Xu ly nap tien
incrementBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // lay du lieu tu input
  const value = parseInt(document.querySelector("#amount").value);
  // Bắn dữ liệu vào Store
  store.dispatch({ type: "NAP_TIEN", value: value });
  // Lấy dữ liệu từ Store
  const newBalance = store.getState();
  // Xu ly giao dien
  balance.textContent = `${newBalance}`;
});

// Xu ly rut tien
decrementBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // lay du lieu tu input
  const value = parseInt(document.querySelector("#amount").value);
  //   kiem tra neu khong du so du => khong cho rut
  if (value > store.getState()) {
    alert("Khong du so du");
    return;
  }
  // Bắn dữ liệu vào Store
  store.dispatch({ type: "RUT_TIEN", value: value });
  // Lấy dữ liệu từ Store
  const newBalance = store.getState();
  // Xu ly giao dien
  balance.textContent = `${newBalance}`;
});

// subscribe se chay het khi duoc tao ra => chi goi sau khi dispatch
store.subscribe(() => console.log("sub1"));
store.subscribe(() => console.log("sub2"));
store.subscribe(() => console.log("sub3"));
