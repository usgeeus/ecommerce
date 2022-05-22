import ProductsPage from "./src/pages/ProductsPage.js";
const router = () => {
  const main = document.getElementById("main-container");
  main.innerHTML = ProductsPage.render();
};
window.addEventListener("load", router);
