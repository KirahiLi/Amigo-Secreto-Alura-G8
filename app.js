document.addEventListener('DOMContentLoaded', () => {
    const nombres = []; // Array para almacenar los nombres

    // Función para agregar un amigo a la lista
    function agregarAmigo() {
        const inputAmigo = document.getElementById('amigo');
        const nombre = inputAmigo.value.trim();

        // Validar si el campo está vacío
        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }

        // Agregar el nombre al array y limpiar el campo de entrada
        nombres.push(nombre);
        inputAmigo.value = '';
        actualizarLista();
    }

    // Función para actualizar la lista de nombres en la interfaz
    function actualizarLista() {
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

        nombres.forEach((nombre) => {
            const li = document.createElement('li');
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    // Función para sortear un amigo secreto
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert('No hay nombres en la lista para sortear.');
            return;
        }

        const resultado = document.getElementById('resultado');
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const amigoSecreto = nombres[indiceAleatorio];

        // Mostrar el resultado del sorteo
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    }

    // Asignar las funciones a los botones
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;

    // Escuchar el evento "keydown" en el campo de texto
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { // Si se presiona la tecla Enter
            agregarAmigo(); // Llama a la función para agregar el nombre
        }
    });
});