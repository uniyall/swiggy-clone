import React from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Body() {
  const [resList, setResList] = useState([]);
  const [resListCopy, setResListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { testId } = useParams();
  console.log(testId);
  useEffect(() => {
    const fun = (async () => {
      const data = await fetch(process.env.SWIGGY_URL);
      const json = await data.json();
      setResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setResListCopy(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    })();
  }, []);

  if (!resList) return <div className="mt-[120px]">Swiggy API Error...</div>;
  console.log(resList);
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
          <Link to = {`restaurant/${res.info.id}`} className="no-underline">
          <Card obj={res} key={res.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
