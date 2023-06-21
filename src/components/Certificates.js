import { Component } from "react";

class Certificates extends Component{
    render(){
        return(
            <>
                <h2>Certificates</h2>
                <label htmlFor="certificate">Certificate Title:</label>
                <input type="text" id="certificate" name="certificate" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </>
        )
    }
}

export default Certificates;