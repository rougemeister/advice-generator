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
}

  catch (e) {
    adviceText.textContent = "";
    animationEl.style.display = 'flex'
  } 
};

button.addEventListener("click", getAdvice);

