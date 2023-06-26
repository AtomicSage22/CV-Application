import { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const change = this.props.changefunctions;
        return(
            <form>
                <h2>Education</h2>
                <label htmlFor="organization-name">Organization Name:</label>
                <input 
                type="text" 
                id="organization-name" 
                name="organization-name" 
                onChange={(e)=> change.addName(e.target.value)}
                required
                />
                <br/>
                <br/>

                <label htmlFor="education-title">Title of Study:</label>
                <input 
                type="text" 
                id="education-title" 
                name="education-title" 
                onChange={(e)=> change.addTitle(e.target.value)}
                required
                />
                <br/>
                <br/>

                <label htmlFor="education-date">Date of Study:</label>
                <input 
                type="text" 
                id="education-date" 
                name="education-date" 
                onChange={(e)=> change.addDate(e.target.value)}
                required
                />
                <br/>
                <br/>
            </form>
        )
    }
}

export default Education;