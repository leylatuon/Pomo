document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {

                localStorage.setItem('accessToken', data.token);
                alert('Login successful!');
                    //redirect
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
