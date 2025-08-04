const map = document.getElementById("map");
const treasure = document.getElementById("treasure");
const tip = document.getElementById("tip");
const startBtn = document.getElementById("start");

function showTreasure(treasureCoords) {
  treasure.style.top = `${treasureCoords.y}px`;
  treasure.style.left = `${treasureCoords.x}px`;
  treasure.style.display = "block";
}

function getTreasureCoords(width, height) {
  const MAP_GAP = 40;

  return {
    x: MAP_GAP + Math.floor(Math.random() * (width - MAP_GAP * 2)),
    y: MAP_GAP + Math.floor(Math.random() * (height - MAP_GAP * 2)),
  };
}

function getClickLength(p1, p2) {
  return Math.floor(
    Math.sqrt(
      (Math.floor(p1.x) - Math.floor(p2.x)) ** 2 +
        (Math.floor(p1.y) - Math.floor(p2.y)) ** 2
    )
  );
}

function showTip(length) {
  if (length < 20) {
    tip.textContent = "КЛАД НАЙДЕН!";
    tip.color = "purple";
  } else if (length < 40) {
    tip.textContent = "ГОРЯЧО!";
    tip.style.color = "red";
  } else if (length < 80) {
    tip.textContent = "Тепло";
    tip.style.color = "orange";
  } else if (length < 120) {
    tip.textContent = "Прохладно";
    tip.style.color = "lightblue";
  } else {
    tip.textContent = "Зима близко!";
    tip.style.color = "blue";
  }
}

function startNewGame() {
  tip.textContent = "";
  treasure.style.display = 'none';

  const treasureCoords = getTreasureCoords(map.clientWidth, map.clientHeight);

  const mapClickFunc = (event) => {
    const clickCoords = {
      x: Math.floor(event.layerX),
      y: Math.floor(event.layerY),
    };

    const clickLength = getClickLength(clickCoords, treasureCoords);

    showTip(clickLength);

    if (clickLength < 20) {
      showTreasure(treasureCoords);
      map.removeEventListener("click", mapClickFunc);
      startBtn.style.display = "block";
    }
  };

  map.addEventListener("click", mapClickFunc);
}


startBtn.addEventListener("click", () => {
  startNewGame();
  startBtn.style.display = 'none';
});

startNewGame();