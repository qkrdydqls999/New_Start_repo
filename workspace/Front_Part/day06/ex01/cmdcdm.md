<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Git 실습</title>
  </head>
  <body>d
    <p>위</p>
    <p>공통부분</p>
    <p>아래</p>
  </body>
</html>

# git_ex로 이동해서 진행

rm -rf .git
git init
git branch -M main
git add .
git status

# branch

git branch dev
git switch dev
git branch -d dev
git branch
git switch -c dev
git add . && git commit -m "change"
git switch main
git branch -d dev

# git branch -D dev

git config --global alias.lg "log --oneline --graph --all"

# 악!!!! 빠트림 ㅠㅠㅠㅠㅠ

# FF

git branch
git switch -c dev
git add . && git commit -m "change"
git log --oneline --graph --all
git merge dev
git branch -d dev

# 3 way merge

git branch dev1
git branch dev2
git branch
git switch dev1
git add . && git commit -m "위를 수정"
git switch main
git switch dev2
git add . && git commit -m "아래를 수정"
git log --oneline --graph --all

# 새로운 커밋이 생성되면서 커밋 메시지를 생성하기 위해 vi 편집기로 돌입

# :wq (뭔가 입력모드 같은게 된것 같으면 esc키를 눌러보자)
