// Validación básica de palabras (máx. 500)
document.getElementById('commentForm').addEventListener('submit', function(e) {
  const textarea = document.getElementById('comments');
  const words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  if (words > 500) {
    e.preventDefault();
    alert('Por favor, limita tu comentario a 500 palabras.');
    return false;
  }

  // Advertencia: mailto no envía datos al servidor; es solo para navegadores con cliente de correo
  alert('Tu mensaje se abrirá en tu cliente de correo. Asegúrate de enviarlo desde allí.');
});
