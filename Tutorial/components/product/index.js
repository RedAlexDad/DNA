export class ProductComponent {
    constructor(parent) {
        this.parent = parent
        console.log('pr', parent)
    }

    getData() {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            this.renderData(data.response)
        })
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.photo_400_orig}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        debugger;
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}