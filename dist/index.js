"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.getElementById("todoForm");
const todoList = document.getElementById("todolist");
const todos = readTodos();
todos.forEach((todo) => createTodo(todo));
function readTodos() {
    const todos = localStorage.getItem("todos");
    if (todos === null)
        return [];
    return JSON.parse(todos);
    // console.log(localStorage.getItem("todos"));
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        text: input.value,
        completed: false,
    };
    todos.push(todo);
    createTodo(todo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    li.appendChild(checkbox);
    li.append(todo.text);
    todoList.append(li);
}
form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", () => {
//   // ? is optional
//   console.log(input.value);
//   input.value = "";
//   input.autofocus = true;
// });
