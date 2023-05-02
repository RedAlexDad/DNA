import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../index.js";
// import {ajax} from "../../modules/ajax.js";
// import {urls} from "../../modules/urls.js";
// import {groupId} from "../../modules/consts.js";

export class ProductPage {
    constructor(parent, id, data) {
        this.parent = parent
        this.id = id
        this.data = data
        console.log('ProductPage data:', data)
    }
    

    getData() {
        return {
            id: 1,
            src: `${this.data.photo_400_orig}`,
            title: `Акция ${this.data.id}`,
            first_name: this.data.first_name,
            last_name: this.data.last_name,
            city: this.data.city
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
    }
}