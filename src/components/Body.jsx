import React from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

function Body() {
  const [resList, setResList] = useState([]);
  const [resListCopy, setResListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fun = (async () => {
      const data = await fetch(process.env.SWIGGY_URL);
      const json = await data.json();
      setResList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setResListCopy(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    })();
  }, []);

  if (!resList) return <div className="mt-[120px]">Swiggy API Error...</div>;
  return resList.length === 0 ? (
    <Shimmer loops={9} />
  ) : (
    <div className="mt-[120px] flex flex-col">
      <div className="flex flex-row justify-evenly">
        <div className="">
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              setResListCopy(resList.filter((res) => res.info.avgRating >= 4));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input
            type="text"
            value={searchText}
            className="mr-2"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            type="submit"
            className="hover:cursor-pointer"
            onClick={() => {
              setResListCopy(
                resList.filter((ele) =>
                  ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-row flex-wrap justify-center">
        {resListCopy.map((res) => (
          <Card obj={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
