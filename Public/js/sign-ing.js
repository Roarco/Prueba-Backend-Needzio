const btnSign = document.getElementById('btn-sign');

btnSign.addEventListener('click', sign);

async function sign() {
    const lastName = document.getElementById('last-name').value;
    const name = document.getElementById('name').value;
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const isMilitar = document.getElementById('is-militar').value;
    const isTemporal = document.getElementById('is-temporal').value;

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (lastName == '' || name == '' || userName == '' || email == '' || password == '' || isMilitar == '' || isTemporal == '') {
        Toastify({
            text: 'Please fill in all fields',
            duration: 2000,
            gravity: 'top',
            style: {
                background: '#dc3545',
            },
        }).showToast();
        return;
    }else if (!regex.test(email)) {
        Toastify({
            text: 'Invalid email',
            duration: 2000,
            gravity: 'top',
            style: {
                background: '#dc3545',
            },
        }).showToast();
        return;
    }else if (password.length < 8) {
        Toastify({
            text: 'Password must be at least 8 characters',
            duration: 2000,
            gravity: 'top',
            style: {
                background: '#dc3545',
            },
        }).showToast();
        return;
    }

    const mutation = `
    mutation {
        createAppUser_TB(LastName: "${lastName}", Name: "${name}", isMilitar: ${isMilitar}, isTemporal: ${isTemporal}, userName: "${userName}", password: "${password}", email: "${email}") {
            id
        }
    }
    `;

    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: mutation,
        }),
    });
    const data = await response.json();

    try {
        Toastify({
            text: 'Sign successful',
            duration: 2000,
            gravity: 'top',
            style: {
                background: '#28a745',
            },
        }).showToast();

        setTimeout(() => {
            window.location.href = 'http://localhost:4000';
        }, 2500);
    } catch (error) {
        Tosatify({
            text: 'Error creating user',
            duration: 2000,
            gravity: 'top',
            style: {
                background: '#dc3545',
            },
        }).showToast();
    }

}