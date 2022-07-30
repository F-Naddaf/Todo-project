'use strict';

export const aboutTheApp = () => {
  const element = document.createElement('div');
  element.classList.add('intro');
  element.innerHTML = `
<img id="welcome-logo" src = './public/Image/Todo-logo.png' alt="ToDo" height="90px"/>
<p class="intro-massage"> ToDo App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the a date when you have to do it. It is helpful in planning our daily schedules</p>
<button id="enter-btn">Start</button>
`;
  return element;
};
