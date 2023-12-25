import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  return (
    <div className="mt-[120px] flex flex-col items-center">
      <div>
        <button
          onClick={() => {
                dispatch(clearCart())
          }}
          className="p-3 m-3 bg-yellow-300 text-black rounded-lg border-none font-semibold hover:cursor-pointer"
        >
          Clear
        </button>
      </div>
      {cartItems.map((item, index) => (
        <div
          className="h-[120px] w-[500px] bg-neutral-50 mb-1 pl-2 pt-2 rounded-lg"
          key={index}
        >
          <div className="font-bold">{item?.card?.info?.name}</div>
          <div>
            {item?.card?.info?.price
              ? `₹ ${item?.card?.info?.price / 100}`
              : `₹ ${item?.card?.info?.defaultPrice / 100}`}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
