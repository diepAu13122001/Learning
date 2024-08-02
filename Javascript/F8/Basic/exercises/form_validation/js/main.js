function Validator(options) {
  // kiem tra neu co loi => hien thi loi ra man hinh
  function validate(inputElement, errorMessage) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = ""; // an phan loi di
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        // xu ly truong hop blur khoi input (not focus)
        inputElement.onblur = function () {
          var errorMessage = rule.test(inputElement.value);
          validate(inputElement, errorMessage);
        };

        // xu ly khi nguoi dung dang nhap vao input
        inputElement.oninput = function () {
          validate(inputElement, undefined);
        };

        // xu ly khi nguoi dung bam dang ky
      }
    });
  }
}

// dinh nghia rules ----------------------------------
// Nguyen tac rule:
// 1. khi loi => tra message loi
// 2. khi hop le => return undefined
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui long nhap truong nay";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      return regex.test(value) ? undefined : "Vui long nhap email dung cu phap";
    },
  };
};

Validator.isMinLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui long nhap toi thieu ${min} ky tu`;
    },
  };
};

// xu dung ham cho cac truong hop khac ngoai confirm password
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Gia tri nhap vao khong chinh xac";
    },
  };
};
// output
Validator({
  form: "#form-1",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#fullname", "Vui long nhap day du ten cua ban"),
    Validator.isEmail("#email"),
    Validator.isMinLength("#password", 6),
    Validator.isConfirmed(
      "#password_confirmation",
      function () {
        return document.querySelector("#password").value;
      },
      "Mat khau nhap lai khong chinh xac"
    ),
  ],
});
