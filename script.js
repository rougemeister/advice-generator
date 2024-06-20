const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");
const button = document.querySelector("#dice-icon");
const animationEl = document.querySelector('.animation')
console.log(animationEl)

const getAdvice = async () => {
  try {
  const res = await axios.get("https://api.adviceslip.com/advice");
  const id = res.data.slip.id;
  const advice = res.data.slip.advice;
  adviceText.innerText = `"${advice}"`;
  adviceId.innerText = `Advice #${id}`;
  adviceText.classList.remove('red')
}

  catch (e) {
    adviceText.textContent = "";
    animationEl.style.display = 'flex'
    setTimeout(()=>{
        adviceText.classList.add('red')
        adviceText.textContent = 'Error retrieving data! Retry by clicking the dice button'
        animationEl.style.display = 'none'
    }, 5000)
  } 
};

button.addEventListener("click", getAdvice);

