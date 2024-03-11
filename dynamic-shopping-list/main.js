const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  let content = input.value
  input.value = '';

  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteButton);

  span.textContent = content;
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', () => {
    ul.removeChild(li);
  })
})