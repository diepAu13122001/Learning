/**
 * - Khai niem: la 1 ham co the ghi nho noi no duoc tao va
 * truy cap toi bien o ben ngoai pham vi cua no
 *
 * - Ung dung:
 *  + Viet code ngan gon hon
 *  + Bieu dien, ung dung tinh private trong OOP
 *
 * - Luu y:
 *  + Bien duoc tham chieu (refer) trong closure se khong duoc
 * xoa khoi bo nho khi ham cha thuc thi xong
 */

function makeCounter() {
  let count = 0;
  // increase duoc goi la closure
  function increase() {
    return ++count;
  }
  return increase;
}

// tao ra pham vi hoat dong moi cua ham makeCounter
const counter = makeCounter();
// bien counter goi ham increase
// ham increase chay -> goi bien count
// pham vi hoat dong cua makeCounter co count
// bien count khong bi xoa -> luu tiep gia tri moi nhat
// vi chi tao 1 pham vi cua ham makeCounter -> 1 bien count duoc tao
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

// pham vi hoat dong moi -> gia tri bien count se duoc gan lai
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4

// --------------- Ung dung ----------------------------
// Bai 1: tao ham xuat log cho app
function createLog(type) {
  function showLog(message) {
    console.log(`[${type}] ${message}`);
  }
  return showLog;
}

const msg = createLog("info");
msg("This is an information message"); // khong tao nhieu bien
msg("This is the second information message"); // tai su dung code

// -------------------------------------------------------------
// Bai 2: chuc nang luu local storage
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(property) {
      return store[property];
    },
    set(property, value) {
      store[property] = value;
      save();
    },
    remove(property) {
      delete store[property];
      save();
    },
  };
  return storage;
}

// luu setting cua cac trang khac nhau
const profileSetting = createStorage("profile_setting");
profileSetting.set("mode", "dark");
profileSetting.set("language", "en");
console.log(profileSetting.get("language"));

// -------------------------------------------------------------
// the hien tinh private (tinh dong goi)
function createApp() {
  const cars = []; // dua vao private scope
  return {
    add(car) {
      cars.push(car);
    },
    get(index) {
      return cars[index];
    },
    remove(index) {
      cars.splice(index, 1);
    },
  };
}

const app = createApp();
console.log(app.cars); // undefined
app.add("xe 1");
app.add("xe 2");
console.log(app.get(1)); // xe 2
