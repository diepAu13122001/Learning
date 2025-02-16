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

// hàm tạo component button hoặc a
function Button({ title, href, onClick }) {
  let Component = "button";
  const props = {};
  // nếu có href -> chuyển sang a
  if (href) {
    Component = "a";
    props.href = href;
  }
  // nếu có bắt sự kiện click -> truyền vào props
  if (onClick) props.onClick = onClick;

  return <Component {...props}>{title}</Component>;
}

function App({ title, content }) {
  const type = "Checkbox";
  console.log(Form[type]); // return code HTML input do hàm trong form là property
  // tuy nhiên không thể viết trực tiếp <Form[type]/> trong return vì không đúng quy ước HTML
  // => tạo thêm biến lưu trữ code
  const InputComponent = Form[type];

  const firstAccess = false;
  return (
    <div id="form_login">
      <InputComponent />
      <Button
        title="Click me to random"
        href="https://ieltsonlinetests.com/"
        onClick={() => alert(Math.random())}
      ></Button>
      {/* Chứng minh không in ra màn hình giá trị boolean/ null/ undefined
          vd: Nếu firstAccess là true thì in dòng hello, false thì không in (and) */}
      {firstAccess && <h1>Hello World</h1>}
      {/* vd: props title và content của container App (nếu k có undefined -> k hiện) (or) 
              không có title thì hiện content */}

      <h2>{title || content}</h2>
    </div>
  );
}

// get root element
const rootElement = document.getElementById("root");
// React-DOM => render UI
const rootReact = ReactDOM.createRoot(rootElement);
// add element
rootReact.render(<App content="This is a content" />);
