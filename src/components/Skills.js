import { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <form>
        <h2>Skills</h2>
        <label for="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          name="skill"
          value={this.props.props[this.props.props.length - 1]}
          onChange={(e) => this.props.changefunctions.addSkill(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            if(this.props.props[this.props.props.length -1 ] !== ""){
                this.props.changefunctions.incrementSkills();
            }
        }}
        />
        <button
        onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteSkill();
        }}
        >Delete</button>
      </form>
    );
  }
}

export default Skills;
