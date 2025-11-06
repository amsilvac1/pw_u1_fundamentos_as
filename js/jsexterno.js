function cambiarColor(idElemento, color) {
  document.getElementById(idElemento).style.backgroundColor = color
}
function agregarElemento(idElementoPadre, html) {
  document.getElementById(idElementoPadre).innerHTML += html
}
function eliminarElemento(idElemento) {
  document.getElementById(idElemento).remove()
}
function ocultarElemento(idElemento) {
  document.getElementById(idElemento).style.display = 'none'
}
function mostrarElemento(idElemento) {
  document.getElementById(idElemento).style.display = 'block'
}
function evaluarOperacion(tipo) {
  let num1 = parseFloat(document.getElementById('id_n1').value)
  let num2 = parseFloat(document.getElementById('id_n2').value)
  let resultado = 0
  if (tipo === '+') {
    resultado = sumar(num1, num2)
  }

  if (tipo === '-') {
    resultado = restar(num1, num2)
  }
  if (tipo === '*') {
    resultado = multiplicar(num1, num2)
  }
  if (tipo === '/') {
    resultado = dividir(num1, num2)
  }

  document.getElementById('id_resultado').innerText = resultado
}
function sumar(num1, num2) {
  return num1 + num2
}

function restar(num1, num2) {
  return num1 - num2
}
function multiplicar(num1, num2) {
  return num1 * num2
}
function dividir(num1, num2) {
  if (num2 === 0) {
    return 'Error: División por cero'
  }
  return num1 / num2
}

function fundamentosJS() {
  /*3 Tipos de variables*/
  var nombre = 'Angelo' //antigua, ya es considerada obsoleta
  let apellido = 'Silva' //variable cambiante
  let apellodo2 = 15
  apellido2 = 'Cajamarca'
  let arreglo = [1, 2, 3, 4, 5, 6]
  let diasSemana = ['Lunes', 'Martes', '...']
  const IVA = 12.8 //constante, valor fijo
  console.log('Fundamentos de JS')
  console.log(nombre)
  console.log(IVA)
  console.log(arreglo)

  //Arreglos
  const arreglosDiasSemana = ['Lunes', 'Martes', 'Miércoles']
  arreglosDiasSemana.push('Jueves') //agregar elemento al final
  console.log(arreglosDiasSemana)
  arreglosDiasSemana.unshift('Dias') //agregar elemento al inicio
  console.log(arreglosDiasSemana)
  console.log(arreglosDiasSemana[0])
  console.log('Mensaje de nulos, undergined y vacio')
  arreglosDiasSemana.push(null)
  arreglosDiasSemana.push('')
  console.log(arreglosDiasSemana[5])
  console.log(arreglosDiasSemana[6])
  console.log(arreglosDiasSemana[7])

  const numerosPares = [2, 4, 6, 8]
  const numerosImpares = [1, 3, 5, 7, 9]
  const numerosTotales = numerosImpares.concat(numerosPares)
  console.log(numerosTotales)

  /*Sentencias de control */
  let edad = 19
  if (edad >= 18) {
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad')
  }

  let dia = 'Lunes'
  switch (dia) {
    case 'Lunes':
      console.log('Es lunes')
      break
    case 'martes':
      console.log('Es martes')
      break

    default:
      console.log('No es ninguno de eso días')
  }
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }

  const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja']

  for (let fruta of frutas) {
    console.log(fruta)
  }

  /*Manejo de objetos*/
  const profesor = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito',
  }
  console.log(profesor)
  console.log(profesor.nombre)
  profesor.apellido = 'Teran'
  console.log(profesor)

  if (profesor.ciudad === 'Quito') {
    console.log('Es Quiteño')
  }

  if (profesor.edad !== 36) {
    console.log('Es diferente de 36')
  } else {
    console.log('Es 36')
  }

  for (let clave in profesor) {
    // para objetos se utiliza in, para arreglos of
    console.log(clave)
    console.log(profesor[clave])
  }
}
