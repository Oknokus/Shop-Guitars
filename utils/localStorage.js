class LocalStorageUtil  {
    constructor() {
        this.keyname = "products"
    }

    getProducts() {
        const getProductsLocalStorage = localStorage.getItem(this.keyname);

        if(getProductsLocalStorage !== null) {
            return JSON.parse(getProductsLocalStorage);
        } else {
            return [];
        }
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;

        let index = products.indexof(id)

        if(index === -1) {
            products.push(id);
            pushProduct = true
        } else {
            products.splice(index, 1)
        }

       
        localStorage.setItem(this.keyname, JSON.stringify(products))

        return {
            products,
            pushProduct
        }

    }
}

const localStorageUtil = new LocalStorageUtil();




