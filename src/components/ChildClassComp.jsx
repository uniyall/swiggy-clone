import { Component } from "react";

class ChildClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userData: {},
      count2 : 0, 
      count3 : 0
    };
    console.log("Child Component Constructor");
  }

  async componentDidMount() {
    console.log("Child component rendered!");
    const data = await fetch("https://api.github.com/users/uniyall");
    const json = await data.json();
    console.log(json);
    this.setState({
      userData: json,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if(this.state.count !== prevProp.count || this.state.count2 !== prevProp.count2)
    {
        // Do Something 
    }

    if(this.state.count3 !== prevProp.count3)
    {
        // Do Something 
    }
    console.log("Component Updated!");
  }

  render() {
    const {
      userData: { name, location },
    } = this.state;
    console.log("Child component rendering");
    const { count, count2, count3 } = this.state;
    return (
      <div>
        <p>{`My Name is ${name} !`}</p>
        <p>{`My Location is ${location}`}</p>
        <p>{this.state.count}</p>
        <button onClick={() => {
            this.setState({
                count : ++this.state.count
            })
        }}>Inc</button>
      </div>
    );
  }
}
export default ChildClassComp;
