import React, {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart} from "../store/CartSlice";

function Card(props)
{
    const {cart} = useSelector((state)=>state);
    const [btn, setBtn] = useState(!cart.length || !(cart.some((product) => product.id === props.item.id)) ? "Add to Cart" : "Remove from Cart");
    const dispatch = useDispatch();

    return <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={props.image} alt={props.title} className=" h-40 object-cover rounded-lg mb-4 ml-auto mr-auto" />
        <h2 class="text-xl font-semibold mb-2">{props.title}</h2>
        <p class="text-gray-700 mb-4">{props.price}$</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick = {() => {
            if(btn === 'Add to Cart')
            {
                dispatch(addToCart(props.item));
                setBtn("Remove from Cart");
                console.log("added");
            }
            
            else
            {
                dispatch(removeFromCart(props.item));
                setBtn("Add to Cart");
                console.log("removed");
            }
            }}>
            {btn}
            </button>
    </div>
}

export default Card;