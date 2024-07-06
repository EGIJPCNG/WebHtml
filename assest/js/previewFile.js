// Selecciona todos los enlaces con la clase 'preview-link'
document.querySelectorAll('.preview-link').forEach(link => {
    // Agrega un evento 'mouseover' a cada enlace
    link.addEventListener('mouseover', function() {
        // Cuando el mouse se mueve sobre el enlace, cambia la URL del iframe 'preview-frame' al href del enlace
        document.getElementById('preview-frame').src = this.href;
        // Muestra el iframe 'preview-frame'
        document.getElementById('preview-frame').style.display = 'block';
    });

    // Agrega un evento 'mouseout' a cada enlace
    link.addEventListener('mouseout', function() {
        // Cuando el mouse se mueve fuera del enlace, oculta el iframe 'preview-frame'
        document.getElementById('preview-frame').style.display = 'none';
    });
});
