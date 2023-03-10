class LocalStorageUtils {
    constructor() {
        this.keyname = "products";
    }

    getLocalValue() {
        const localStorageValue = localStorage.getItem(this.keyname);
        
        if(localStorageValue !== null) {
            return JSON.parse(localStorageValue)
        } else {
            return [];
        }
    }

    setLocalValue(id) {
        const getlocalStorageValue = this.getLocalValue();
        let index = getlocalStorageValue.indexOf(id);
        let pushProductsValue = false;
        
        if(index === -1) {
            getlocalStorageValue.push(id);
            pushProductsValue = true;
        } else {
            getlocalStorageValue.splice(index, 1);
        }

        localStorage.setItem(this.keyname, JSON.stringify(getlocalStorageValue))

        return {
            getlocalStorageValue,
            pushProductsValue
        }
    }

}

const localStorageUtils = new LocalStorageUtils();

 
