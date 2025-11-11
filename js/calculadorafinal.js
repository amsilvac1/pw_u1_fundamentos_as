let display
let numeroActual = ''
let numeroAnterior = null
let operacion = null

// Asegura que `display` exista después de que el DOM esté listo.
document.addEventListener('DOMContentLoaded', () => {
  display = document.getElementById('display')
})

// Añade números
function agregarNumero(num) {
  numeroActual += num.toString()
  mostrar(numeroActual)
}

// Muestra en pantalla
function mostrar(valor) {
  display.innerText = valor
}

// Limpia todo
function limpiarDisplay() {
  numeroActual = ''
  numeroAnterior = null
  operacion = null
  mostrar(0)
}

// Borra el último dígito
function borrarUltimo() {
  numeroActual = numeroActual.slice(0, -1)
  mostrar(numeroActual || 0)
}

// Selecciona la operación (+, -, *, /, %)
function seleccionarOperacion(op) {
  if (numeroActual === '' && numeroAnterior === null) return

  // Si el usuario pulsa una operación sin haber introducido un nuevo número
  // pero ya existe un número anterior, simplemente cambiamos la operación
  if (numeroActual === '' && numeroAnterior !== null) {
    operacion = op
    mostrar(numeroAnterior + ' ' + operacion)
    return
  }

  // Si existe un número anterior y también uno actual, calculamos primero
  if (numeroAnterior !== null && numeroActual !== '') {
    const actual = parseFloat(numeroActual)
    const resultado = operar(numeroAnterior, actual, operacion)

    // Si hay error (p. ej. división por 0), mostramos y reseteamos
    if (resultado === 'Error') {
      mostrar('Error')
      numeroAnterior = null
      numeroActual = ''
      operacion = null
      return
    }
    numeroAnterior = resultado
    mostrar(numeroAnterior + ' ' + op)
    operacion = op
    numeroActual = ''
    return
  }

  // No hay número anterior pero sí número actual
  numeroAnterior = parseFloat(numeroActual)
  operacion = op
  numeroActual = ''
  mostrar(numeroAnterior + ' ' + operacion)
}

// Función auxiliar que realiza la operación entre dos números
function operar(a, b, op) {
  if (op === null) return b
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b !== 0 ? a / b : 'Error'
    case '%':
      return (a * b) / 100
    default:
      return b
  }
}

// Calcula el resultado final
function calcularResultado() {
  if (operacion === null || numeroActual === '') return

  let actual = parseFloat(numeroActual)
  // Reutilizar la función operar para evitar duplicación de lógica
  const resultado = operar(numeroAnterior, actual, operacion)

  if (resultado === 'Error') {
    mostrar('Error')
    numeroAnterior = null
    numeroActual = ''
    operacion = null
    return
  }

  mostrar(resultado)
  numeroAnterior = resultado
  numeroActual = ''
  operacion = null
}

// Añadir punto decimal
function agregarPunto() {
  if (!numeroActual.includes('.')) {
    numeroActual += '.'
    mostrar(numeroActual)
  }
}
