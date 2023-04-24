const savedProductToLocalStorage=(id, quantity)=>{

    const previousAddededProduct =getProductFromDb()
    if(previousAddededProduct){
        previousAddededProduct[id]=quantity;
        localStorage.setItem("cart-item", JSON.stringify(previousAddededProduct));
    }
    else{
        previousAddededProduct[id]= quantity;
        localStorage.setItem("cart-item", JSON.stringify(previousAddededProduct));
    }
}

const getProductFromDb=()=>{
    let cart={};
    const addededProduct = localStorage.getItem("cart-item");
    if(addededProduct){
        const product = JSON.parse(addededProduct);
        cart=product;
        return cart;
    }
    return cart;
}

export  {
    savedProductToLocalStorage,
    getProductFromDb
};