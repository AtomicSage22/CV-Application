import { Component } from "react";

class Skills extends Component{
    render(){
        return(
            <form>
                <h2>Skills</h2>
                <label for="skill">Skill:</label>
                <input 
                type="text" 
                id="skill" 
                name="skill" 
                onChange={(e) => this.props.changefunctions.addSkill(e.target.value)}
                required
                />
                <br/>
                <br/>
            </form>
        )
    }
}

export default Skills;