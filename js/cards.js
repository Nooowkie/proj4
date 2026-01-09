const cardsContainer = document.querySelector("#card-container");

fetch("../data/characters.json")
.then(response => response.json())
  .then(dinosaurs => {
    dinosaurs.forEach(dino => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${dino.image}" alt="${dino.name}">
        <h2>${dino.name}</h2>
        <p><strong>Период:</strong> ${dino.period}</p>
        <p><strong>Тип питания:</strong> ${dino.diet}</p>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Ошибка загрузки JSON:", error);
  });