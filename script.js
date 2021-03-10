const elJoke = document.getElementById('joke');
const eljokeBtn = document.getElementById('jokeBtn');


eljokeBtn.addEventListener('click', generateJoke);


generateJoke();


async function generateJoke() {
    const config = {
        headers: {
            accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    elJoke.innerHTML = data.joke;
}