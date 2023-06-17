// const arr = [1, 2, 3, 4, 5];

// const modifyArr = arr.map((d) => {
//   return d * 2;
// });

// console.log(modifyArr);

// const studArr = [
//   { name: "name1", fees: 4000 },
//   { name: "name2", fees: 5000 },
//   { name: "name3", fees: 2000 },
//   { name: "name4", fees: 1000 },
// ];

// const discountFees = studArr.map((stud) => {
//   // if (stud.fees > 2000) {
//   //   return { name: stud.name, fees: stud.fees / 2 };
//   // } else {
//   //   return stud;
//   // }

//   return stud.fees > 2000 ? { name: stud.name, fees: stud.fees / 2 } : stud;
// });

// console.log(discountFees);

// const obj = {
//   name: "abc",
//   price: "222",
//   email: "sdas@test.com",
// };

// console.log(obj["price"], obj.price);

// const obj1 = { ...obj, email: "banoqabil@test.com" };
// console.log(obj1);

// const app = (data) => {
//   console.log(data);
// };

// app({
//   title: "adsa",
//   price: "123",
// });

const arr = [1, 2, 3, 4, 5];
const arrOfObj = [
  {
    class: "Tech",
    price: 33,
  },
  {
    class: "Tech",
    price: 32,
  },
  {
    class: "Tech",
    price: 334,
  },
];

const modifiedArr = arrOfObj.map((data) => {
  if (data.class === "Tech") return { class: "Tech3", price: data.price / 2 };
});

const filterArr = arrOfObj.filter((data) => {
  return data.price > 32;
});
console.log(modifiedArr, filterArr);
