import React from 'react';
import './send.css';
import {StudentLink} from './studentElement';
class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.myRef = React.createRef();
    }

render = () => {
    return (
        <>
        <div class = "send">
            <form>

                <input id = "question" className = "question" placeholder="Ask A Question..."></input> <br></br>
                <input id = "option1"className = "op1" placeholder="Option 1"></input><input id = "check1" className="check1" type="checkbox"></input> <br></br>
                <input id = "option2"className = "op2" placeholder="Option 2"></input><input id = "check2" className="check2" type="checkbox"></input> <br></br>
                <input id = "option3"className = "op3" placeholder="Option 3"></input><input id = "check3" className="check3" type="checkbox"></input> <br></br>
                <input id = "option4"className = "op4" placeholder="Option 4"></input><input id = "check4" className="check4" type="checkbox"></input> <br></br>
                <input id = "option5" className = "sub" type="submit" value="Submit"></input>
                <StudentLink to='/teacher'><button class = "sub" value = "Go Back">Go Back</button></StudentLink>
            </form>
        </div>
        </>
    )
}
}

export default Send;