export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            // `
            // <ol class="carousel__viewport">
            //     <li id="carousel__slide${data.id}" tabindex="0" class="carousel__slide">
            //         <div class="carousel__snapper">
            //             <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
            //             <a href="#carousel__slide${data.id_num - 1}" class="carousel__prev">Go to last slide</a>
            //             <a href="#carousel__slide${data.id_num + 1}" class="carousel__next">Go to next slide</a>
            //         </div>
            //     </li>
            // </ol>
            
            // `
            `
            <div class="card-${data.id}" style="width: 300px;">
                <img class="card-img-top" src="${data.photo_400_orig}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                </div>
            </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        debugger;
        console.log(data)
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}