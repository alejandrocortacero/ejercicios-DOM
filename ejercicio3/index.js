//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
countries.forEach((countrie) => {
  const li = document.createElement('li')
  li.textContent = countrie
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminarClase = document.querySelector('.fn-remove-me')
eliminarClase.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHere = document.querySelector('div[data-function="printHere"]')
const ul2 = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ul2.appendChild(li)
})
printHere.appendChild(ul2)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const contenedor = document.body
countries2.forEach((country) => {
  const crearDiv = document.createElement('div')
  const crearH4 = document.createElement('h4')
  const crearImg = document.createElement('img')
  const crearBotonDel = document.createElement('button')

  crearH4.textContent = country.title
  crearBotonDel.textContent = 'Eliminar'
  crearImg.src = country.imgUrl
  crearImg.alt = country.title

  crearBotonDel.addEventListener('click', () => {
    crearDiv.remove()
  })

  crearDiv.appendChild(crearH4)
  crearDiv.appendChild(crearImg)
  crearDiv.appendChild(crearBotonDel)
  contenedor.appendChild(crearDiv)
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const botonEliminar = document.createElement('button')
botonEliminar.textContent = 'Elimina el último elemento'
document.body.appendChild(botonEliminar)
const divs = contenedor.querySelectorAll('div')
botonEliminar.addEventListener('click', () => {
  if (divs.length > 0) {
    const ultimoDiv = divs[divs.length - 1]
    ultimoDiv.remove()
  }
})

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
// ESTE EJERCICIO ESTA INCLUIDO DENTRO DEL 1.4 PARA NO CREAR ERRORES
