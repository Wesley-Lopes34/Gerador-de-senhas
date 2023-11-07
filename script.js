//Criação de botões e o medidor do tamanho da senha
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

//nessa parte eu estou especificando todos os caracteres que é possivel uma senha receber
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

//Função que o slider recebe o valor que for selecionado nele
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//Função que gera a senha, nessa função eu começo com um contador que recebe um caractere aleatorio dentre todos aqueles que eu passei e ele atribui esse valor a outro e vai buscando varios valores até formar uma senha.
function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

   containerPassword.classList.remove("hide");
   password.innerHTML = pass;
   novaSenha = pass;

}

//Função para copiar a senha
function copyPassword(){
    alert("Copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}