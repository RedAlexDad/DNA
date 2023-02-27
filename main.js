import {MainPage} from "./pages/main/index.js";
import {ButtonComponent} from "./components/button/index.js";
// import {ProductCardComponent} from "./components/product-card/index.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root);
mainPage.render();
