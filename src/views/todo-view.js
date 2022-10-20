'use strict';

export const toDoStructure = () => {
  const element = document.createElement('div');
  element.classList.add('structure');
  element.innerHTML = `
  <section class="greeting">
    <h2 class="title">
      What's up, <input type="text" id="name" placeholder="Name here" />
      <img id="welcome-logo" src = './public/Image/Todo-logo-1.png' alt="ToDo" height="40px"/>
    </h2>
		</section>
    <section class="create-todo">
			<h3>CREATE A TODO</h3>
			<form id="new-todo-form">
				<h4>What's on your todo?</h4>
        <div class="input-container">
        <div class="title-input">
          <input 
            type="text" 
            placeholder="Title: e.g. Shopping"
            name="title"
            id="content" 
            required/>
            </div>
            <div class="date-input">
          <input 
            type="text" 
            placeholder="Date: e.g. 12-12-2022"
            name="date"
            id="content" 
            required/>
          </div>
        </div>
      <input 
        type="text" 
        placeholder="Description: e.g. Get some milk"
        name="desc"
        class="desc"
        id="content" 
        required/>
				
				<h4>Pick a category</h4>
				<div class="options">
					<label>
						<input type="radio" name="category" id="category1" value="business" /> 
						<span class="bubble business"></span>
						<div>Business</div>
					</label>
					<label>
						<input type="radio" name="category" id="category2" value="personal" />
						<span class="bubble personal"></span>
						<div>Personal</div>
					</label>
				</div>
				<input type="submit" value="Add todo" />
			</form>
		</section>
    <section class="todo-list">
			<h3>TODO LIST</h3>
			  <div class="list" id="todo-list">
        <div id="error"></div>
          <dic class="todo-item">
            <label>
              <input type='checkbox' />
              <span class="bubble business"></span>
            </label>
            <div class="todo-content">
              <input class="input-item" type="text" value="12-12-2022" readonly />
              <input class="input-item" type="text" value="Shopping" readonly />
              <input class="desc-item" type="text" value="make a video jaassd asjkdjka Fadi wassim Julia Jessica mama baba anna " readonly />
            </div>
            <div class="actions">
              <button class="edit"> Edit </button>
              <button class="delete"> Delete </button>
            </div>
          </div>
        </div>
		</section>
`;
  return element;
};
