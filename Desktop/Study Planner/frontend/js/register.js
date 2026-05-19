
const registerForm = document.getElementById("registerForm");

const message = document.getElementById("message");


registerForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const username = document.getElementById("username").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if(response.ok){

      message.innerText = "Registration successful";

      window.location.href = "login.html";

    } else {

      message.innerText = data.message;

    }

  } catch(error){

    message.innerText = "Server error";

  }

});