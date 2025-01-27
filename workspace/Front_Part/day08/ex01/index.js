const me = {
  name: "김개발",
  job: "영화감독",
  age: 37,
  height: 172.5,
  married: false,
  hobby: ["코딩", "야구", "카드게임"],
  1: "영화",
  movie: {
    name: "AI 감독관",
    year: 2025,
  },
  hello: function () {
    console.log("안녕하세요!");
  },
  say_my_name: function () {
    console.log(`내 이름은 ${this.name}!`);
  },
};

console.log(me.name);
console.log(me["name"]);
//자바스크립트에서의 변수명 혹은 함수명 규칙
//console.log(me.1); <- 안됨
console.log(me[1]);
me.hello();
me.say_my_name();

//프로시져 -> 일반적으로 RETURN이 없음
//트리거 -> 이벤트/조건 -> 절차적, 묶음의 반복
//함수. (라이브러리 함수. <사용자 정의 함수>.)

function add(a, b) {
  console.log("console.log(a+b);", a + b);
  //return a+b;
  return;
  console.log("뒤가 없음"); //리턴 뒷부분은 실행 x
}

console.log(add(1, 2));
