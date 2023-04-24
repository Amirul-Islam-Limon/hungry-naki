import React, { useEffect, useState } from 'react';
import './Shop.css'
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import { getProductFromDb, savedProductToLocalStorage } from '../../utilities/savedProduct';
const Shop = () => {

    const [meals, setMeals]=useState([])
    const [cart, setCart]= useState([])

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(res=> res.json())
        .then(data=> setMeals(data.meals));
    },[])

    useEffect(()=>{
        const getProduct = getProductFromDb();
        let savedCart =[];
        for(const id in getProduct){
            console.log(id, getProduct)
            const mathcedProduct = meals.find(meal=> meal.idMeal === id);
            if(mathcedProduct){
                mathcedProduct.quantity = getProduct[id];
                savedCart.push(mathcedProduct);
                // console.log(mathcedProduct)
            }
        }
        setCart(savedCart);
    },[meals])

    const handleAddProduct=(selectedMeal)=>{
        const beforeAddede= cart.find(meal=> meal.idMeal === selectedMeal.idMeal)
        let newCart=[];
        const id=selectedMeal.idMeal;
        let quantity;
        if(!beforeAddede){
            selectedMeal.quantity= 1;
            newCart=[...cart, selectedMeal];
            setCart(newCart);
            quantity=1;
        }
        else{
            const otherProduct = cart.filter(product=> product.idMeal !== beforeAddede.idMeal);
            beforeAddede.quantity = beforeAddede.quantity + 1;
            newCart=[...otherProduct, beforeAddede];
            quantity = beforeAddede.quantity;
            setCart(newCart);
        }
        savedProductToLocalStorage(id,quantity)
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    meals.map(meal=> <Meal 
                        key={meal.idMeal}
                        meal={meal} 
                        handleAddProduct={handleAddProduct}></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;