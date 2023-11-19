document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const buttons = document.getElementById('buttons');
    const clearButton = document.getElementById('clear');
  
    buttons.addEventListener('click', function (event) {
      if (event.target.matches('button')) {
        const buttonText = event.target.textContent;
  
        if (buttonText === '=') {
          // Realizar cálculos y mostrar el resultado en la pantalla
          try {
            screen.textContent = eval(screen.textContent);
          } catch (error) {
            screen.textContent = 'Error';
          }
        } else if (buttonText === 'C') {
          // Borrar el contenido de la pantalla
          screen.textContent = '';
        } else {
          // Mostrar los números y operadores en la pantalla
          screen.textContent += buttonText;
        }
      }
    });
  
    clearButton.addEventListener('click', function () {
      // Borrar el contenido de la pantalla al hacer clic en el botón "C"
      screen.textContent = '';
    });
  });
  