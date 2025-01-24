let add = 1 + 1;
console.log("add", add);
let divide = 10 / 7;
console.log("divide", divide);
let modulo = 10 % 7;
console.log("modulo", modulo);
let pow = 10 ** 3;
console.log("pow", pow);
console.log("zeroDivine", 1 / 0);

//비교 연산자
console.log("1 == 1.0", 1 == 1.0); // (느슨한) 동등
console.log("1 === 1.0", 1 === 1.0);
console.log("1 != 1.0", 1 != 1.0); //(느슨한) 부등
console.log(`1 == "1.0"`, 1 == "1.0");
console.log(`1 === "1.0"`, 1 === "1.0"); // (엄격한 동등) 일치
console.log(`1 !== "1.0"`, 1 !== "1.0"); // (엄격한 부등) 불일치
console.log(`1 >= "1.0"`, 1 >= "1.0"); // (엄격한 부등) 불일치
console.log(`1 <= "1.0"`, 1 <= "1.0"); // (엄격한 부등) 불일치
console.log(`"a" <= "b"`, "a" <= "b"); // 문자의 아스키코드값을 비교

//논리 연산자
let condition1 = 100 < 1000; // true
let condition2 = "a" < "b"; // true
let condition3 = 100 > 1000; // false
let condition4 = "a" > "b"; // false

// AND (&&) 단축 연산자
console.log("condition1 && condition2", condition1 && condition2); // T T
// O -> O => T

console.log("condition2 && condition3", condition2 && condition3); // T F
// O -> X => F

console.log("condition3 && condition2", condition3 && condition2); // F T
// X => F

console.log("condition4 && condition3", condition4 && condition3); // F F
// X => F

// OR (||) 단축 연산자
console.log("condition1 && condition2", condition1 && condition2); // T T
// O => T

console.log("condition2 && condition3", condition2 && condition3); // T F
// O => T

console.log("condition3 && condition2", condition3 && condition2); // F T
// X -> O => T

console.log("condition4 && condition3", condition4 && condition3); // F F
// X -> X => F

// NOT ()
console.log("!true", !true);
console.log("!false", !false);

// 삼항연산자
// 조건 ? 참일때 : 거짓일 때
// (python) : true일 때 if 조건 else 거짓일 때
console.log(100 > 10 ? "100이 10보다 크네" : "100이 10보다 작네");
console.log(100 < 10 ? "100이 10보다 크네" : "100이 10보다 작네");

//타입 반환 연산자
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof null); // 유명한 버그. (null의 타입은 object???)
console.log(typeof undefined);

let arr = [];
console.log(arr instanceof Array);
