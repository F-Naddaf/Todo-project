'use strict';

import { USER_INTERFACE } from '../constants.js';
import { toDoStructure } from '../views/todo-view.js';

export const toDoField = () => {
  const userInterface = document.getElementById(USER_INTERFACE);
  userInterface.innerHTML = '';

  const toDo = toDoStructure();
  userInterface.appendChild(toDo);

  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');
  const username = localStorage.getItem('username') || '';
  nameInput.value = username;

  nameInput.addEventListener('change', (e) => {
    localStorage.setItem('username', e.target.value);
  });

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      title: e.target.elements.title.value,
      date: e.target.elements.date.value,
      desc: e.target.elements.desc.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();

    DisplayTodos();
  });

  DisplayTodos();

  function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const row = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');

      input.type = 'checkbox';
      input.checked = todo.done;
      span.classList.add('bubble');
      if (todo.category == 'personal') {
        span.classList.add('personal');
      } else {
        span.classList.add('business');
      }
      row.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');

      row.innerHTML = `<input type="text" value="${todo.date}       ${todo.title}:        ${todo.desc}" readonly>`;
      edit.innerHTML = 'Edit';
      deleteButton.innerHTML = 'Delete';

      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(row);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);

      if (todo.done) {
        todoItem.classList.add('done');
      }

      input.addEventListener('change', (e) => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));

        if (todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }

        DisplayTodos();
      });

      edit.addEventListener('click', (e) => {
        const input = row.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          todo.row = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          DisplayTodos();
        });
      });

      deleteButton.addEventListener('click', (e) => {
        todos = todos.filter((t) => t != todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });
  }
};
