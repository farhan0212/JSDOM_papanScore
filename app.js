const tambahP1 = document.querySelector("#player-1");
const tambahP2 = document.querySelector("#player-2");
const reset = document.querySelector("#reset");
const skorP1 = document.querySelector("#p1-display");
const skorP2 = document.querySelector("#p2-display");
const winPoint = document.querySelector("#winPoint");

let isWin = false;
let winGame = parseInt(winPoint.value);

function resetScore() {
  (skorP1.textContent = 0), (skorP1.style.color = "black");
  (skorP2.textContent = 0), (skorP2.style.color = "black");
  tambahP1.disabled = false;
  tambahP2.disabled = false;
  isWin = false;
}

winPoint.addEventListener("change", () => {
  winGame = parseInt(winPoint.value);
  resetScore();
});

tambahP1.addEventListener("click", () => {
  if (!isWin) {
    skorP1.textContent = parseInt(skorP1.textContent) + 1;
    if (parseInt(skorP1.textContent) === winGame) {
      isWin = true;
      skorP1.style.color = "green";
      tambahP1.disabled = true;
    }
  }
});

tambahP2.addEventListener("click", () => {
  if (!isWin) {
    skorP2.textContent = parseInt(skorP2.textContent) + 1;
    if (parseInt(skorP2.textContent) === winGame) {
      isWin = true;
      skorP2.style.color = "green";
      tambahP2.disabled = true;
    }
  }
});

reset.addEventListener("click", resetScore);
