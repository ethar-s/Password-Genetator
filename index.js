const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword() {
    let password = ""
    for (let i = 0; i < 16; i++) {
        let randomLetter = characters[Math.floor(Math.random() * characters.length)]
        password += randomLetter
    }
    return password
}


function typePassword() {
    document.getElementById("pass1").textContent = generatePassword()
    document.getElementById("pass2").textContent = generatePassword()
}


