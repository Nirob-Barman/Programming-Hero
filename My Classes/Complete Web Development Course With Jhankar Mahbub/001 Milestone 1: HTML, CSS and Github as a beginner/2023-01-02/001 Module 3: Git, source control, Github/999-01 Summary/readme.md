## 003-01 Github Module Introduction

scm = source code management

Command Promopt =>

git --version


## 003-02 Install git, create GitHub repository

New repository - my-first-repo

### create a new repository on the command line

echo "# my-first-repo" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/rsnirob/my-first-repo.git

git push -u origin main


### push an existing repository from the command line

git remote add origin https://github.com/rsnirob/my-first-repo.git

git branch -M main

git push -u origin main


### Command Promopt

cd ..

cd ..

cd Projects

cd my-first-repo


## 003-03 Introduction to Git init, git add, git commit


echo "# my-first-repo" >> README.md

git init

git add .

git commit -m "My git commit"


## 003-04 Set origin, Git push, git pull, and repo overview

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  
  git config --global user.name "Your Name"


git branch -M main

git remote add origin https://github.com/rsnirob/my-first-repo.git

git push -u origin main



## 003-05 Send small incremental changes to github


git add .

git commit -m "added header"

git push


---

Command Promopt =>

my-second-repo

git add .

git commit -m "color changed"

git push



## 003-06 Common github related issues faced by new developer


git bash

git --version

---

echo "# my-third-repo" >> README.md 

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/rsnirob/my-third-repo.git

git push -u origin main

---

vs code - git bash 

git init

git add .

git commit -m "third repo"

git branch -M main


settings => pages => Source / Branch => main => save


## 003-07 [advanced] Create git branch, merge branches

[Git-Commands](https://github.com/joshnh/Git-Commands)


git branch

git branch [branch name]

git checkout -b [branch name]


