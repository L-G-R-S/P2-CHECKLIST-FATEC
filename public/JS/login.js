//variável do ícone de ver senha e esconder senha
let btn = document.querySelector('.fa-eye-slash')
var btnShowPass = document.getElementById('btn-senha')


//Função para ver senha e esconder
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
    btnShowPass.classList.replace('fa-eye-slash', 'fa-eye')
  } else {
    inputSenha.setAttribute('type', 'password')
    btnShowPass.classList.replace('fa-eye', 'fa-eye-slash')
  }
})



//Função para validar login
function entrar() {

  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad) {

      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }

    }
  })

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = "index.html"

    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom

    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))

  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')

    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')

    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }

}