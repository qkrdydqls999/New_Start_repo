// 조건문
// 비교 연산자, 논리 연산자(단추 평가), boolean.
let age = 50;
if (age >= 20) {
  console.log("일하러 가야지!");
}
if (age >= 20) {
  console.log("일하러 가야지!");
} else {
  console.log("놀아야지!");
}

let money = 10000;

if (money >= 10000) {
  console.log("고급 자장면을 먹어야지!");
} else if (monet >= 5000) {
  console.log("자장면을 먹어야지!");
} else {
  console.log("못 먹겠네 ㅠㅠ");
}

const randNum = Number.floor(Math.random() * 6); // 0은 포함, 1은 미포함
// break가 없으면 해당하는 것 아래로 전부 실행됨됨
switch (randNum) {
  case 0:
    console.log("1입니다");
    break;
  case 1:
    console.log("2입니다");
    break;
  case 2:
    console.log("3입니다");
    break;
  case 3:
    console.log("4입니다");
    break;
  case 4:
    console.log("5입니다");
    break;
  case 5:
    console.log("6입니다");
    break;

  default:
    console.log("뭔가 이상해요...");
    break;
}
