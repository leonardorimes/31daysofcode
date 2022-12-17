const jokeEl = document.getElementById('joke')
const get__joke = document.getElementById('get__joke')

get__joke.addEventListener('click', generateJoke)

async function generateJoke(){
    // call the icanhazz api
    const jokeResult = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'

        }
    })

    const joke = await jokeResult.json();

    jokeEl.innerHTML = joke.joke;
}