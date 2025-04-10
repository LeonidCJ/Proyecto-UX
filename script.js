document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
  
    if (!username || !password) {
      errorMessage.textContent = 'Todos los campos son obligatorios.';
      return;
    }
  
    // Aquí podrías añadir la lógica de autenticación real.
    // Por ejemplo, enviar datos a un servidor con fetch().
  
    if (username === 'admin' && password === '1234') {
      errorMessage.textContent = '';
      alert('¡Bienvenido!');
      // Redireccionar o cargar contenido
    } else {
      errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
  });