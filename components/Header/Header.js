class Header {
    render(count) {
        const htmlContainer = `
            <div class="header-container">
                <div class="header-container__counter">🔥 ${count}</div>    
            </div>
        `;
        
        ROOT_HEADER.innerHTML = htmlContainer;
    }
}

const headerPage = new Header();
const productsLength = localStorageUtils.getLocalValue().length;

headerPage.render(productsLength)