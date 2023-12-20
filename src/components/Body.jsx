import Card, { withVegLabel } from "./Card";
import Shimmer from "./Shimmer";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

function Body() {
  const { userName, setUserName } = useContext(UserContext);
  console.log(userName);
  // State variables
  const [resList, setResList] = useState([]);
  const [resListCopy, setResListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(resListCopy);

  const VegCard = withVegLabel(Card);

  // useEffect hook for fetching API response and setting the State variable
  useEffect(() => {
    const fun = async () => {
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
    };
    fun();
  }, []);

  if (!useIsOnline())
    return (
      <h1 className="mt-[120px]">
        Sorry, it seems you are offline! Please check your network connection!
      </h1>
    );

  // UI Rendering Logic
  return resList.length === 0 ? (
    <Shimmer loops={9} />
  ) : (
    <div className="mt-[120px] flex flex-col ">
      <div className="flex flex-row justify-evenly">
        <div>
          <button
            className="px-[10px] py-[5px] bg-yellow-400 font-medium text-black rounded-lg  border-none hover:cursor-pointer mr-5"
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
            className="px-[10px] py-[5px] bg-green-600 font-medium text-white rounded-lg  border-none hover:cursor-pointer mr-5"
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
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className="p-5 flex flex-row flex-wrap justify-center">
        {resListCopy.map((res) => (
          <Link
            to={`restaurant/${res.info.id}`}
            className="no-underline"
            key={res.info.id}
          >
            {res.info?.veg ? (
              <VegCard obj={res} key={res.info.id} />
            ) : (
              <Card obj={res} key={res.info.id} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
