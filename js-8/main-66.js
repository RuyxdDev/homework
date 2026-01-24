"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// ========== DOM функции ==========

// Получение элементов DOM
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Создание элемента задачи в DOM
const createTodoElement = todo => {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.todoId = todo[todoKeys.id];

  if (todo[todoKeys.is_completed]) {
    li.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = todo[todoKeys.is_completed];
  checkbox.addEventListener("change", () => handleToggleTodo(todo[todoKeys.id]));

  const text = document.createElement("span");
  text.className = "todo-text";
  text.textContent = todo[todoKeys.text];

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => handleDeleteTodo(todo[todoKeys.id]));

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);

  return li;
};

// Отображение всех задач
const renderTodos = () => {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "Нет задач. Добавьте первую задачу!";
    todoList.appendChild(emptyMessage);
    return;
  }

  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
};

// Обработка добавления новой задачи
const handleAddTodo = event => {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  createTodo(todos, text);
  todoInput.value = "";
  renderTodos();
};

// Обработка переключения статуса задачи
const handleToggleTodo = todoId => {
  completeTodoById(todos, todoId);
  renderTodos();
};

// Обработка удаления задачи
const handleDeleteTodo = todoId => {
  deleteTodoById(todos, todoId);
  renderTodos();
};

// Инициализация приложения
const init = () => {
  todoForm.addEventListener("submit", handleAddTodo);
  renderTodos();
};

// Запуск приложения после загрузки DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
