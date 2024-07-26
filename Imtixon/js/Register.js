document.addEventListener('DOMContentLoaded', () => {
    const $registerForm = document.querySelector("#register-form");

    const handleUserRegister = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = {
            name: name,
            email: email,
            password: password
        };

        console.log(name);
        console.log(user);

        fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        
            window.location.href = '/pages/Login.html';
        })
        .catch(error => console.error('Error:', error));
    };

    $registerForm.addEventListener("submit", handleUserRegister);
});