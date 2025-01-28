function generatePassword() {
    const length = document.getElementById("length").value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").textContent = password;
    document.getElementById("copy-button").style.display = "inline-block";
    
    evaluatePasswordStrength(length);
}

function copyPassword() {
    const passwordText = document.getElementById("password").textContent;
    
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("✅ Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
}

function evaluatePasswordStrength(length) {
    const strengthText = document.getElementById("strength-text");

    if (length < 10) {
        strengthText.textContent = "⚠️ Poor Password";
        strengthText.style.color = "red";
    } else if (length < 12) {
        strengthText.textContent = "🟠 Weak Password";
        strengthText.style.color = "orange";
    } else if (length == 12) {
        strengthText.textContent = "🟡 Good Password";
        strengthText.style.color = "yellow";
    } else {
        strengthText.textContent = "🟢 Great Password";
        strengthText.style.color = "green";
    }
}
