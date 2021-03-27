import React from 'react';
import './send.css';
import axios from 'axios';


class Send extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    Send = () => {
    return (
        <>
        <div class = "send">
            <form>
               
                <input id = "question" class = "question" placeholder="Ask A Question..."></input> <br></br>
                <input id = "option1" class = "op1" placeholder="Option 1"></input><input class="check1" type="checkbox"></input> <br></br>
                <input id = "option2" class = "op2" placeholder="Option 2"></input><input class="check2" type="checkbox"></input> <br></br>
                <input id = "option3" class = "op3" placeholder="Option 3"></input><input class="check3" type="checkbox"></input> <br></br>
                <input id = "option4" class = "op4" placeholder="Option 4"></input><input class="check4" type="checkbox"></input> <br></br>
                <input id = "submit" class = "sub" type="submit" value="Submit"></input>
            </form>
        </div>
        </>
    )
}
}

export default Send;
