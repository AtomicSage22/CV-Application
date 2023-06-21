import { Component } from "react";

class Interests extends Component{
    render(){
        return(
            <form>
                <h2>Interests</h2>
                <label htmlFor="interest">Interest</label>
                <input type="text" id="interest" name="interest" required/><br/><br/>
            </form>
        )
    }
}

export default Interests;