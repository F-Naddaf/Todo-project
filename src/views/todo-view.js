'use strict';

export const toDoStructure = () => {
  const element = document.createElement('div');
  element.classList.add('structure');
  element.innerHTML = `
  <fieldset id="input-field">
  <legend>
    <img id="logo" src = './public/Image/Todo-logo.png' alt="ToDo" height="50px"/>
  </legend>  
      <form id="todo-form">
        <label id="title">Title:</label>
          <input type="text" id="input-title" placeholder="Add a title">
        <label id="desc">Description:</label>
          <input type="text" id="input-desc" placeholder="Enter your description" max="150">
        <label id="date">Date:</label>
          <input type="date" id="input-date" class="input-2" placeholder="dd/mm/yy"/>
      </form>
    <button id="submit-btn">Add</button> 
  </fieldset>
`;
  return element;
};
