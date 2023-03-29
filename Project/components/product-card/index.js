export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
            <div class="card" id="id-card-block-${data.id}" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body" id="id-card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Купить</button>
                    <button class="btn btn-primary" id="click-delete-${data.id}" data-id="${data.id}">Очистить</button>
                </div>
                <div id="livealertplaceholder-${data.id}"></div>
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

    deleteButton(data) {
        try {
            // debugger
            // const alertPlaceholder = document.getElementById(`liveAlertPlaceholder-${data.id}`)

            document.getElementById(`click-delete-${data.id}`)
            .addEventListener("click", () => {
                // var parent = document.getElementById(`click-delete-${data.id}`);
                // var child = document.getElementById(`id-btn-close`);
                // parent.removeChild(child);
                const alertPlaceholder = document.getElementById(`id-card-block-${data.id}`)

                document.getElementById(`livealertplaceholder-${data.id}`).outerHTML=`<div id= livealertplaceholder-${data.id}>`
                // const wrapper = document.createElement(`livealertplaceholder-${data.id}`)

                // wrapper.innerHTML = [   
                //     `<div id= livealertplaceholder-{data.id}>`,
                //     '</div>'
                // ].join('')
                // document.getElementById(`livealertplaceholder-${data.id}`).append(wrapper)
                // alertPlaceholder.append(wrapper)
                // alertPlaceholder.append(wrapper)
                console.log('TEst')
            })
        }
        catch{
            console.log('Отсутствует класс alert alert-success alert-dismissible')
        }
    }

    addClickNotification(data) {
        // debugger
        const alertPlaceholder = document.getElementById(`livealertplaceholder-${data.id}`)
        // console.log('1', alertPlaceholder)
        const alert = (message, type) => {
            // debugger
            const wrapper = document.createElement(`id-alert-${data.id}`)
            
            // console.log('1 wrapper:', wrapper)
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert" id="id-btn-close">`,
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
        this.deleteButton(data)
        // this.func_accordion(data, listener)
        // console.log('project/components/product-card/index.js; render, data:', data)
        // console.log('project/components/product-card/index.js; render, html:', html)
    }
}