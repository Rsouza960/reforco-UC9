let email = document.getElementById("email")

function enviarEmail(event){
    let emailDigitado = email.value
    event.preventDefault()
    console.log(emailDigitado)
    
}