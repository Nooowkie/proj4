// проверка gmail
document.getElementById("gmail_button").addEventListener("click", function () {
  const gmailInput = document.getElementById("gmail_input").value.trim();
  const resultSpan = document.getElementById("gmail_result");

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (gmailRegex.test(gmailInput)) {
    resultSpan.textContent = "Валидный Gmail!";
    resultSpan.style.color = "lime";
  } else {
    resultSpan.textContent = "Невалидный адрес. Используйте @gmail.com";
    resultSpan.style.color = "red";
  }
});

//Движение блока
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
  if (positionX < offsetWidth && positionY === 0) {
    positionX++;
  } else if (positionX === offsetWidth && positionY < offsetHeight) {
    positionY++;
  } else if (positionY === offsetHeight && positionX > 0) {
    positionX--;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
  } else {
    return;
  }
  
  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;

  requestAnimationFrame(moveBlock);
};

moveBlock();