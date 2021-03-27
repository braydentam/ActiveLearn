import React from 'react';
import './send.css';
const Send = () => {
    return (
        <>
        <div class = "send">
            <form>
               
                <input class = "question" placeholder="Ask A Question..."></input> <br></br>
                <input class = "op1" placeholder="Option 1"></input><input class="check1" type="checkbox"></input> <br></br>
                <input class = "op2" placeholder="Option 2"></input><input class="check2" type="checkbox"></input> <br></br>
                <input class = "op3" placeholder="Option 3"></input><input class="check3" type="checkbox"></input> <br></br>
                <input class = "op4" placeholder="Option 4"></input><input class="check4" type="checkbox"></input> <br></br>
                <input class = "sub" type="submit" value="Submit"></input>
            </form>
        </div>
        </>
    )
}

export default Send;
