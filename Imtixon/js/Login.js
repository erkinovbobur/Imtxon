const $LoginForm = document.getElementById("Login-form");

const handleUserLogin= (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {
        email: email,
        password: password
    };

    console.log(name);
    console.log(user);

    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(` ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        localStorage.setItem("token",data.data.token)
      
        window.location.href = '/';
    })
    .catch(error => console.error('Error:', error));
};

$LoginForm.addEventListener("submit", handleUserLogin);