const home = document.getElementById('home');

(() => {
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);



    const h1 = document.createElement('h1');
    h1.classList.add('home__title');
    h1.textContent = `Welcome ${payload.Name} ${payload.LastName}`;
    home.appendChild(h1);
})();