import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "./CardPage.js";
import {ajax} from "../../modules/ajax.js";

export class DogsPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
        // console.log(this.data)
    }

    get pageRoot() {
        return document.getElementById('dogs-page')
    }
        
    getHTML() {
        return (
            `
                <div id="dogs-page" class="d-flex flex-wrap"><div/>
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

    render() {
        // debugger;

        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        // ajax.post('http://localhost:8000/stocks/', (data) => {
        //     this.renderData(data)
        //     // this.data_info_user = data.response
        //     console.log('data', data)
        //     // console.log('getDataInfoUser', this.data_info_user)
        // })
        
        // const data = this.getDataInfoAll()
        // console.log(data)
        // const data = this.getData()
        // console.log(data)
        // console.log(this.data)
        this.data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            console.log('main/index.js; render, productCard:', productCard)
            console.log('main/index.js; render, item:', item)
        })

        
    }
}