import react, {Component} from "react"
import Description from "./Description";
import NameForHome from "./NameForHome";
import Price from "./Price";

class Product extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div>
            <Description description={this.props.description}/>
            <NameForHome nameforhome={this.props.name}/>
            <Price price={this.props.price} dram="500֏ "/>   
            </div>
        )
    }
}



export default Product;