git add .
git commit -m "first commit"
git remote add origin https://github.com/qus0in/with_cline.git
git branch -M main
git push -u origin main

cd ../
git clone https://github.com/qus0in/with_cline

history

git clone https://github.com/qus0in/with_cline with_cline2

git branch dev
git branch
echo . > gigo.txt
git status
git switch dev

git add \*

git switch main
git status

git branch -d dev
git switch -c dev
git branch

# 빠진곳!!!!s

git add .
git commit -m "gigo"
git log --graph

# git log # q로 나가기

git log --graph --oneline

git switch dev
ls -a
touch gigo2.txt
git add .
git commit -m "gigo2"
git log --graph --oneline
git log --graph --oneline --all
git switch main

git branch -d dev
git log --graph --oneline --all
git branch -D dev

# ff

git switch -c feature
git add . && git commit -m "한글 패치"
git log --graph --oneline --all
git switch main
git merge feature
git log --graph --oneline --all

git log --graph --oneline --all
git branch -d feature
git log --graph --oneline --all
git log --graph --oneline
git log --graph --oneline --all

# merge conflict

<h1>철학자의 국적 :</h1>
<h1>철학자의 저서 :</h1>

git add . && git commit -m "common"

git switch -c feature/b

# 국적 내용 편집

git add . && git commit -m "덴마크"

git switch main
git switch -c feature/y

# 📖이것이냐 저것이냐

git add . && git commit -m "책이름"

git log --graph --oneline --all
git switch feature/y
git merge feature/b
git log --graph --oneline --all
git switch -c feature/i
git add . && git commit -m "그것이냐"
git switch feature/y
git add . && git commit -m "저것이냐"
git log --graph --oneline --all
git merge feature/i
git log --graph --oneline --all

# 3 way merge

git merge feature/i
git log --graph --oneline --all
git switch main
git switch -c dev1
touch a1.txt
git add . && git commit -m "a1"
git switch main
git switch -c dev2
touch a2.txt
git add . && git commit -m "a2"
git log --graph --oneline --all
git merge dev1

# :wq
