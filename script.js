let passwordLength = 8
const passwordRangeInputElement = document.getElementById("password-range-input")
const passwordRangeValueElement = document.getElementById("pass-range-value")

const addUpperCase = () => {
    let checkbox = document.getElementById('uppercase');
    if (checkbox.checked) {
        console.log("Checked")
        return true
    }
    return false
}

const addNumbers = () => {
    let checkbox = document.getElementById('numbers');
    if (checkbox.checked) {
        return true
    }
    return false
}

const addSymbols = () => {
    let checkbox = document.getElementById('symbols');
    if (checkbox.checked) {
        return true
    }
    return false
}

const generatePassword = (passwordLength) => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '`~!@#$%^&*()_-+='
    
    let passwordCharacter = lowerCaseLetters
    
    if (addUpperCase()) {
        passwordCharacter += upperCaseLetters
    }
    if (addNumbers()) {
        passwordCharacter += numbers
    }
    if (addSymbols()) {
        passwordCharacter += symbols
    }

    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const charIndex = Math.floor(Math.random() * passwordCharacter.length)        
        password += passwordCharacter[charIndex]
    }
    return password
}

passwordRangeInputElement.addEventListener('input', (e) => {
    passwordLength = +e.target.value
    passwordRangeValueElement.innerText = passwordLength
})

const showPassword = (event) => {
    document.getElementById('password').innerHTML = `<h2>${generatePassword(passwordLength)}</h2>`
    document.getElementById('password').style.textAlign = "center"
    document.getElementById('password').style.fontSize = "2rem"
}