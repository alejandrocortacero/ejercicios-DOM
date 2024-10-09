// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const botonShowme = document.querySelector('.showme')
console.log(botonShowme)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado')
console.log(h1Pillado)

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach((parrafo) => {
  console.log(parrafo)
})

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon')
allPokemon.forEach((pokemon) => {
  console.log(pokemon)
})

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elementos = document.querySelectorAll('[data-function="testMe"]')
elementos.forEach((elemento) => {
  console.log(elemento)
})

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajes = document.querySelectorAll('[data-function="testMe"]')
console.log(personajes[2])
