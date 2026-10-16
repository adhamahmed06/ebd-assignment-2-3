
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");

  ul.replaceChildren();

  for (const item of list) {
    const li = document.createElement("li");
    li.className = "article-card";
    li.textContent = `${item.name} (${item.category})`;
    ul.appendChild(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

if (
  typeof window !== "undefined" &&
  window.location.pathname.includes("checkpoint-b") &&
  document.querySelector("#list") &&
  document.querySelector("#filter-button")
) {
  start();
}
