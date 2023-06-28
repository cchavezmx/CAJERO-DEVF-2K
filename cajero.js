//1.- crear las variables de los elementos que estan involucrados

const form = document.querySelector("#cajero")
const retiroTag = document.querySelector("#retiro")

// variables globables
let cantidadRetirada = 0

// es un evento que se ejecuta cuando se termina de cargar el DOM
// hidrata el estado
addEventListener('DOMContentLoaded', function(){
  const valueStorage = localStorage.getItem('cantidadRetirada')  
  cantidadRetirada = Number(valueStorage)
  retiroTag.textContent = cantidadRetirada
})

form.addEventListener('submit', function(e){
  e.preventDefault()  
  // FormData
  const formData = new FormData(e.target)
  const retiro = formData.get("cantidadRetiro")

  cantidadRetirada = cantidadRetirada + Number(retiro)
  // guarde la cantidad en mi BD
  localStorage.setItem('cantidadRetirada', JSON.stringify(cantidadRetirada))
  // renderizas o dibujar
  retiroTag.textContent = cantidadRetirada
})