class Product {

    render() {    
        let htmlCatalog = "";

        CATALOG.forEach(({id, name, img, price}) => {
            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">💰 ${price.toLocaleString()} usd</span>
                <button class="products-element__btn">Добавить в корзину </button>                
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