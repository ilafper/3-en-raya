
$(document).ready(function(){
    let contenedor = ['', '', '', '', '', '', '', '', ''];
    let jugador_actual = 'X';
    let fin_juego = false;


    function actualizar_tablero() {
        cells.forEach((celda, index) => {
            celda.textContent = contenedor[index];
        });
    }

    // Comprobar ganador
    function Comprobar_ganador() {
        // Posiciones ganadoras horizontales
        if (
            (contenedor[0] === jugador_actual && contenedor[1] === jugador_actual && contenedor[2] === jugador_actual) ||
            (contenedor[3] === jugador_actual && contenedor[4] === jugador_actual && contenedor[5] === jugador_actual) ||
            (contenedor[6] === jugador_actual && contenedor[7] === jugador_actual && contenedor[8] === jugador_actual)
        ) {
            return true;
        }

        // Posiciones ganadoras verticales
        if (
            (contenedor[0] === jugador_actual && contenedor[3] === jugador_actual && contenedor[6] === jugador_actual) ||
            (contenedor[1] === jugador_actual && contenedor[4] === jugador_actual && contenedor[7] === jugador_actual) ||
            (contenedor[2] === jugador_actual && contenedor[5] === jugador_actual && contenedor[8] === jugador_actual)
        ) {
            return true;
        }

        // Posiciones ganadoras diagonales
        if (
            (contenedor[0] === jugador_actual && contenedor[4] === jugador_actual && contenedor[8] === jugador_actual) ||
            (contenedor[2] === jugador_actual && contenedor[4] === jugador_actual && contenedor[6] === jugador_actual)
        ) {
            return true;
        }
        return false;
    }

    // Función para cambiar de jugador
    function cambio_jugador() {
        jugador_actual = jugador_actual === 'X' ? 'O' : 'X';
    }

    // Función para reiniciar el juego
    function reiniciar() {
        contenedor = ['', '', '', '', '', '', '', '', ''];
        jugador_actual = 'X';
        fin_juego = false;
        actualizar_tablero();
    }

    cells.forEach((celda, index) => {
        celda.addEventListener('click', () => {
            // Si el juego ya ha terminado o la celda ya ha sido marcada, no hacer nada
            if (fin_juego || contenedor[index]) {
                return;
            }

            // Marcar la celda con el símbolo del jugador actual
            contenedor[index] = jugador_actual;
            actualizar_tablero();

            // Comprobar si alguien ha ganado
            if (Comprobar_ganador()) {
                alert(`¡${jugador_actual} ha ganado!`);
                fin_juego = true;
                return;
            }

            // Si no hay ganador y todas las celdas están marcadas, el juego ha terminado en empate
            if (!contenedor.includes('')) {
                alert('¡Empate!');
                fin_juego = true;
                return;
            }

            // Cambiar de jugador
            cambio_jugador();
        });
    });

    // Asignar evento al botón de reinicio
    const boton_reinicio = document.getElementById("bt1");
    boton_reinicio.addEventListener('click', reiniciar);
});




