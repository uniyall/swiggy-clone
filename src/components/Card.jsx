import React from 'react'

function Card({
  obj : {
    info :
    {
      sla : {
        deliveryTime
      },
      name, 
      avgRating,
      cloudinaryImageId, 
      cuisines
    }
  }
}) {
  return (
    <div className="w-[250px] h-[250px] bg-slate-700 m-1 flex flex-col items-center text-white border hover:shadow-xl">
      <img src={`${process.env.RES_IMG_URL}${cloudinaryImageId}`} className="mb-2 w-[250px] h-[150px] object-cover object-top" alt="" />
      <div className="mb-1">{name}</div>
      <div className="mb-1">{`${avgRating} | ${deliveryTime} Min`}</div>
      <div className="mb-1">{`${cuisines.join(', ')}`}</div>
    </div>
  )
}

export default Card;