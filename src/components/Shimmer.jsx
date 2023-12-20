import React from "react";

function Shimmer({ loops }) {
  let arr = new Array(loops).fill(0);
  return (
    <div className="mt-[120px] flex flex-col">
      <div className="flex flex-row justify-evenly">
        <div>
          <button className="px-[10px] py-[5px] bg-slate-200 font-medium text-slate-200 rounded-lg  border-none hover:cursor-pointer">
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input className="bg-slate-200 border-none"></input>
          <button
            type="submit"
            className="px-[10px] py-[5px] bg-slate-200 font-medium text-slate-200 rounded-lg  border-none hover:cursor-pointer"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-row flex-wrap justify-center">
        {arr.map((ele, index) => (
          <div
            className="w-[250px] h-[350px] bg-slate-200 m-1 flex flex-col items-center text-black font-sans border rounded-lg hover:shadow-xl hover:bg-slate-300 p-2"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Shimmer;
