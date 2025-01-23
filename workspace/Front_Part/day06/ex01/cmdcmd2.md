# Rebase

## 브랜치 정리

git switch main
git merge feature2
git branch -d dev1 dev2 feature1 feature2
git branch
git log --oneline --graph --all

## 커밋 만들기

git switch -c feature
git add . && git commit -m "hello world"
git log --oneline --graph --all
git switch main
git add . && git commit -m "bye earth"

## 리베이스 (무충돌)

git switch feature
git rebase main
git log --oneline --graph --all

## 리베이스 (충돌)

### FF

git log --oneline --graph --all
git merge feature
git log --oneline --graph --all

### 실습준비

git add . && git commit -m "javascript"
git switch feature
git add . && git commit -m "typescript"
git log --oneline --graph --all

### 충돌 리베이스

git rebase main
git add .
git rebase --continue
git log --oneline --graph --all

### 충돌 (스킵 포함)

git branch
git switch main && git merge feature
git log --oneline --graph --all

git add . && git commit -m "네이버"
git switch feature
git add . && git commit -m "백준"
git add . && git commit -m "프로그래머스"

git rebase main
git rebase --skip
git add .
git commit # :wq
git rebase --continue
git log --oneline --graph --all

# reset & revert

touch a.txt
git add .
git commit -m "a"
git reset --mixed HEAD
touch b.txt
git add .
git status
git reset --soft HEAD
git status
git reset --hard HEAD~1
touch c.txt
git add . && git commit -m "c"
git log --oneline --graph --all
git revert HEAD~1 # :wq
git log --oneline --graph --all
git status
git revert HEAD~1
git revert HEAD

# amend

touch d.txt
git add . && git commit -m "d.tx"
git commit --amend
git log --oneline --graph --all
git log
git commit --amend -m "tt.txt"
git log
git commit --amend --no-edit --date "1 day ago"
git log
