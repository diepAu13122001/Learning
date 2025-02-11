function toast({ title = "", message = "", type = "info", timeout = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const icons = {
      success: "fa-circle-check",
      info: "fa-circle-info",
      warming: "fa-circle-exclamation",
      error: "fa-circle-xmark",
    };
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${(
      timeout / 1000
    ).toFixed(2)}s forwards`;

    const autoRemoveId = setTimeout(() => {
      // remove the toast message
      main.removeChild(toast);
    }, timeout + 1000);

    // phuong thuc close message (de truoc phan template string)
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        // remove settimeout
        clearTimeout(autoRemoveId);
      }
    };
    toast.innerHTML = `
        <div class="toast__icon"><i class="fa-solid ${icons[type]}"></i></div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
        `;

    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "success",
    timeout: 3000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "error",
    timeout: 3000,
  });
}

function showInfoToast() {
  toast({
    title: "Info",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "info",
    timeout: 3000,
  });
}

function showWarmingToast() {
  toast({
    title: "Warming",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "warming",
    timeout: 3000,
  });
}
