import {
    getAllTasks,
    getTaskById,
    getCompletedTasks,
} from "./taskFunctions.js";

const tasks = [
    { id: 1, title: "Learn JSX", completed: true },
    { id: 2, title: "Practise React state", completed: false },
    { id: 3, title: "Build a Node.js API", completed: false },
];

console.log(getAllTasks(tasks)); // kõik taskid
console.log(getTaskById(tasks, 2)); // task (2) id järgi
console.log(getTaskById(tasks, 99)); // undefined, kui id ei leidu
console.log(getCompletedTasks(tasks)); //ainult completed taskid

console.log(getAllTasks([])); // tühi massiiv
console.log(getCompletedTasks([])); // tühi massiiv