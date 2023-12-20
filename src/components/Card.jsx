import React from "react";

function Card({
  obj: {
    info: {
      sla: { deliveryTime },
      name,
      avgRating,
      cloudinaryImageId,
      cuisines,
    },
  },
}) {
  return (
    <div className="w-[250px] h-[350px] bg-slate-200 m-1 flex flex-col items-center text-black font-sans border rounded-lg hover:shadow-xl hover:bg-slate-300 p-2">
      <img
        src={`${process.env.RES_IMG_URL}${cloudinaryImageId}`}
        className="mb-2 w-[250px] h-[200px] object-cover rounded-lg object-top"
        alt=""
      />
      <div className="mb-2 font-bold">{name}</div>
      <div className="mb-1">{`${avgRating} | ${deliveryTime} Min`}</div>
      <div className="mb-1">{`${cuisines.join(", ")}`}</div>
    </div>
  );
}

export const withVegLabel = (Card) => {
  return (props) => {
    return (
      <div className="relative z-0">
        <label className="absolute top-3 left-4 no-underline text-white bg-green-600 p-1 rounded-full hover:bg-green-500">veg</label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
