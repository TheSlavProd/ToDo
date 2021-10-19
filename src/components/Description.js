import react, {Component} from "react"



class Description extends Component{

    constructor (props){
        super(props)

    }
    render(){
        return(
            <div>Description: {this.props.description}</div>
        )
    }

}


export default Description;