const dice = document.getElementById("dice");
const label = document.querySelector(".advice_id");
const quote = document.getElementById("quote");

function generateAdvice() {
    label.innerText = `Advice ...`
    quote.innerText = `...`

    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        const advice = data.slip.advice;
        const id = data.slip.id;
        label.innerText = `Advice #${id}`
        quote.innerText = `${advice}`
    })
}

generateAdvice();

dice.addEventListener('click', () => generateAdvice());
