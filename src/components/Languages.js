import { Component } from "react";

class Langauges extends Component{
    render(){
        return(
            <form>
                <h2>Languages</h2>
                <label for="language">Language:</label>
                <input type="text" id="langugae" name="language" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Langauges;