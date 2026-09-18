document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const successMusic = document.getElementById('success-music'); // Nuevo reproductor
  const btnSubmit = document.getElementById('btn-submit');
  const btnRetry = document.getElementById('btn-retry');
  const inputName = document.getElementById('name-input');
  const pressBtn = document.getElementById('press-btn');

  const pageStart = document.getElementById('page-start');
  const pageError = document.getElementById('page-error');
  const pageSuccess = document.getElementById('page-success'); // Nueva vista

  // Reproducir música tras interacción
  function playAudio() {
    if (music && music.paused) {
      music.play().catch(err => console.log("Audio play blocked:", err));
    }
  }

  // Evento botón "ir"
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const val = inputName ? inputName.value.trim().toLowerCase() : '';

      // Si no escribió nada, frena acá y no cambia de pantalla
      if (val === '') {
        if (inputName) inputName.focus();
        return;
      }

      if (val === "luan") {
        // Detener música base si está sonando
        if (music) music.pause();
        
        // Muestra la página oficial (Página 3)
        pageStart.classList.remove('active');
        pageSuccess.classList.add('active');
        
        // Reproducir música romántica automáticamente en loop
        if (successMusic) {
          successMusic.play().catch(err => console.log("Success audio blocked:", err));
        }
      } else {
        // Reproducir música base si va a error
        playAudio();
        
        // Muestra la pantalla de error
        pageStart.classList.remove('active');
        pageError.classList.add('active');
      }
    });
  }

  // Evento botón de reintentar (vuelve a la vista 1)
  if (btnRetry) {
    btnRetry.addEventListener('click', () => {
      if (inputName) inputName.value = '';
      pageError.classList.remove('active');
      pageStart.classList.add('active');
    });
  }

  // Iniciar audio si presionan el botón PRESS (solo Página 1)
  if (pressBtn) {
    pressBtn.addEventListener('click', () => {
      playAudio();
    });
  }
});

function abrirPicrew() {
  const url = 'https://picrew.me/en/image_maker/2834274';
  const width = 460;
  const height = 750;
  
  // Calcula la posición para centrar la ventana emergente en la pantalla
  const left = (window.innerWidth / 2) - (width / 2);
  const top = (window.innerHeight / 2) - (height / 2);

  window.open(
    url,
    'PicrewApp',
    `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );
}