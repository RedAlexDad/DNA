import {ProductCardComponent} from "../components/product-card/index.js";
import {ProductPage} from "./page/CardPage.js";
import {ajax} from "../modules/ajax.js";

import {UpdateButtonComponent} from "../components/button/update.js"
import {AddButtonComponent} from "../components/button/add.js"
import {DeleteButtonComponent} from "../components/button/delete.js"
import {DogsPage} from "./page/DogsPage.js"
import {AddPage} from "./page/AddPage.js"
import {DeletePage} from "./page/DeletePage.js"
 
// Подключение CSS

export class MainPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }
    
    getDataInfoAll() {
        // debugger;
        ajax.get('http://localhost:8000/stocks/', (data) => {
            this.data = data
            console.log('data', data)
        })
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        // debugger
        const cardId = e.target.dataset.id
        console.log('project/main/index.js; clickCard, this.parent:', this.parent)
        console.log('project/main/index.js; clickCard, cardId:', cardId)

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    clickBackUpdate() {
        // console.log(this.data)
        const dogspage = new DogsPage(this.parent, this.data)
        dogspage.render()
    }

    clickBackAdd() {
        // debugger;
        // console.log(this.data)
        // console.log(Object.keys(this.data).length)
        const addpage = new AddPage(this.parent, this.data, Object.keys(this.data).length)
        addpage.render()
    }

    clickBackDelete() {
        // debugger;
        // console.log(this.data)
        // console.log(Object.keys(this.data).length)
        const addpage = new DeletePage(this.parent, this.data, Object.keys(this.data).length)
        addpage.render()
    }

    render() {
        // debugger;

        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const UpdateButton = new UpdateButtonComponent(this.pageRoot)
        UpdateButton.render(this.clickBackUpdate.bind(this))

        const AddButton = new AddButtonComponent(this.pageRoot)
        AddButton.render(this.clickBackAdd.bind(this))
        
        const DeleteButton = new DeleteButtonComponent(this.pageRoot)
        DeleteButton.render(this.clickBackDelete.bind(this))       
        

        // const UpdateButton = new UpdateButtonComponent(this.pageRoot)
        // UpdateButton.render(this.clickBack.bind(this))
        
        // ajax.post('http://localhost:8000/stocks/', (data) => {
        //     this.renderData(data)
        //     // this.data_info_user = data.response
        //     console.log('data', data)
        //     // console.log('getDataInfoUser', this.data_info_user)
        // })
        
        const data = this.getDataInfoAll()
        console.log(data)
        // const data = this.getData()
        // console.log(data)
        // data.forEach((item) => {
            // const productCard = new ProductCardComponent(this.pageRoot)
            // productCard.render(item, this.clickCard.bind(this))
            // console.log('main/index.js; render, productCard:', productCard)
            // console.log('main/index.js; render, item:', item)
        // })       
    }
}