const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  let item = input.value;
  input.value = '';

  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  span.textContent = item;
  deleteButton.textContent = 'Delete';

  li.appendChild(span);
  li.appendChild(deleteButton);
  ul.appendChild(li);

  deleteButton.addEventListener('click', () => {
    ul.removeChild(li);
  })
})