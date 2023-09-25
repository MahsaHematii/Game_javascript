const Minimom = 1;
const Maximom = 100;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (Maximom - Minimom + 1) - Minimom);
};

const getPlayerNumber = () => {
  const choise = prompt(`please choise ${Minimom} and ${Maximom} :`);
  return parseInt(choise);
};

const checkIfPlayerWon = (chosenNumber, playerChoise, attempt) => {
  if (isGameEnded(playerChoise, chosenNumber)) {
    alert(`you Won...thats good🍑 and yourcounter :${attempt}`);
  } else if (chosenNumber > playerChoise) {
    alert("bia balatar ↗️");
  } else if (chosenNumber < playerChoise) {
    alert("bia paean⬇️");
  }
};

const isPlayerChoicsValid = (playerChoise) => {
  return (
    isNaN(playerChoise) || playerChoise > Maximom || playerChoise < Minimom
  );
};

const isGameEnded = (playerChoise, chosenNumber) => {
  return chosenNumber === playerChoise;
};

const startGame = () => {
  const chosenNumber = generateRandomNumber();
  let attempt = 0;

  let playerChoise;

  while (!isGameEnded(playerChoise, chosenNumber)) {
    const playerChoise = getPlayerNumber();

    if (isPlayerChoicsValid(playerChoise)) {
      alert("please restart again ... you are mistak❌");
    }
    attempt++;

    checkIfPlayerWon(chosenNumber, playerChoise, attempt);
  }
};
const button = document.querySelector("#Guess");

button.addEventListener("click", startGame);
