let createAccountPopup=document.querySelector('.create-account-popup')
let createAccountButton=document.querySelector('.create-account-btn')
let createAccountForm =document.querySelector('.create-account-form')

createAccountButton.addEventListener('click', ()=>{
    createAccountPopup.classList.remove('hide')
})

let nickNameInput=document.querySelector('.nick-name')
let passwordInput=document.querySelector('.password-input')
let confirmPasswordInput=document.querySelector('.confirm-password')
let emailInput=document.querySelector('.email-input')

let userDB=[{nickname:"alan", password:"smith"}]
let loginForm=document.querySelector('#login')
let usernameLogin=document.querySelector('.username-login')
let passwordLogin=document.querySelector('.password-login')
let userNameText=document.querySelector('.lobby-user-name')
let passwordIncorrect=document.querySelector('.password-incorrect')





class User {
    constructor(nickname, password, email) {
        this.nickname = nickname;
        this.password = password;
        this.email = email;
    }
}

let userAuthentication= (e)=>{
    e.preventDefault()
    let username=usernameLogin.value
    let password=passwordLogin.value
    for (x=0; x<=userDB.length; x++) {
        if (username===userDB[x].username&&password===userDB[x].password){
            console.log("logged in")
        }
    }
}

console.log(userDB)

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let username=usernameLogin.value
    let password=passwordLogin.value
    for (x=0; x<userDB.length; x++) {
        if (username===userDB[x].nickname&&password===userDB[x].password){
            userLogin()
        } else {
            passwordIncorrect.classList.remove('hide')

        }
    }
}
)

let userLogin=()=>{
    window.location.href = "./lobby.html";
}

