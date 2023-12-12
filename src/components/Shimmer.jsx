import React from "react";

function Shimmer({ loops }) {
  let arr = new Array(loops).fill(0);
  return (
    <div className="mt-[100px] p-5 flex flex-row flex-wrap justify-center">
      {arr.map((ele, index) => (
        <div className="w-[250px] h-[250px] bg-slate-500 m-1 text-white flex justify-center items-center" key={index}>Loading</div>
      ))}
    </div>
  );
}

export default Shimmer;
