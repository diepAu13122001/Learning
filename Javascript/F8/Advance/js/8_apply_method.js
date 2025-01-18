// Phương thức này cho phép gọi 1 hàm với 1 this (bind) và truyền đối số cho hàm gốc dưới dạng MẢNG
// [SO SÁNH]: khác cách truyền đối số so với call (truyền theo mảng)

// --------------------------------
// vi du 1: cach van hanh cua apply
const person_1 = {
  firstName: "abc",
  lastName: "ABC",
  online: false,
  goOnline(isOnl) {
    this.online = isOnl;
  },
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = greet.apply(person_1, ["Hello,", "You're so cutee!"]);
console.log(result);

// --------------------------------
// vi du 2: muon ham
const person_2 = {
  firstName: "mno",
  lastName: "MNO",
  online: false,
};
// muon ham online cua person1
person_1.goOnline.apply(person_2, [true]); // gan bien trong danh sach
console.log(person_2.online); // true

// --------------------------------
// vi du 3: ke thua
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Fish(name, weight, length) {
  // cach viet ke thua
  Animal.apply(this, [name, weight]);
  this.length = length;
}
const fish_1 = new Fish("Fish 1", 2000, 1000);
console.log(fish_1);
