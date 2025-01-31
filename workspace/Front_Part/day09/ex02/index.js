const add = function (a, b) {
  return a + b;
};
const add2 = (a, b) => {
  return a + b;
};
const add3 = (a, b) => a + b;
const power = (a) => a ** 2;
const power2 = (a) => a ** 2;
const shout = () => console.log("YEEEEE");
const obj = () => {
  a: 10;
};
const obj2 = () => ({
  a: 10,
});

console.log(obj());
console.log(obj2());

// 함수형 프로그래밍 맛보기 / 고차함수

// 여기에 js map 고차함수에 적절한 예시 array를 입력
const number = [1, 2, 3, 4, 5];
const number2 = number;

console.log(number);
console.log(number2);

const number3 = number.map(function (num) {
  return num * 3;
});

// number.map((num) => num *3); number.map(num => num *3); <-이런식으로 변형 가능

for (let index = 0; index < number2.length; index++) {
  number2[index] *= 3;
}

console.log(number); // 재할당
console.log(number2);
console.log(number3); // 새로운 사본

console.log(Object.is(number, number2)); // 둘은 같다
console.log(Object.is(number, number3)); // 둘은 다르다

// map -> 여기서는 숫자 예시를 들었지만,
// 객체나 문자열이 오히려 더 많음.
// react로 가면 jsx/tsx 문법적 특징 때문에 list나 반복되는 컴포넌트
// 이런 쪽에 map 문법이 더 많이 쓰임 -> 어차피 화면 구성할 때 다시 보여드릴 것.

// filter는 조건에 맞는 것만 남기겠다--!
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = numbers.filter((v) => v % 2 == 1);
console.log(odd);
const even = numbers.filter((v) => v % 2 == 0);
console.log(even);
// 객체, 배열, 문자열, ...

// reduce -> 하나로만 계속 좁혀서 남기겠다
console.log(numbers.reduce((acc, cur) => acc + cur));
console.log(
  numbers.reduce((acc, cur) => {
    console.log(acc, cur); // acc: 누적된 값, cur: 새로 들어오는 값
    return acc + cur;
  }, 0)
);
console.log(
  numbers.reduce((acc, cur) => {
    console.log(acc, cur); // acc: 누적된 값, cur: 새로 들어오는 값
    return acc * cur;
  }, 1)
);
// forEach
numbers.forEach((el) => console.log(el));

// 구조 분해 할당

// 배열
const arr = ["a", "b", "c", "d"];
const [a, b, c, d] = arr;
console.log(a, b, c, d);
const [e, f, g] = arr;
console.log(e, f, g); // h ??
const [aa, bb, cc, dd, ee] = arr;
console.log(aa, bb, cc, dd, ee); // ee = undefined
const [ff, ...gg] = arr;
console.log(ff, gg);
// 객체
const ob = { a: "a", b: "bb", c: "ccc" };
const { a1, b1, c1 = "기본값" } = ob;
console.log(a1, b1, c1);
const { a: a2, b: b2, c: c2 } = ob;
// 내부에 있는 프로퍼티(키값이름) : 새로 할당할 변수이름 => 구조분해할당 가능
console.log(a2, b2, c2);

// 스프레드 연산자
const x = [1, 2, 3];
const y = [x];
console.log(x, y);
x[0] = 100;
console.log(x, y);
const z = [...x];
console.log(x, z);
console.log(Object.is(x, z));
x[1] = 1000;
console.log(x, z);
const y2 = [[...x]];
x[0] = 222;
console.log(x, y, y2);

// 객체
// const, final, immutable!!!
const man = { name: "john", age: 30 };
const man2 = man;
man2.name = "james";
console.log(man, man2);
const man3 = { ...man };
console.log(man, man2, man3);
console.log(Object.is(man, man3));
man3.name = "dave";
console.log(man, man2, man3);
