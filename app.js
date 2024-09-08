const tambahP1 = document.querySelector("#player-1");
const tambahP2 = document.querySelector("#player-2");
const reset = document.querySelector("#reset");
const skorP1 = document.querySelector("#p1-display");
const skorP2 = document.querySelector("#p2-display");

let winGame = 5;
let isWin = false;

tambahP1.addEventListener("click", () => {
  if (parseInt(skorP1.textContent) === winGame - 1) {
    isWin = true;
    skorP1.style.color = "green";
    tambahP1.disabled = true;
  }
  skorP1.textContent = parseInt(skorP1.textContent) + 1;
});

tambahP2.addEventListener("click", () => {
  if (parseInt(skorP2.textContent) === winGame - 1) {
    isWin = true;
    skorP2.style.color = "green";
    tambahP2.disabled = true;
  }
  skorP2.textContent = parseInt(skorP2.textContent) + 1;
});

reset.addEventListener("click", () => {
  (skorP1.textContent = 0), (skorP1.style.color = "black");
  (skorP2.textContent = 0), (skorP2.style.color = "black");
  tambahP1.disabled = false;
  tambahP2.disabled = false;
});
