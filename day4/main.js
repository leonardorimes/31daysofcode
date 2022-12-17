const password = document.getElementById('password');
const background = document.getElementById('background');
console.log(background)

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length;
    console.log(blurValue)
    background.style.filter = `blur(${blurValue}px)`
})