const text = document.getElementById('text')
const textArr = text.innerText.split('')

const newEl = document.createElement(h1)
newEl.innerHTML = `
    ${textArr.map(letter =>{
        `<span> ${letter}</span>`
    `)}`};

document.body.appendChild(newEl);