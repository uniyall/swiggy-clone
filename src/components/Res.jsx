import React, { useState } from "react";
import Shimmer from "./Shimmer";
import ResAccordian from "./ResAccordian";
import { useLoaderData } from "react-router-dom";

function Res() {
  const menu = useLoaderData()?.data?.cards;
  const [index, setIndex] = useState(undefined);
  if (!menu) return <div>Loading...</div>;

  const {
    card: {
      card: {
        info: { name: resName, cloudinaryImageId },
      },
    },
  } = menu[0];

  const {
    groupedCard: {
      cardGroupMap: {
        REGULAR: { cards },
      },
    },
  } = menu[2];

  const categories = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  return menu.length === 0 ? (
    <Shimmer loops={3} />
  ) : (
    <div className="mt-[120px] flex flex-col items-center">
      <h1>{resName}</h1>
      <img
        src={`${process.env.RES_IMG_URL}${cloudinaryImageId}`}
        className="w-[300px]"
      />
      {categories.map((itemCard, ind) => (
        <ResAccordian
          title={itemCard?.card?.card?.title}
          itemCards = {itemCard?.card?.card?.itemCards}
          key={itemCard?.card?.card?.title}
          show = {ind === index ? true : false}
          setIndex = {(bool) => bool ? setIndex(ind) : setIndex(null)}
        />
      ))}
    </div>
  );
}

export default Res;
