class Spinner {
    handleClickDelete() {
        ROOT_SPINNER.innerHTML = "";
    }

    render() {

        const htmlContainer = `
            <div class="spinner-container">
                <img 
                    class="spinner-container__img" 
                    src="/components/Spinner/img/spinner.svg" />
            </div>
        `; 

        ROOT_SPINNER.innerHTML = htmlContainer;
    };
};

const spinnerPage = new Spinner();