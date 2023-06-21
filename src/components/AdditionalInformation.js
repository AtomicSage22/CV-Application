import { Component } from "react";

class AdditionalInformation extends Component{
    render(){
        return(
            <form>
                <h2>Additional Information</h2>
                <label htmlFor="About">About:</label>
                <textarea id="about" name="about" required></textarea><br/><br/>
                <label htmlFor="LinkedIn">LinkedIn:</label>
                <input type="text" id="LinkedIn" name="LinkedIn" required/><br/><br/>
                <label htmlFor="GitHub">GitHub:</label>
                <input type="text" id="GitHub" name="GitHub" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default AdditionalInformation;