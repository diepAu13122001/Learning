// cach viet nhanh phan get document
const $ = document.querySelector.bind(document); // lay 1 phan tu bat ky
const $$ = document.querySelectorAll.bind(document); // lay danh sach cac phan tu
const tabs = $$(".tab-item");
const tab_panes = $$(".tab-pane");
const line = $(".tabs .line");
const tab_item_active = $(".tab-item.active");

// set default width + location for line
// can chu y khi su dung offsetLeft => bo margin/ padding 
line.style.left = tab_item_active.offsetLeft + "px";
line.style.width = tab_item_active.offsetWidth + "px";

//  loc qua cac elements
tabs.forEach((tab, index) => {
  const pane = tab_panes[index];

  tab.onclick = function () {
    // luu y arrow func khong dung chung voi this
    // bo active trong tab cu
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    // them active
    this.classList.add("active");
    pane.classList.add("active");
    // doi line
    line.style.left = $(".tab-item.active").offsetLeft + "px";
    line.style.width = $(".tab-item.active").offsetWidth + "px";
  };
});
