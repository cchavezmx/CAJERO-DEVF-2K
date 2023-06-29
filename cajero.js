//1.- crear las variables de los elementos que estan involucrados

const form = document.querySelector("#cajero")
const retiroTag = document.querySelector("#retiro")
const notification = document.querySelector("#notification")
const closeNotification = document.querySelector("#close_notification")
const retiroButton = document.querySelector("#retiro-button")

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
  // este debe ser de la propiedad nombre del input
  const retiro = formData.get("cantidadRetiro")

  cantidadRetirada = cantidadRetirada + Number(retiro)
  // guarde la cantidad en mi BD
  localStorage.setItem('cantidadRetirada', JSON.stringify(cantidadRetirada))
  // renderizas o dibujar
  retiroTag.textContent = cantidadRetirada
  
  form.reset()
})


// PRINCIPIOS SOLID //
retiroButton.addEventListener('click', () => {
  const formData = new FormData(form)
  // este debe ser de la propiedad nombre del input
  const retiro = formData.get("cantidadRetiro")

  if (Number(retiro) > cantidadRetirada) {    
    notification.classList.toggle("hidden")
    const span = document.createElement("span")
    // span.textContent = "Fondos insuficientes"
    span.innerHTML = "<h1 class='h1-font'>Fondos <strong>insuficientes</strong></h1>"
    notification.appendChild(span)
    return
  }

  cantidadRetirada = cantidadRetirada - Number(retiro)
  // guarde la cantidad en mi BD
  localStorage.setItem('cantidadRetirada', JSON.stringify(cantidadRetirada))
  // renderizas o dibujar
  retiroTag.textContent = cantidadRetirada
  form.reset()
})

closeNotification.addEventListener('click', function(){
  // notification.classList.toggle("hidden")  
  const listaClases = notification.classList

  for (clase of listaClases){
    console.log(clase)
    if (clase === 'hidden'){      
      notification.classList.remove('hidden')
      return 
    } else {      
      notification.classList.add('hidden')
      return
    }
  }
})