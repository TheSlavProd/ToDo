import react, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: props.price,
    };
  }

  priceChange = () => {
    let { price } = this.state;
    let realPrice = parseFloat(price);

    this.setState({
      price: price.includes("$")
        ? realPrice * 476.44 + "֏"
        : realPrice / 476.44 + "$",
    });
    //console.log(price)
  };

  render() {
    let { price } = this.state;

    return (
      <div>
        Price: {price}
        <button onClick={this.priceChange}>{`Change the currency`}</button>
      </div>
    );
  }
}

export default Price;
