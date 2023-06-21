import { Component } from "react";

class Projects extends Component{
    render(){
        return(
            <form>
                <h2>Personal Projects</h2>
                    <label for="project-title">Project Title:</label>
                    <input type="text" id="project-title" name="project-title" required/><br/><br/>

                    <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Projects;