import react, {Component} from "react"



class NameForHome extends Component{

    constructor (props){
        super(props)

    }
    render(){
        return(
            <span> {this.props.nameforhome}</span>
        )
    }

}


export default NameForHome;