const game = {
  day: 1,
  running: true
}

const colony = {
  name: "New Horizon",
  population: 4,
  bases: 2,
  centralBases: 1
}

const resources = {
  water: 0,
  oxygen: 0,
  food: 0,
  energy: 0
}

const menu = document.getElementById("menu");
const subtitle = document.getElementById("subtitle");
const title = document.getElementById("title");
const listofitens = document.getElementById("listofitens");

function Game() {
  const confirmButton = document.getElementById("confirmbutton");
  confirmButton.style.display = 'none';
  const start = document.getElementById("start");
  const infobutton = document.getElementById("infobutton");
  start.addEventListener("click", function() {
    subtitle.textContent = "Select difficulty: ";
    menu.innerHTML = `
    <button id = "easy">EASY</button>
    <button id = "medium">MEDIUM</button>
    <button id = "hard">HARD</button>
    <button id = "impossible">IMPOSSIBLE*</button>
    `
    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");
    const impossible = document.getElementById("impossible");
    
    easy.addEventListener("click", function() {
      defineAndShowResources(250, 250, 200);
    });
    medium.addEventListener("click", function() {
      defineAndShowResources(225, 225, 180);
    });
    hard.addEventListener("click", function() {
      defineAndShowResources(200, 200, 165);
    });
    impossible.addEventListener("click", function() {
      defineAndShowResources(175, 175, 150);
    });
    confirmButton.addEventListener("click", function() {
      menu.innerHTML = `
      <input id = "colonyname" type = "text" placeholder = "Name of your colony: ">
      <br>
      <button id = "confirmbutton2">CONFIRM</button>
      `
      listofitens.style.display = 'none';
      confirmButton.style.display = 'none';
      const confirmButton2 = document.getElementById("confirmbutton2");
      confirmButton2.addEventListener("click", function() {
        const colonyName = document.getElementById("colonyname");
        colony.name = colonyName.value;
        colonyName.style.display = 'none';
        confirmButton2.style.display = 'none';
        subtitle.style.display = 'none';
      });
    });
    
  });
  infobutton.addEventListener("click", function() {
    subtitle.textContent = "Learn more about Space Colonies: ";
    menu.innerHTML = `
    <h3>What is this game?</h3>
    <p>Space Colonies is a game that you have to survive in other planets or moons like Mars or the Moon starting with only 4 humans (with the possibility of creating more) and at the same time learning kids about the things in the Space.</p>
    <h3>What will my child probably learn?</h3>
    <p>By playing Space Colonies your child will probably learn about what to do in the space and how astronomy is good and funny!</p>
    <button id = "back">BACK</button>
    `
    const back = document.getElementById("back");
    back.addEventListener("click", function() {
      menu.innerHTML = `
      <button id = "start">START</button>
      <button id = "infobutton">INFO</button>
      `

      subtitle.textContent = "";
      Game();
    });
  });

  function nextDay() {
    if(game.running) {
      game.day++;
      resources.water -= 1.5 * colony.population;
      resources.food -= colony.population;
      if(resources.water <= 0 || resources.food <= 0) {
        game.running = false;
      }
      updateUI();
    } else {
      return;
    }
  }

  function updateUI() {
  
  }
  
  function defineAndShowResources(a, b, c) {
    resources.water = a;
    resources.food = b;
    resources.energy = c;
    listofitens.innerHTML = `
    <ul>
      <li>Water: ${resources.water}</li>
      <li>Food: ${resources.food}</li>
      <li>Energy: ${resources.energy}</li>
    </ul>
    `;
    confirmButton.style.display = 'block';
    confirmButton.innerHTML = "CONFIRM";
  }
}

Game();
