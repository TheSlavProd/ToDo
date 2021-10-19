import react, {Component} from "react";

class Input extends Component {
    state = {
        text: "",
        inputValue: ""
    }

    handleChange = (event) =>{
        this.setState({
            inputValue: event.target.value
        })
    }
    handleText = () => {
        this.setState({
            text: this.state.inputValue,
            inputValue: ""

        })
    }
    render (){
        return(
            <div>
            
            <input value={this.state.inputValue} type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleText}>Click</button>
            <p>{this.state.text}</p>
            
            </div>
        )
    }
}


export default Input;