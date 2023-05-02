import {ProductCardComponent} from "../../Project/components/product-card/index.js";
import {ProductPage} from "./product/index.js";
// import {router} from "../internal/stocks/index.js";

// Подключение CSS

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://blog.zoo.com.tr/wp-content/uploads/pomeranian-kopek.jpg",
                title: "Померанский шпиц",
                text: "Померанский шпиц – карликовая порода собак с плотным телосложением и крепкой мускулатурой"
            },
            {
                id: 2,
                src: "https://wallpapermoon.com/wp-content/uploads/2022/01/00010218.jpg",
                title: "Бигль",
                text: "Бигли – это веселые, энергичные охотничьи собаки среднего размера."
            },
            {
                id: 3,
                src: "https://wallbox.ru/resize/1920x1080/wallpapers/main2/201727/ovcarka12345678910111213141516.jpg",
                title: "Немецкая овчарка",
                text: "Немецкая овчарка – большая и выносливая собака, характеризующаяся хорошими охотничьими, боевыми и охранными навыками."
            }
        ]
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

    render() {
        
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        debugger;
        const data = this.getData()
        // const data = router.get('/', StocksController.findStocks);
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            // console.log('main/index.js; render, productCard:', productCard)
            // console.log('main/index.js; render, item:', item)
        })
    }
}