import react, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //console.log(props)

    this.state = {
      value: 0,
      isOpen: false,
    };
  }

  render() {
    //console.log(this.props)
    // console.log(this.state)
    const text = this.state.isOpen && (
      <p>Ehhh Ashxarq ashxarq...Hayeren text mi ogtagorci! </p>
    );

    return (
      <div>
        Hello from JSX <p>{this.props.valueDef}</p>
        <p>{this.state.value}</p>
        {text}
        <button
          onClick={() => {
            this.setState({ value: this.state.value - 1 });
          }}
        >
          Count -
        </button>
        <button
          onClick={() => {
            this.setState({ value: this.state.value + 1 });
          }}
        >
          Count +
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >{`${this.state.isOpen}  // ${
          this.state.isOpen ? "Hide" : "Show"
        }`}</button>
      </div>
    );
  }
}

export default Counter;
