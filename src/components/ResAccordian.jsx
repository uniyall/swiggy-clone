import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

function ResAccordian({ title, itemCards, show, setIndex }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col my-[10px]">
      <div className=" flex justify-between pl-2 items-center mb-3 w-[500px] h-[50px] bg-black text-white">
        <div>{title}</div>
        <div
          className="hover:cursor-pointer mr-2"
          onClick={() => {
            setIndex(!show);
          }}
        >
          {show ? "⬆️" : "🔽"}
        </div>
      </div>
      <div>
        {show
          ? itemCards.map((item, index) => (
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
                <div>
                  <button
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                    className="border-none bg-yellow-300 text-black p-2 hover:cursor-pointer rounded-md font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default ResAccordian;
