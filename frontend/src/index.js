import ProductsPage from "./pages/ProductsPage.js";
import ProductPage from "./pages/ProductPage.js";
import { parseRequestUrl } from "./utils/parseRequestUrl.js";
import Error404Page from "./pages/Error404Page.js";
import "./style.css";

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
  const main = document.getElementById("main-container");
  main.innerHTML = await page.render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
