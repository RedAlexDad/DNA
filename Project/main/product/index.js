import {ProductComponent} from "../../../Project/components/product/index.js";
import {BackButtonComponent} from "../../../Project/components/back-button/index.js";
import {MainPage} from "../index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id

        console.log('ProductPage; parent:', parent)
    }

    getData() {
        return {
            id: 1,
            src: "https://static.vecteezy.com/system/resources/previews/000/486/315/original/shopping-cart-icon-design-vector.jpg",
            // title: `ID ${this.id} продукта`,
            title: `ID ${this.id}`,
            text: "Успешно! Ожидайте, собака в ближайшее время будет у Вас"
        }
    }
    

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)

        console.log('main/product/index.js; render:', data)
    }
}