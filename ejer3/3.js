const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo creado dinámicamente';
document.body.appendChild(nuevoParrafo);

const botonEliminar = document.querySelector('#eliminar');
botonEliminar.addEventListener('click', () => {
    const primerParrafo = document.querySelector('p');
    primerParrafo.remove();
});
