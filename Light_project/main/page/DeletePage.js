import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "./CardPage.js";
import {ajax} from "../../modules/ajax.js";


// import { createInterface } from "readline";

export class DeletePage {
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
                <div id="dogs-page" class="d-flex flex-wrap">
                    <input id="input-component" class="btn btn-primary" type="text" placeholder="ID собаки" value="">
                    <button id="simply_button" class="btn btn-primary">Убрать с данных</button>
                <div/>
                
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

        document.getElementById('simply_button').onclick = function() {
            // debugger;
            // console.log(length)
            // document.getElementById('simply_button').onclick
    
            console.log('work');
            let ID = document.getElementById('input-component').value;
   
            console.log('ID: ', ID)

            debugger;
            // ajax.delete('http://localhost:8000/stocks/', ID)
            
            ajax.delete('http://localhost:8000/stocks/' + ID, function(ID) {
                console.log('Data deleted successfully');
              }, function(xhr, status, error) {
                console.log(`Error deleting data \nerror: ${error}\nstatus: ${status} \nxhr: ${xhr}`);
              });
        };       
    }
}