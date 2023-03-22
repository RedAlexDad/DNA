export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
            <div class="card" id="id-card-block-${data.id}" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Купить</button>
                </div>
                <div id="liveAlertPlaceholder-${data.id}"></div>
                <button type="button" class="btn btn-primary" id="liveAlertBtn-${data.id}">Погладить собачку</button>
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

    addClickNotification(data) {
        // debugger
        const alertPlaceholder = document.getElementById(`liveAlertPlaceholder-${data.id}`)
        // console.log('1', alertPlaceholder)
        const alert = (message, type) => {
            // debugger
            const wrapper = document.createElement(`id-card-block-${data.id}`)
            // console.log('1 wrapper:', wrapper)
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>',
                '</div>'
            ].join('')
            // console.log('2 wrapper:', wrapper)
            // console.log('2', alertPlaceholder)
            alertPlaceholder.append(wrapper)
        }

        const alertTrigger = document.getElementById(`liveAlertBtn-${data.id}`)
        // document.getElementById(`liveAlertBtn-${data.id}`)
        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                alert('Успешно! Собака довольна!', 'success')
            })
        }


        // console.log('project/components/product-card/index.js; addListeners, data:', data)
        // console.log('project/components/product-card/index.js; addListeners, data.title:', data.title)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
        this.addClickNotification(data)
        // this.func_accordion(data, listener)
        // console.log('project/components/product-card/index.js; render, data:', data)
        // console.log('project/components/product-card/index.js; render, html:', html)
    }
}