import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductComponent} from "../../components/product/index.js";
import {ProductPage} from "../../pages/main/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    // Part 1 Work
    
    // render() {
    //     const button = new ButtonComponent(this.parent)
    //     button.render()
    // }

    // Part 2 Work

    // render() {
    //     const productCard = new ProductCardComponent(this.parent)
    //     productCard.render()
    // }

    // Part 3 Work

    // getData() { 
    //     return {
    //         id: 1,
    //         src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //         title: "Акция",
    //         text: "У меня есть крутая акция"
    //     }
    // }
    
    // render() {
    //     const data = this.getData()
    //     const productCard = new ProductCardComponent(this.parent)
    //     productCard.render(data)
    // }

    // Part 4 Work

    // getData() { 
    //     return {
    //         id: 1,
    //         src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //         title: "Акция",
    //         text: "У меня есть крутая акция"
    //     }
    // }

    // get pageRoot() {
    //     return document.getElementById('main-page')
    // }
        
    // getHTML() {
    //     return (
    //         `
    //             <div id="main-page" class="d-flex flex-wrap"><div/>
    //         `
    //     )
    // }
        
    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
    
    //     const data = this.getData()
    //     const productCard = new ProductCardComponent(this.pageRoot)
    //     productCard.render(data)
    // }

    // Part 5 Work

    // getData() {
    //     return [
    //         {
    //             id: 1,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 1"
    //         },
    //         {
    //             id: 2,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 2"
    //         },
    //         {
    //             id: 3,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 3"
    //         },
    //     ]
    // }

    // get pageRoot() {
    //     return document.getElementById('main-page')
    // }
        
    // getHTML() {
    //     return (
    //         `
    //             <div id="main-page" class="d-flex flex-wrap"><div/>
    //         `
    //     )
    // }
        
    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
        
    //     const data = this.getData()
    //     data.forEach((item) => {
    //         const productCard = new ProductCardComponent(this.pageRoot)
    //         productCard.render(item)
    //     })
    // }

    // Part 6

    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
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
        const cardId = e.target.dataset.id
        console.log('cardId:', cardId)
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item)
        })

        const productCard = new ProductCardComponent(this.pageRoot)
        productCard.render(item, this.clickCard.bind(this))
        console.log('productCard:', productCard)
    }



    // Part 7

    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
    
    //     const data = this.getData()
    //     const product = new ProductComponent(this.pageRoot)
    //     product.render(data)
    // }

    // clickCard(e) {
    //     const cardId = e.target.dataset.id
    
    //     const productPage = new ProductPage(this.parent, cardId)
    //     productPage.render()
    // }

    // clickBack() {
    //     const mainPage = new MainPage(this.parent)
    //     mainPage.render()
    // }
    
    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
    
    //     const backButton = new BackButtonComponent(this.pageRoot)
    //     backButton.render(this.clickBack.bind(this))
    
    //     const data = this.getData()
    //     const stock = new ProductComponent(this.pageRoot)
    //     stock.render(data)
    // }
    
}