//rutas protegias, base datos, encriptan, JWT, 
const usuarios = [
  {
    name: "Carlos",
    password: "1234",
    cuenta: "000123",
    saldo: "1200" // 
  },
  {
    name: "Heladio",
    password: "5678",
    cuenta: "000124",
    saldo: "1200" // 
  },
    {
    name: "Carlos",
    password: "1234",
    cuenta: "000123",
    saldo: "1200" // 
  },
]
// form en el input
const cuentaAttempt = "000123"
const passwordAttempt = "1234"

function login(cuenta, password) {
  // metodos de iteracion, map, filter, find, 
 const validUser = usuarios.filter(function(usuario){
   return usuario.cuenta === cuenta && usuario.password === password
 })
   
 console.log({ validUser })
  
  if (validUser.length > 0) {
    console.log(`Esta cuenta le pertenece a: ${validUser[0].name}`)
  } else {
    console.log("El usuario no es valido")
  }
  
}

login(cuentaAttempt, passwordAttempt)