
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", login);

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "" || password == "") {
        Toastify({
            text: "Please fill in all fields",
            duration: 3000,
            gravity: "top",
            style: {
                background: "#dc3545",
            },
        }).showToast();
        return;
    }

    const mutation = `
        mutation {
            loginAppUser_TB(userName: "${username}", password: "${password}") {
            token
        }
        }
            `

    const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: mutation
        })
    });
    const data = await response.json();

    try {
        localStorage.setItem("token", data.data.loginAppUser_TB.token);

        Toastify({
            text: "Login successful",
            duration: 3000,
            gravity: "top",
            style: {
                background: "#28a745",
            },
        }).showToast();

        setTimeout(() => {
            window.location.href = "http://localhost:4000/pages/home.html";
        }, 2500);
    } catch (error) {
        Toastify({
            text: "Invalid username or password",
            duration: 3000,
            gravity: "top",
            style: {
                background: "#dc3545",
            },
        }).showToast();
    }
}
