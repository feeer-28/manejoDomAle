const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo div';

const antiguoDiv = document.querySelector('#antiguo');
antiguoDiv.parentNode.replaceChild(nuevoDiv, antiguoDiv);

console.log(document.querySelector('#nuevo').textContent);