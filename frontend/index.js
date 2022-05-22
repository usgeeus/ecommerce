import ProductsPage from "./src/pages/ProductsPage.js";
import ProductPage from "./src/pages/ProductPage.js";
import { parseRequestUrl } from "./src/utils/parseRequestUrl.js";
import Error404Page from "./src/pages/Error404Page.js";

const routes = {
  "/": ProductsPage,
  "product/:id": ProductPage,
};
const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `${request.verb}` : "");
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  console.log(parseUrl);
  const main = document.getElementById("main-container");
  main.innerHTML = await page.render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
