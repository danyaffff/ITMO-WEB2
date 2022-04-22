const form = document.querySelector('.form');
const input = document.querySelector('.input');
const items = document.querySelector('.items');

let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(input.value);
});

function addTodo(text) {
  if (text !== '') {
    const todo = {
      id: Date.now(),
      text: text,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    input.value = '';
  }
}

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  redraw(todos);
}

function getFromLocalStorage() {
  const todos_ = localStorage.getItem('todos');
  if (todos_) {
    todos = JSON.parse(todos_);
    redraw(todos);
  }
}

function redraw(todos) {
  items.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.setAttribute('key', todo.id);
    li.innerHTML = `
        ${todo.text}
        <button class="delete">Удолить</button>
        `;
    items.append(li);
  });
}

function deleteTodo(id) {
  todos = todos.filter((value) => {
    return value.id != id;
  });
  addToLocalStorage(todos);
}

getFromLocalStorage();

items.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    deleteTodo(event.target.parentElement.getAttribute('key'));
  }
});
