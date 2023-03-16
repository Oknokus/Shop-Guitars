class Shop {
    handleClear() {
        ROOT_SHOP.innerHTML = "";
    }
    
    render() {
        const productStore = localStorageUtils.getLocalValue();

        let htmlContainer = "";
        let sumContainer = 0;

        CATALOG.forEach(({id, name, price}) => {
            if(productStore.indexOf(id) !== -1) {
                htmlContainer+= `
                    <tr>
                        <td class="shopping-element__name">💰 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>                  
                `;
                sumContainer += price               
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shopPage.handleClear();"></div>
                    <table>
                        ${htmlContainer}
                        <tr>
                            <td class="shopping-element__name">💥 Сумма:</td>
                            <td class="shopping-element__price">${sumContainer.toLocaleString()} USD</td>
                        </tr>
                    </table>
            </div>
        `
        ROOT_SHOP.innerHTML = html;
    }
}

const shopPage = new Shop();
