let formField = document.getElementsByClassName("search__form__field")[0];

let enableSubmit = () => {
    let submit = document.getElementsByClassName("search__form__submit")[0];
    if (formField === undefined){
        formField = document.getElementsByClassName("search__form__field")[0];
    }

    // rofl.className

    let search = formField.parentElement.parentElement;
    let rofl = submit.children[0];

    let searchRect = search.getBoundingClientRect() 
    let fieldRect = formField.getBoundingClientRect();
    let submitRect = submit.getBoundingClientRect();

    let dX = fieldRect.left - searchRect.left;
    let dY = fieldRect.top - searchRect.top;

    submit.style.display = "block";
    submit.style.position = "absolute";
    // submit.style.background = "white";
    submit.style.left = `${dX}px`;
    submit.style.top = `${dY}px`;
    // submit.style.width = `${fieldRect.height}px`;
    // submit.style.height = `${fieldRect.height}px`;

    // rofl.style.transition = "transform 2s ease";
    rofl.style.transform = "translate(100px) scale(2, 2)";
    rofl.style.animationPlayState = "initial";
    
    
    // submit.style.left = "calc";

    
}

// let disableSubmit = () => {
//     let submit = document.getElementsByClassName("search__form__submit")[0];
//     submit.style.display = "none";
// }