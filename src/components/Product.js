import react, { Component } from "react";
import Description from "./Description";
import NameForHome from "./NameForHome";
import Price from "./Price";

class Product extends Component {
  constructor(props) {
    super(props);
    //console.log(props)
  }
  render() {
    let { description, name, price, icon } = this.props;
    return (
      <div>
        <NameForHome nameforhome={name} />
        
        <Description description={description} />
        <Price price={price} />
        <span>Icon: {icon}</span>
      </div>
    );
  }
}

export default Product;
