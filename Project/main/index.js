import {ProductCardComponent} from "../../Project/components/product-card/index.js";
import {ProductPage} from "./product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://popugaychiki.com/wp-content/uploads/2021/12/sa-25.jpg",
                title: "Померанский шпиц",
                text: "Померанский шпиц – карликовая порода собак с плотным телосложением и крепкой мускулатурой"
            },
            {
                id: 2,
                src: "https://kartinkin.net/pics/uploads/posts/2022-09/1663326735_72-kartinkin-net-p-okhotnichi-sobaki-porodi-bigl-vkontakte-73.jpg",
                title: "Бигль",
                text: "Бигли – это веселые, энергичные охотничьи собаки среднего размера."
            },
            {
                id: 3,
                src: "https://kartinkin.net/pics/uploads/posts/2022-09/thumbs/1663594151_48-kartinkin-net-p-pervaya-nemetskaya-ovcharka-krasivo-53.jpg",
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
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            // console.log('main/index.js; render, productCard:', productCard)
            // console.log('main/index.js; render, item:', item)
        })
    }
}