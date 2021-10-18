import react, {Component} from "react"



class Price extends Component{

    constructor (props){
        super(props)
    

       this.state = {
            value: false,
            dram: props.dram

        }
    }
    
 

    render(){
 
        return(
            <span> {`${this.state.value ? `${this.state.dram}` : `${this.props.price}`}`}
            <button onClick={()=>{this.setState({value: !this.state.value})}}>{`Change the currency`}</button>
            </span>
            
        )
    }

}


export default Price;