import React from "react";
import ChildClassComp from "./ChildClassComp";
import UserContext from "../utils/UserContext";

class TestClassComp extends React.Component {
  constructor() {
    super();
    console.log("Parent component constructor");
  }

  componentDidMount() {
    console.log("Parent component rendered!");
  }

  render() {
    console.log("Parent Coponent rendering");
    return <div className="mt-[120px]"></div>;
  }
}
export default TestClassComp;
