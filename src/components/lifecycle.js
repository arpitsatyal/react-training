import { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
    };
  }

  changeState = () => {
    this.setState({ name: "Arpit" });
  };

  //initial rendering methods

  componentWillMount() {
        /* 
        - runs after the constructor
        - component hasn't rendered yet
        - it only runs once.
        - runs before render.
        */
    console.log("component will mount?");
  }

  componentDidMount() {
        /*
        - runs after render.
        - only runs once.
        - good place to make api calls.
        */
    console.log("component did mount?");
  }

  //methods that run after the state is changed, after we re-render

  shouldComponentUpdate(nextProps, nextState) {
        /*
        -do we want to re-render or not?
        -return true/false
        */
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
      /* - can performs actions after the component has re-rendered. */
  }

  componentWillUnmount() {
      /* -can undo things here */
  }


  render() {
    /* is called everytime the state is changed. */

    return (
      <div>
        {this.state.name}
        <button onClick={this.changeState}>change state.</button>
      </div>
    );
  }
}

export default LifeCycle;
