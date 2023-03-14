class Product {
    constructor() {
        this.activeClass = "products-element__btn_active";
        this.textAdd = "Добавить в корзину";
        this.textRemove = "Удалить из корзины";
    }


    handleClickBtn (element, id) {        
        const {getlocalStorageValue, pushProductsValue} = localStorageUtils.setLocalValue(id)  

        if(pushProductsValue) {
            element.innerHTML = this.textRemove;
            element.classList.add(this.activeClass);
        } else {
            element.innerHTML = this.textAdd;
            element.classList.remove(this.activeClass)
        }
        headerPage.render(getlocalStorageValue.length)
       
    } 

    render() {
        const productStore = localStorageUtils.getLocalValue()
       
        let htmlCatalog = "";

        CATALOG.forEach(({id, name, img, price}) => {
                       
            let text = "";
            let activeClass = " "

            if(productStore.indexOf(id) === -1) {
                text =  this.textAdd;
            } else {
                text =  this.textRemove;
                activeClass +=  this.activeClass;
            }
           
            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">💰 ${price.toLocaleString()} usd</span>
                <button 
                    class="products-element__btn ${activeClass}"
                    onclick="productPage.handleClickBtn(this, '${id}');">
                    ${text}
                </button>                
            </li>
            `  
        });

        const htlm = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCT.innerHTML= htlm;
    } 
}

const productPage = new Product;
productPage.render();