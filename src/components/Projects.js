import { Component } from "react";

class Projects extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <form>
                <h2>Personal Projects</h2>
                    <label for="project-title">Project Title:</label>
                    <input
                    type="text" 
                    id="project-title" 
                    name="project-title" 
                    onChange={(e) => this.props.changefunctions.addProject(e.target.value)}
                    required/><br/><br/>
            </form>
        )
    }
}

export default Projects;