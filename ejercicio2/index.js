// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
document.body.insertAdjacentHTML('beforeend', '<div></div>')

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
document.body.insertAdjacentHTML('beforeend', '<div><p></p></div>')

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevoDiv = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const nuevoP = document.createElement('p')
  nuevoDiv.appendChild(nuevoP)
}
document.body.appendChild(nuevoDiv)

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
document.body.insertAdjacentHTML('beforeend', '<p>Soy dinámico!</p>')

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector('h2.fn-insert-here').textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminarElementos = document.querySelectorAll('.fn-remove-me')
eliminarElementos.forEach((elemento) => {
  elemento.remove()
})

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
const primerDiv = document.querySelector('div')
primerDiv.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>')

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDiv = document.querySelectorAll('.fn-insert-here')
allDiv.forEach((div) => {
  const voyDentro = document.createElement('p')
  voyDentro.textContent = 'Voy dentro!'
  div.appendChild(voyDentro)
})
