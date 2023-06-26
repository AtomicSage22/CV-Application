import { Component } from "react";

class AdditionalInformation extends Component{
    render(){
        const change = this.props.changefunctions;
        return(
            <form>
                <h2>Additional Information</h2>
                <label htmlFor="About">About:</label>
                <textarea 
                id="about" 
                name="about" 
                onChange={(e)=> change.updateAbout(e.target.value)}
                required
                >
                </textarea>
                <br/>
                <br/>
                <label htmlFor="LinkedIn">LinkedIn:</label>
                <input 
                type="text" 
                id="LinkedIn" 
                name="LinkedIn" 
                onChange={(e)=> change.updateLinkedIn(e.target.value)}
                required
                />
                <br/>
                <br/>
                <label htmlFor="GitHub">GitHub:</label>
                <input 
                type="text" 
                id="GitHub" 
                name="GitHub" 
                onChange={(e)=> change.updateGitHub(e.target.value)}
                required
                />
                <br/>
                <br/>
            </form>
        )
    }
}

export default AdditionalInformation;