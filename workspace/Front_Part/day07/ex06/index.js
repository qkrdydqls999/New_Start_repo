async function makeIssue() {
  const token = process.env.GH_TOKEN;
  // 요고 1
  const OWNER = "qkrdydqls999"; // 여러분들의 github 계정 이름
  // 요고 2
  const REPO = "New_Start_repo"; // 여러분들의 현재 리포지터리 이름
  const response = await fetch(
    `https://api.github.com/repos/${qkrdydqls999}/${New_Start_repo}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "오늘의 숫자는 뭘까~요옹", // 요고 3
        body: `${Math.floor(Math.random() * 10) + 1}`, // 요고 4
      }),
    }
  );
  if (response.ok) {
    console.log("성공");
  } else {
    console.log("실패");
  }
}

makeIssue();
