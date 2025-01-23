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

git merge dev1 # 나 지금 dev2인데 dev1과 차이점을 보고 필요한거 흡수하려고 근데 새로운 커밋 만들거임
git log --oneline --graph --all

# merge conflict

git branch feature1
git branch feature2
git branch
git switch feature1
git add . && git commit -m "공통부분 수정(f1)"
git log --oneline --graph --all
git switch feature2
git add . && git commit -m "공통부분 수정(f2)"
git merge feature1
git add .
git commit
