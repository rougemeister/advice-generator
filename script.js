const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");
const button = document.querySelector("#dice-icon");

const getAdvice = async () => {
  try {
  const res = await axios.get("https://api.adviceslip.com/advice");
  const id = res.data.slip.id;
  const advice = res.data.slip.advice;
  adviceText.innerHTML = `"${advice}"`;
  adviceId.innerHTML = `Advice #${id}`;
}

  catch (err) {
    adviceText.textContent = "NO ADVICE AVAILABLE!";
  }
};

button.addEventListener("click", getAdvice);

