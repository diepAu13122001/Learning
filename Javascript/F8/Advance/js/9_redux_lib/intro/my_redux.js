// how redux works
// ------------------------------------
// Redux Store (truyền vào hàm callback reducer)
function createStore(reducer) {
  // tạo reducer với trạng thái hiện tại là undefined, phần action là {}
  let state = reducer(undefined, {});
  const subscribers = [];
  // phương thức cần thiết
  return {
    getState() {
      return this.state;
    },
    dispatch(action) {
      // gọi lại reducer với trạng thái hiện tại và action
      this.state = reducer(this.state, action);
      //   sau khi chay => doi lai subscribe
      subscribers.forEach((sub) => {
        sub();
      });
    },
    subscribe(subscriber) {
      // tat ca subscribe khi goi deu duoc chay
      subscribers.push(subscriber);
    },
  };
}

// ------------------------------------
// reducer mình tự build
function reducer(state = 0, action) {
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

// ------------------------------------
// sử dụng redux
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
  // thong bao vua update bang subscribe
  store.subscribe(() => {
    alert("Nạp tiền thành công");
  });
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
  // thong bao vua update bang subscribe
  store.subscribe(() => {
    alert("Rút tiền thành công");
  });
});
