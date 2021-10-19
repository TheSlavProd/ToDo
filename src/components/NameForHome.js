import react, {Component} from "react"



class NameForHome extends Component{

    constructor (props){
        super(props)

    }
    render(){
        return(
            <span>Name: {this.props.nameforhome}</span>
        )
    }

}


export default NameForHome;