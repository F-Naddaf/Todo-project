'use strict';

import { USER_INTERFACE } from '../constants.js';
import { aboutTheApp } from '../views/welcome-view.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE);
  userInterface.innerHTML = '';

  const introduction = aboutTheApp();
  userInterface.appendChild(introduction);
};
