import {ButtonComponent} from "../components/button/index.js";
import {ProductCardComponent} from "../components/product-card/index.js";
import {ProductComponent} from "../components/product/index.js";
import {ProductPage} from "../pages/main/product/index.js";
import {BackButtonComponent} from "../components/back-button/index.js";
import {ajax} from "../modules/ajax.js";
import {urls} from "../modules/urls.js";
import {groupId} from "../modules/consts.js";
import {MainPage} from "../pages/main/index.js";

export class ListUser {
    constructor(parent, data_info_user) {
        this.parent = parent
        this.data_info_user = data_info_user
        console.log('getDataInfoUser', this.data_info_user)
    }

    getDataInfoUser() {
        ajax.post(urls.getUserGroupMembers(groupId), (data) => {
            this.renderData(data.response.items)
            this.data_info_user = data.response.items
            // console.log('data.response.items', data.response.items)
            // debugger;
            console.log('getDataInfoUser', this.data_info_user)
        })
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    get pageRoot() {
        return document.getElementById('list-user-page')
    }
        
    getHTML() {
        return (
            `
            <div id="list-user-page">
                <!-- <section class="carousel" aria-label="Gallery"></section> -->
            </div>
            `
        )
        // <section class="carousel" aria-label="Gallery" id="main-page"> </section>
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickCard(e) {
        // debugger;
        const cardId = e.target.dataset.id
        // const press = undefined;

        Object.entries(this.data_info_user).forEach(([key, value]) => {
            if(value.id == cardId){
                this.data_info_user = value;
            }
        });


        const productPage = new ProductPage(this.parent, cardId, this.data_info_user)
        productPage.render()

    }

    render() {
        debugger;   
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getDataInfoUser()

        debugger;

        console.log('TEST END LIST USER')
    }
}