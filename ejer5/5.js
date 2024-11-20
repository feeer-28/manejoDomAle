function Click() {
    alert('¡Botón clickeado!');
    }
    const btnClickMe = document.getElementById('clickMe');
    btnClickMe.addEventListener('click', Click);

function RemoveEvent() {
    btnClickMe.removeEventListener('click', Click);
    }
    
    const btnRemoveEvent = document.getElementById('removeEvent');
    btnRemoveEvent.addEventListener('click', RemoveEvent);