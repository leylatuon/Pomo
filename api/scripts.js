const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      // 3000 -> 3001
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert("Logged in successfully!");

      localStorage.setItem("jwt-token", data.token);
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Error logging in. Please try again later.");
  }
});
