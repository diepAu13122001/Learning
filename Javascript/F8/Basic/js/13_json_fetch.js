// JSON -----------------------------------------------------
// JSON: la 1 DINH DANG du lieu (string) (k phai kieu du lieu) - JAVASCRIPT OBJECT NOTATION
// JSON giup the hien kieu du lieu trong JS: number, string, object, array, boolean, null
// => khac thi khong the hien duoc trong chuoi JSON
// Can chuyen doi tu JSON <=> JS (parse - stringify)

// khi muon the hien 1 string/key trong json => can them ngoac kep " "
var json_arr = '["JS", "PHP"]';
var json_obj = '{"name": "Au Ngoc Diep", "age": 55}';

var a = "abc"; // '"abc"'
// console.log(typeof JSON.parse(a)); // error => can them "" khi do la chuoi

var b = "1";
console.log(typeof JSON.parse(b)); // number

console.log(typeof JSON.stringify(1234)); // string
console.log(typeof JSON.stringify({ a: "a", b: "b" })); // string

// Callback -----------------------------------------------------
// Sync : dong bo (ai viet truoc chay truoc, ai viet sau chay sau ke ca co settimeout viet truoc)
/**
 * settimeout (1, 1000);
 * clg(2); => phai cho cho 1 in ra moi in so 2 => nhu vay moi dong bo
 */

// Async : bat dong bo (cach giai quyet cua JS) - khong biet khi nao xong => can bat dong bo => callback
// => fetch, settimeout, setinterval, xmlHttpRequest, doc file (bufferReader), request animation frame
//Callback hell + Pyramid of doom
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4); // this is a hell :)
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promise -----------------------------------------------------
// Bao gom 3 trang thai: pending, resolve - fulfilled, rejected
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // logic: bat buoc phai goi 1 trong 2, neu k bi: memory leak
    // resolve: thuc hien loi hua => thanh cong
    resolve();
    // reject: that hua => that bai
  }
);

//  then => catch => finally (chain => giai quyet hell)
promise
  .then(function () {
    // tra ve resolve
    console.log("Successful");
  })
  .catch(function () {
    // tra ve reject
    console.log("Failure");
  })
  .finally(function () {
    // du resolve hay reject deu thuc hien finally
    console.log("Done!");
  });

// neu return lai 1 promise (then) = > then 2 phai cho then 1 chay xong moi chay
promise
  .then(function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then((data) => console.log(data.join(", "))) // doi 3 giay moi hien thi "1, 2, 3"
  .catch(() => console.log("Failure"));

// giai quyet bai toan sau 1 giay in 1 so (k dung setinterval)
function notHell([value, ms]) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(value, ms);
      return resolve([value, ms]);
    }, ms);
  });
}

notHell([1, 1000])
  .then(([value, ms]) => {
    return notHell([value + 1, ms]);
  })
  .then(([value, ms]) => {
    return notHell([value + 1, ms]);
  })
  .then(([value, ms]) => {
    return notHell([value + 1, ms]);
  })
  .catch((err) => console.log(err));

// Promise.all/ reject/ resolve
var x = Promise.resolve("abc"); // chi 1 ve
var y = Promise.reject("xyz"); // chi 1 ve
x.then((data) => console.log("then", data)).catch((err) =>
  console.log("catch", err)
);
y.then((data) => console.log("then", data)).catch((err) =>
  console.log("catch", err)
);

// Promise all : can chay song song ca 2 promise => do ton thoi gian cho doi
var m = new Promise((resolve) => {
  setTimeout(() => {
    resolve("m");
  }, 1000);
});
// var n = Promise.reject("Error!");
var o = new Promise((resolve) => {
  setTimeout(() => {
    resolve("n");
  }, 1000);
});
Promise.all([m, o])
  .then(([resolve1, resolve2]) => {
    console.log(resolve1 + "" + resolve2); // "mn"
  })
  .catch((err) => console.log(err)); // chi can 1 promise reject, tat ca cac promise phia sau bi delay

// example (fake API)
var users = [
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Nguyen Van B" },
  { id: 3, name: "Nguyen Van C" },
];
var comments = [
  { id: 1, comment: "abc", user_id: 1 },
  { id: 2, comment: "xyz", user_id: 2 },
  { id: 3, comment: "mno", user_id: 1 },
  { id: 4, comment: "lhk", user_id: 3 },
];

function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

function getUserIds(user_ids) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var results = users.filter((user) => user_ids.includes(user.id));
      resolve(results);
    });
  }, 1000);
}

getComments()
  .then((comments) => {
    var user_ids = comments.map((user) => user.id);

    return getUserIds(user_ids).then((users) => {
      return comments.map((cmt) => {
        var user_name = users.find((user) => user.id === cmt.user_id).name;
        return { comment: cmt.comment, user: user_name };
      });
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// Fetch -----------------------------------------------------
/**
 * Backend(OK) => API => fetch => JSON/XML => JSON.parse => JS types => Render ra giao dien
 */

var postApi = "https://jsonplaceholder.typicode.com/posts/";
var rd = Math.floor(Math.random() * 10);
fetch(postApi + rd)
  .then((response) => response.json()) // JSON.parse => JS types
  .then((json) => console.log("fetch", json))
  .catch((err) => console.log(err));

// JSON server -----------------------------------------------
// Thu vien JSON server: tao API fake (no backend)
// Link: npm install -g json-server
// Fake API = Mock API
// cai dat json server (npm install -g json-server) - folder json-server
var url = "http://localhost:3000/posts";
// POST
fetch(url, {
  method: "POST",
  body: JSON.stringify({ id: "5", title: "title 5", views: 98 }),
})
  .then((data) => console.log("post",data)) // return a response
  .catch((err) => console.log(err));

// GET
// fetch(url)
//   .then((data) => data.json())
//   .then((json) => console.log("json-server", json))
//   .catch((err) => console.log(err));

//PATCH: chi cap nhat noi dung + thuoc tinh da co san
// fetch(url + "/1", {
//   method: "PATCH",
//   body: JSON.stringify({ id: "1", title: "title 1 da sua", views: 190 }),
// })
//   .then((data) => console.log(data)) // return a response
//   .catch((err) => console.log(err));

//PUT: cap nhat toan bo thong tin => them duoc thuoc tinh moi
// fetch(url + "/2", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: "2",
//     title: "title 2 da sua",
//     views: 456,
//     new_prop: "abc",
//   }),
// })
//   .then((data) => console.log(data)) // return a response
//   .catch((err) => console.log(err));

//DELETE
// fetch(url + "/1", {
//   method: "DELETE",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
