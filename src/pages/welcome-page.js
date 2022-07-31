'use strict';

import { USER_INTERFACE } from '../constants.js';
import { aboutTheApp } from '../views/welcome-view.js';
import { toDoField } from './todo-page.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE);
  userInterface.innerHTML = '';

  const introduction = aboutTheApp();
  userInterface.appendChild(introduction);

  const startButton = document.getElementById('enter-btn');
  startButton.addEventListener('click', toDoField);
};
