import React from "react";
import { useDispatch } from "react-redux";
import {removeFromCart} from "../store/CartSlice";

function CartCard(props)
{
    const dispatch = useDispatch();
    return (
        <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-md">
        <img
          src={props.item.image}
          alt={props.item.title}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div className="ml-6 flex flex-col justify-between h-full">
          <h2 className="text-xl font-bold">{props.item.title}</h2>
          <p className="text-sm text-gray-600 mt-2 mb-2">{props.item.description}</p>
          <p className="text-lg font-semibold text-gray-700">${props.item.price}</p>
          <button
            className="w-32 mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => dispatch(removeFromCart(props.item))}
          >
            Remove
          </button>
        </div>
      </div>
    )
}

export default CartCard;