function render() {
    const getlocalStorageValue = localStorageUtils.getLocalValue();
    headerPage.render(getlocalStorageValue.length);

    productPage.render();
    
};

spinnerPage.render();     

let CATALOG = [];

fetch("constant/catalog.json")
    .then(res => res.json())
    .then(data => {
        CATALOG = data;
        spinnerPage.handleClickDelete();
        render();
    })
    .catch(error => {
        console.error()
    });





