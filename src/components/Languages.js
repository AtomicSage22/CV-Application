import { Component } from "react";

class Languages extends Component{
    render(){
        return(
            <form>
                <h2>Languages</h2>
                <label htmlFor="language">Language:</label>
                <input 
                type="text" 
                id="langugae" 
                name="language" 
                onChange={(e) => this.props.changefunctions.addLanguage(e.target.value)}
                required
                />
                <br/>
                <br/>
            </form>
        )
    }
}

export default Languages;