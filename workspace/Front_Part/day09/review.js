const newYear = {
  name: "을사년",
  number: 2025,
  wish: ["취직", "성장"],
  // "wish": ["취직", "성장"],
  1: "숫자도 들어갈 수 있다",
  true: "일단 넣어보자", //boolean true가 아니라 변수명이 true임
  hello: function () {
    console.log("안녕하세요!");
  },
};

console.log(newYear.name);
console.log(newYear["name"]);
console.log(newYear[1]);
// console.log(newYear.1);
console.log(newYear.number);
console.log(newYear.true);
console.log(newYear.wish);
console.log(newYear["wish"]);
console.log(newYear.hello);
console.log(newYear.hello());
newYear.hello();

// -----------------------------

// es6+ 이후로는 문자열 프로퍼티 하에서는 어느정도의 순서보장이 된다
console.log(Object.keys(newYear));
// 자바스크립트 바나나(banana)
console.log("b" + "a" + +"a" + "a");

console.log(Object.values(newYear)); //key의 순서에 대응, 하지만 이용 x
// why? : 브라우저마다 결과가 다를 수 있음

console.log(Object.entries(newYear));
wgegew;
