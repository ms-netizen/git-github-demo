# Student Tasks Git and GitHub Demo

A small HTML, CSS, and JavaScript project for demonstrating the basic Git and GitHub workflow.

## Run the project

Open `index.html` in a browser.

## Suggested teaching workflow

```bash
git init
git status
git add .
git commit -m "Create the first version"
git branch feature/filter-tasks
git switch feature/filter-tasks
git add .
git commit -m "Add a task filter"
git switch main
git merge feature/filter-tasks
git remote add origin https://github.com/USERNAME/git-github-demo.git
git push -u origin main
git pull origin main
```

## Classroom exercise

Ask students to add a task counter on a new branch, commit the change, merge it into `main`, and push the result to GitHub.
