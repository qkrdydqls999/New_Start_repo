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

//----------------------

const language = ["python", "js", "c++", 0, true, {}, []];
//자바스크립트에서의 함수형 프로그래밍 -> jsx, tsx react. next.

//보통 숫자는 0부터 센다
//R과 엑셀을 제외하고(LLM도 1부터씩 세는데 오히려 0부터 셀 때 불편한 경우도 있음)
//자르다 1 - 3 => js, c++.
console.log(language.slice(1, 3)); ///포함, 불포함 여부를 체크해야함
// 시작점은 포함, 끝점은 불포함.
// (1) 배열의 인덱스를 적용하고 있는가(0부터 시작하는가)
// (2) 시작점과 끝점을 어떻게 적용하는가 (일반적으로 시작점은 포함, 끝점은 불포함)
// -> 자바스크립트는 음수 인덱스가 없음
console.log(language.length); // length는 프로퍼티로서 괄호가 필요 없음
// 호출이 필요하다 -> 함수 or 메서드라는 뜻
// 파이썬은 len() 자바는 배열.length() 나 자료구조.size()로 처리리

console.log(language.concat(language));
//배열들로 구성된 원소가 있을 경우 그 원소들로 합쳐진
// -> language.concat(language) => 원본과 무슨 관계?

const l2 = language.concat(language, language); // concat -> 2개를 연결결
//아예 새로운 배열이 생성된 것것

console.log(language);
console.log(l2);

l2.pop(); // 맨 끝에 있는걸 제거

console.log(language); // 영향이 없음음
console.log(l2);

for (let i = 0; i < language.length; i++) {
  console.log(i, language[i]);
  // 배열은 인덱스와 배열[인덱스]로 값 호출
  // 마이너스라던가, 전체 길이 이상의 값을 호출한다면
  // arr.length 이상의 값을 호출하면 undefined (error 아님)
  // 없는 키를 호출하면 undefined가 난다다
}

for (const v of language) {
  // 값 하나 하나를 굳이 인덱스를 호출하는 번거로움을 거치지 않고
  // 그냥 v라는 변수로 그때그때 호출
  console.log(v);
  //인덱스를 안쓰거나 못씀 // 인덱스를 활용하는 경우에는 피하는게 좋음
}

for (const key in newYear) {
  // 쓰지않는걸 권장
  // console.log(key, newYear.key); key라는 이름의 프로퍼티를 조회하는 형식
  console.log(key, newYear[key]);
}
