import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Res() {
  const menu = useLoaderData()?.data?.cards;
  console.log(menu);
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
        REGULAR: {
          cards: [
            ,
            {
              card: {
                card: { itemCards },
              },
            },
          ],
        },
      },
    },
  } = menu[2];

  return menu.length === 0 ? (
    <Shimmer loops={3} />
  ) : (
    <div className="mt-[120px] flex flex-col items-center">
      <h1>{resName}</h1>
      <img
        src={`${process.env.RES_IMG_URL}${cloudinaryImageId}`}
        className="w-[300px]"
      />
      {itemCards.map((ele) => (
        <li key={ele.card.info.id} className="list-none">
          {ele.card.info.name}
        </li>
      ))}
    </div>
  );
}

export default Res;
