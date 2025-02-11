// Tạo thư viện tự viết thẻ HTML
export default function html([first, ...strings], ...values) {
  // cong don code html vao list => hien thi duoi dang string
  return values
    .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0) // Loại bỏ giá trị `null`, `undefined`, `false` nhưng giữ lại `0`
    .join("");
}

export function createStore(reducer) {
  // tạo reducer với trạng thái hiện tại là undefined, phần action là {}
  let state = reducer(undefined, {});
  const roots = new Map();
  // phương thức cần thiết

  function render() {
    // load cac the len giao dien
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }
  return {
    // ham them du lieu tao lenh HTML moi
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    // xoa du lieu
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
    // ham day du lieu tu store vao view (selector la lua chon du lieu can hien thi)
    // selector mặc định là 1 hàm; (state) => state để duyệt qua tất cả phần tử trong state
    // truyen het du lieu vao component dưới dạng object
    // vì các thuộc tính đều có khả năng là object nên cần thêm Object.assign để truyền thành thuộc tính
    connect(selector = (state) => state) {
      // return lại 1 arrow function(return thêm 1 arrow function nữa)
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
  };
}
