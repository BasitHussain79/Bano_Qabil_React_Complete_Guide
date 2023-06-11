const arr = [1, 2, 3, 4, 5];

const modifyArr = arr.map((d) => {
  return d * 2;
});

const studArr = [
  { name: "name1", fees: 4000 },
  { name: "name2", fees: 5000 },
  { name: "name3", fees: 2000 },
  { name: "name4", fees: 1000 },
];

const discountFees = studArr.map((stud) => {
  return stud.fees > 2000 ? { name: stud.name, fees: stud.fees / 2 } : stud;
});

console.log(discountFees);

console.log(modifyArr);
