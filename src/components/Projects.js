import { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <h2>Personal Projects</h2>
        <label for="project-title">Project Title:</label>
        <input
          type="text"
          id="project-title"
          name="project-title"
          value={this.props.props[this.props.props.length - 1]}
          onChange={(e) =>
            this.props.changefunctions.addProject(e.target.value)
          }
          required
        />
        <br />
        <br />

        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            if(this.props.props[this.props.props.length -1 ] !== "")
            {this.props.changefunctions.incrementProjects();}
          }}
        />
        <button
        onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteProject();
        }}
        >Delete</button>
      </form>
    );
  }
}

export default Projects;
