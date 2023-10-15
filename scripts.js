const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            alert('Logged in successfully!');
            // You can save the token in localStorage for example
            localStorage.setItem('jwt-token', data.token);
            // Redirect to the dashboard or main page
            // window.location.href = '/dashboard.html';
        } else {
            alert(data.message);
        }
    } catch (err) {
        alert('Error logging in. Please try again later.');
    }
});
