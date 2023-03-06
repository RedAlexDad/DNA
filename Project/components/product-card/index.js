export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <!-- <button class="btn btn-primary">Нажми на меня</button> -->
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Купить</button>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        // debugger
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)

        // console.log('project/components/product-card/index.js; addListeners, data:', data)
        // console.log('project/components/product-card/index.js; addListeners, data.title:', data.title)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
        console.log('project/components/product-card/index.js; render, data:', data)
        // console.log('project/components/product-card/index.js; render, html:', html)
    }
}