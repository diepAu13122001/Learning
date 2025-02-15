// Nhớ viết hoa chữ cái đầu
// để tránh gọi lại nhiều lần các component khác nhau trong 1 subcomponent -> tạo hàm trong object (props of obj)
// tạo được nhiều component độc lập và tái sử dụng được nhiều lần
const Form = {
  Input() {
    return <input type="text"></input>;
  },
  Checkbox() {
    return <input type="checkbox"></input>;
  },
};

function App() {
  const type = "Checkbox";
  console.log(Form[type]); // return code HTML input do hàm trong form là property
  // tuy nhiên không thể viết trực tiếp <Form[type]/> trong return vì không đúng quy ước HTML
  // => tạo thêm biến lưu trữ code
  const InputComponent = Form[type];

  return (
    <div id="form_login">
      <InputComponent />
    </div>
  );
}

// get root element
const rootElement = document.getElementById("root");
// React-DOM => render UI
const rootReact = ReactDOM.createRoot(rootElement);
// add element
rootReact.render(<App />);
