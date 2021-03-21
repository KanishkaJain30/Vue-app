# Problem Statement

 Write a simple website for browsing all solutions submitted during a coding contest. Your submission should have two pages:

/submissions page which displays all submissions of a contest in a vuetify v-data-table. The columns to display are:
Submission time - display date and time of submission
Problem name - A problem name of the submission
Result - The result of the submission. can be CORRECT_ANSWER, WRONG_ANSWER, TIME_LIMIT_EXCEEDED, MEMORY_LIMIT_EXCEEDED and RUNTIME_ERROR
time taken (in s)
memory taken (in MiB)
The page should have filtering and sorting features. Some actions are:

Sort - for pretty much any field (result, time taken, memory) etc.
filter by result so that only submissions of the given result are visible
Filter result only for particular problem
/submissions/ page that displays details of the submission. All the above details should be present plus the code of the solution should be displayed in a codemirror editor. You can assume the syntax is C++.

# How to start this application

#Clone the repository
git clone https://github.com/KanishkaJain30/Vue-app

cd Vue-app

# install dependencies
npm install







npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
