import react, {Component} from "react"



class Price extends Component{

    constructor (props){
        super(props)

    }
    render(){
        return(
            <span> {this.props.price}</span>
        )
    }

}


export default Price;