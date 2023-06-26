import { Component } from "react";

class Certificates extends Component{
    render(){
        return(
            <form>
                <h2>Certificates</h2>
                <label htmlFor="certificate">Certificate Title:</label>
                <input 
                type="text" 
                id="certificate" 
                name="certificate" 
                onChange={(e) => this.props.changefunctions.addCertificate(e.target.value)}
                required
                />
                <br/>
                <br/>
            </form>
        )
    }
}

export default Certificates;