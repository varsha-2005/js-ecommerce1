const products = document.querySelectorAll(".btn3");
const electronics = document.getElementById("electronics");
const clothing = document.getElementById("clothing");
const elebtn = document.getElementById("elebtn");
const clobtn = document.getElementById("clobtn");
const cartPopup = document.getElementById("showcart");
const pop = document.getElementById("pop");

elebtn.addEventListener("click", function () {
  electronics.style.display = "flex";
  clothing.style.display = "none";
});

clobtn.addEventListener("click", function () {
  electronics.style.display = "none";
  clothing.style.display = "flex";
});

cartPopup.addEventListener("click", () => {
  if ((pop.style.display = "none")) {
    pop.style.display = "flex";
  }
});

const cartclose = document.getElementById("popupcancel");
cartclose.addEventListener("click", () => {
  if ((pop.style.display = "flex")) {
    pop.style.display = "none";
  }
});

products.forEach((product) => {
  product.addEventListener("click", () => {
    let content = product.parentNode;
    let image = content.querySelector("#img").src;
    let text1 = content.querySelector(".name").textContent;
    let text2 = content.querySelector(".price").textContent;

    pop.innerHTML += `
      <div class="cartitem">
        <img src="${image}">
        <p>${text1}</p>
        <span>${text2}</span>
        <button class="removeitem">X</button>
      </div>`;

    const removeButtons = document.querySelectorAll(".removeitem");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });

    cartPopup.addEventListener("click", () => {
      if ((pop.style.display = "none")) {
        pop.style.display = "flex";
      }
    });

    const cartclose = document.getElementById("popupcancel");
    cartclose.addEventListener("click", () => {
      if ((pop.style.display = "flex")) {
        pop.style.display = "none";
      }
    });
  });
});