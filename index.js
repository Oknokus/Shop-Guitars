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

        setTimeout(() => {
            spinnerPage.handleClickDelete();
            errorMessagePage.handleClickCloseErrorMessage();
            render();
            }, 1000)
        
    })
    .catch(error => {        
        console.error("ERROR FETCH !!!");
        errorMessagePage.render();  
    });





