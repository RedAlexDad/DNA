import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductComponent} from "../../components/product/index.js";
import {ShowMainPage} from "../../components/main/ShowMainPage.js";
import {ProductPage} from "./product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

export class MainPage {
    constructor(parent, data_info) {
        this.parent = parent
        this.data_info = data_info
    }

    getData() {
        // debugger;
        ajax.post(urls.getGroup(groupId), (data) => {
            this.renderData(data.response[0])
            this.data_info = data.response[0]
            // console.log('data.response.items', data.response.items)
            console.log('getData', this.data_info)
        })
    }

    // getDataUser() {
    //     ajax.post(urls.getUserInfo(this.data_info.id), (data) => {
    //         this.renderData(data.response.items)
    //         this.data_info = data.response.items
    //     })
    //     console.log('getDataUser', this.data_info)
    // }

    renderData(items) {
        // debugger;
        const show_main = new ShowMainPage(this.pageRoot)
        show_main.render(items, this.clickCard.bind(this))
        console.log('renderData(items)', show_main)

        // items.forEach((item) => {
        //     const productCard = new ProductCardComponent(this.pageRoot)

        //     productCard.render(item, this.clickCard.bind(this))
        // })
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
            <div id="main-page">
                <!-- <section class="carousel" aria-label="Gallery"></section> -->
            </div>
            `
        )
        // <section class="carousel" aria-label="Gallery" id="main-page"> </section>
    }

    clickCard(e) {
        // debugger;
        const cardId = e.target.dataset.id
        // const press = undefined;

        Object.entries(this.data_info).forEach(([key, value]) => {
            // console.log('clickCard(E): ', key, value.id);
            if(value.id == cardId){
                // press = this.data_info.id;
                this.data_info = value;
                // console.log('press:', press)
            }
        });

        // console.log('this.data_info:', this.data_info)

        const productPage = new ProductPage(this.parent, cardId, this.data_info)
        productPage.render()

        // console.log('cardId:', cardId)
        // console.log('this.data_info.id:', this.data_info.id)

        // this.getDataUser()
        // console.log('this.data_info:', this.data_info)

        // const data = e.target.dataset
        // const info_data = document.getElementsByName(`card-${cardId}`)2 л
        // console.log('info_data: ', info_data)
        // console.log('index: ', document.getElementById(this.pageRoot))
        // console.log('pageRoot: ', this.pageRoot)

        // e.forEach((e) => {
            // const productCard = new ProductPage(this.pageRoot)
            // productCard.render(e, this.clickCard.bind(this))
        // })
    }

    render() {
        // debugger;   
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getData()
    }
}