import React from "react";
import useTestData from "../utils/useTestData";
import Shimmer from "./Shimmer";

function Test() {
  // using custom hooks to make the code more readable
  const testData = useTestData();
  return (!testData)?<Shimmer loops={4}/>:(
    <>
    {testData.map((beer) => <li className= "mt-[120px]" key={beer.id}>{beer.name}</li>)}
    </>
  )
}

export default Test;
