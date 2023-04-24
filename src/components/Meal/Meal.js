import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Meal = ({meal, handleAddProduct}) => {
    // console.log(meal)
    return (
        <div className='meal'>
            <img src={meal.strMealThumb} alt="" />
            <h3>{meal.strMeal}</h3>
            <p>Price : ${meal.idMeal-52500}</p>
            <button onClick={()=>handleAddProduct(meal)} className='btn btn-primary'>
                Add To Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;