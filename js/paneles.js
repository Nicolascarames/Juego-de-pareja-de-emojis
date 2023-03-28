"use strict";

const start = document.querySelector(".start");
const center = document.querySelector(".center");
const end = document.querySelector(".end");

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  start.classList.add("hidden");
  center.classList.add("hidden");
  end.classList.add("hidden");
}

function showEnd() {
  showPanel(end);
  const endButton = end.querySelector(".cta");
  endButton.addEventListener("click", () => {
    hideAllPanel();
    main();
    location.reload();
  });
}

function showCenter() {
  showPanel(center);
  const centerButton = center.querySelector(".cta");
  centerButton.addEventListener("click", () => {
    hideAllPanel();
    showEnd();
  });
}

function main() {
  showPanel(start);
  const startButton = start.querySelector(".cta");

  startButton.addEventListener("click", () => {
    hideAllPanel();
    showCenter();
  });
}

main();
