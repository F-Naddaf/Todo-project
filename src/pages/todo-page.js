'use strict';

import { USER_INTERFACE } from '../constants.js';
import { toDoStructure } from '../views/todo-view.js';

export const toDoField = () => {
  const userInterface = document.getElementById(USER_INTERFACE);
  userInterface.innerHTML = '';

  const toDo = toDoStructure();
  userInterface.appendChild(toDo);
};
