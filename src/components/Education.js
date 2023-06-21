import { Component } from "react";

class Education extends Component{
    render(){
        return(
            <form>
                <h2>Education</h2>
                <label htmlFor="education-name">Education Name:</label>
                <input type="text" id="education-name" name="education-name" required/><br/><br/>

                <label htmlFor="education-title">Title of Study:</label>
                <input type="text" id="education-title" name="education-title" required/><br/><br/>

                <label htmlFor="education-date">Date of Study:</label>
                <input type="text" id="education-date" name="education-date" required/><br/><br/>
                
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Education;