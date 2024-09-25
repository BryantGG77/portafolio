// Logica extra para verificar las anclas de los proyectos

const enlaces = document.querySelectorAll('.boton-proyectos');

// Recorre cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        // Verifica si el enlace no tiene el atributo "href" o si está vacío
        if (!enlace.hasAttribute('href') || enlace.getAttribute('href') === '' || enlace.getAttribute('href') === '#') {
            event.preventDefault(); // Evita la acción predeterminada
            alert('Este enlace no está disponible en este momento.');
        }
    });
});


// Logica JS para el formulario 

let boton = document.getElementById("boton");

// Validacion de los inputs para habilitar el boton de envio
function verificarCampos() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    boton.disabled = !(nombre && email && asunto && mensaje);
}

document.getElementById("nombre").addEventListener('input', verificarCampos);
document.getElementById("email").addEventListener('input', verificarCampos);
document.getElementById("asunto").addEventListener('input', verificarCampos);
document.getElementById("mensaje").addEventListener('input', verificarCampos);

// Funciones para verificar cada input segun las condiciones

function validarCampo(input, nombreCampo, caracteresMax) {
    if (input === "") {
        document.getElementById("aviso-" + nombreCampo).innerHTML = "Por favor, ingresa tu " + nombreCampo;
    } else if (input.length > caracteresMax) {
        document.getElementById("aviso-" + nombreCampo).innerHTML = `El ${nombreCampo} es demasiado extenso, intenta ingresar menos de ${caracteresMax} caracteres.`;
    } else {
        document.getElementById("aviso-" + nombreCampo).innerHTML = "";
        return true;
    }

}

function validarEmail(email) {
    if (email === "") {
        document.getElementById("aviso-email").innerHTML = "Por favor, ingresa tu correo electrónico";

    } else if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
        document.getElementById("aviso-email").innerHTML = "Por favor, ingresa un correo electrónico valido";
    } else {
        document.getElementById("aviso-email").innerHTML = "";
        return true;
    }
}



boton.addEventListener("click", (event) => {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");

    if (validarCampo(nombre.value, "nombre", 50) && validarEmail(email.value) && validarCampo(asunto.value, "asunto", 50) && validarCampo(mensaje.value, "mensaje", 300)) {
        const avisoEnvio = document.getElementById("aviso-envio");
        avisoEnvio.innerHTML = "Formulario enviado correctamente";
        // Vaciar los campos
        nombre.value = "";
        email.value = "";
        asunto.value = "";
        mensaje.value = "";

        setTimeout(() => {
            avisoEnvio.innerHTML = ""; // Limpia el mensaje
        }, 2000);
    }
});


