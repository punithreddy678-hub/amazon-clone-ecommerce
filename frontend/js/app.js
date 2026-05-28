console.log("VELA AUDIO Loaded");

const buttons =
    document.querySelectorAll(
        ".product-info button"
    );

buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        alert("Product Added To Cart");

    });

});