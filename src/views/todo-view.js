'use strict';

export const toDoStructure = () => {
  const element = document.createElement('div');
  element.classList.add('structure');
  element.innerHTML = `
  <fieldset id="input-field">
  <legend>
  <div class="logo-background">
    <img id="logo" src = './public/Image/Todo-logo.png' alt="ToDo" height="40px"/>
  </div>
    </legend>  
      <form id="todo-form">
        <div class="top-field">
          <div id="title-section">
            <label class="label-name">Title:</label>
            <input type="text" class="small-input-field" id="input-title" placeholder="Add a title">
          </div>
          <div id="date-section">
            <label class="label-name">Date:</label>
            <input type="date" class="small-input-field" id="input-date" class="input-2" placeholder="dd/mm/yy"/>
          </div>
        </div>
        <div class="bottom-field">
          <label class="label-name">Description:</label>
          <textarea type="text" class="input-field" id="input-desc" placeholder="Enter your description" maxlength="200"></textarea>
        </div>  
        <button id="submit-btn">Add</button> 
      </form>
  </fieldset>
  <fieldset id="show-field">
    <legend class="todo-list"> Your TO<span class="do-color">DO</span> List </legend>
    <table id="my-list">
      <tr id="list">
        <td><input id="checkbox" type="checkbox" name="todo" value="todo"></td>
        <td>McDonald's</td>
        <td>Friday I have to meet my Friends in McDonald's at 10:30am</td>
        <td>10-08-2022</td>
      </tr>
    </table>
  </fieldset>
`;
  return element;
};
