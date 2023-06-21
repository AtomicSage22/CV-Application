import { Component } from "react";

class Skills extends Component{
    render(){
        return(
            <form>
                <h2>Skills</h2>
                <label for="skill">Skill:</label>
                <input type="text" id="skill" name="skill" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Skills;