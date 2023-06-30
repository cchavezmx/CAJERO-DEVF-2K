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
]
// form en el input
const cuentaAttempt = "000123"
const passwordAttempt = "1234"

function login(cuenta, password) {
    for (let i = 0; i < usuarios.length; i++) {
    const currentUser = usuarios[i]
    const currentCuenta = currentUser.cuenta
    const currentPassword = currentUser.password
    
    if (currentCuenta === cuenta && currentPassword === password){
      console.log(`Esta cuenta le pertenece a: ${currentUser.name}`)
      return 
    } else {    
      console.log("Error en el login, revisa tus credenciales")
    }    
  }
}

login(cuentaAttempt, passwordAttempt)