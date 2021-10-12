import Love from "./Love"
import Name from "./Name"

export default function User(props){

    return (
        <div>
            <p>Hi i am <Name name={props.name}/>, i love <Love love={props.love}/> me {props.age}</p>

        </div>
    )

}