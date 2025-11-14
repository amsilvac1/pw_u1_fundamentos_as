function guardar() {
  validarCampos()
}
function validarCampos() {
  let nombre = document.getElementById('id_nombre').value
  let apellido = document.getElementById('id_apellido').value
  let fecha = document.getElementById('id_fecha').value
  let email = document.getElementById('id_email').value
  let password = document.getElementById('id_password').value

  limpiarMensajes()
  if (nombre === '') {
    mostrarMensaje('Nombre es obligatorio')
    mostrarAsterisco('id_error_nombre')
    return
  }
  if (!validarNombre(nombre)) {
    mostrarMensaje('Nombre debe contener solo letras')
    mostrarAsterisco('id_error_nombre')
    return
  }
  if (apellido === '') {
    mostrarMensaje('Apellido es obligatorio')
    mostrarAsterisco('id_error_apellido')
    return
  }
  if (!validarApellido(apellido)) {
    mostrarMensaje('Apellido debe contener solo letras')
    mostrarAsterisco('id_error_apellido')
    return
  }
  if (fecha === '') {
    mostrarMensaje('Fecha es obligatoria')
    mostrarAsterisco('id_error_fecha')
    return
  }
  if (email === '') {
    mostrarMensaje('Email es obligatorio')
    mostrarAsterisco('id_error_email')
    return
  }
  if (!validarEmail(email)) {
    console.log('validarEmail', email)

    mostrarMensaje('Email no es válido')
    mostrarAsterisco('id_error_email')
    return
  }
  if (password === '') {
    mostrarMensaje('Password es obligatorio')
    mostrarAsterisco('id_error_password')
    return
  }
  if (!validarPassword(password)) {
    mostrarMensaje(
      'Password debe tener 8-16 caracteres, mayúsculas, minúsculas y números'
    )
    mostrarAsterisco('id_error_password')
    return
  }
}
function mostrarMensaje(msg) {
  let mensaje = document.getElementById('id_msg_error')
  mensaje.innerText = msg
  mensaje.style.display = 'block'
}
function mostrarAsterisco(id) {
  document.getElementById(id).innerText = '*'
}
function limpiarMensajes() {
  document.getElementById('id_msg_error').style.display = 'none'

  document.querySelectorAll('.error_asterisco').forEach(function (elem) {
    elem.innerText = ''
  })
}
function validarEmail(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return patron.test(email)
}

function validarNombre(nombre) {
  const patron = /^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/
  return patron.test(nombre)
}

function validarApellido(apellido) {
  const patron = /^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/
  return patron.test(apellido)
}

function validarPassword(password) {
  const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/
  return patron.test(password)
}
