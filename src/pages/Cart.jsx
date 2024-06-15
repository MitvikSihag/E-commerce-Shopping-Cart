import React from "react";
import {useSelector, useDispatch } from "react-redux";
import CartCard from "../components/CartCard";
import {Link} from "react-router-dom";
import {removeFromCart} from "../store/CartSlice";

function Cart()
{
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function totalPrice()
    {
        let sm = 0;

        cart.forEach((product) =>
        {
            sm += product.price;
        })

        return sm;
    }   

    function removeAll()
    {
        cart.forEach((product) =>
        {
            dispatch(removeFromCart(product));
        })
    }

    return(
        <div className="min-h-screen w-full bg-gray-100">
            {cart.length ? (
                <div className="w-full flex justify-between">
                    <div className="w-3/4 p-10 flex flex-col items-center">
                        {cart.map((item) => (
                            <CartCard key={item.id} item={item}/>
                        ))}
                    </div>

                    <div className="w-1/6 flex flex-col text-center items-center m-8">
                        <div className="w-full p-4 m-3 bg-gray-200 text-gray-800 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">Total Price</h2>
                            <p className="text-lg mb-2">Subtotal({cart.length} {cart.length === 1 ? "item" : "items"}): <b className="font-semibold">${totalPrice()}</b></p>
                            <button className="w-32 mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300" onClick={removeAll}>Remove All</button>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="h-70vh w-full flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-4">Your Cart is empty</h1>
                    <Link to={'/'}>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                            Start Shopping
                        </button>
                    </Link>
                </div>
      )}
    </div>

    );
}

export default Cart;