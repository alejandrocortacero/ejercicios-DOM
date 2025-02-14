//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btnInformacion = document.querySelector('#btnToClick')
btnInformacion.addEventListener('click', (event) => {
  console.log(event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll('input')
inputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    console.log(event.target.value)
  })
  input.addEventListener('input', (event) => {
    console.log(event.target.value)
  })
})
