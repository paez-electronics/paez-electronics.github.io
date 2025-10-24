// Contenido de js/form-cotizar.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizacionForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const data = new FormData(form);
            
            // EL FORMULARIO UTILIZA LA URL ABSOLUTA DEL ATRIBUTO 'action'
            fetch(form.action, { 
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // La única ruta relativa está aquí:
                    window.location.href = "agradecimiento.html"; 
                } else {
                    response.json().then(data => {
                        alert(data.error || 'Oops! Hubo un problema al enviar.');
                    })
                }
            })
            .catch(error => {
                alert('Oops! Hubo un error de conexión. Intente más tarde.');
            });
        });
    }
});