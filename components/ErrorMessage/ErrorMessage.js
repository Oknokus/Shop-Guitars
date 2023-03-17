class ErrorMessage {
    handleClickCloseErrorMessage() {
        ROOT_ErrorMessage.innerHTML = "";
    }

    render() {
        let hmmlContainer = `
            <div class="errorMessage-container">                
                <span class="errorMessage-container__span">ERROR FETCH !!!</span>
            </div> 
        `;

        ROOT_ErrorMessage.innerHTML = hmmlContainer;
    };
};

const errorMessagePage = new ErrorMessage();

