import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const change = this.props.changefunctions;
    return (
      <form>
        <h2>Education</h2>
        <label htmlFor="organization-name">Organization Name:</label>
        <input
          type="text"
          id="organization-name"
          name="organization-name"
          onChange={(e) => change.addName(e.target.value)}
          value={this.props.props[this.props.props.length - 1].name}
          required
        />
        <br />
        <br />

        <label htmlFor="education-title">Title of Study:</label>
        <input
          type="text"
          id="education-title"
          name="education-title"
          value={this.props.props[this.props.props.length - 1].title}
          onChange={(e) => change.addTitle(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="education-date">Date of Study:</label>
        <input
          type="text"
          id="education-date"
          name="education-date"
          value={this.props.props[this.props.props.length - 1].date}
          onChange={(e) => change.addDate(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            if(this.props.props[this.props.props.length -1 ].name !== "" && this.props.props[this.props.props.length - 1].title !== "" && this.props.props[this.props.props.length - 1].date !== "")
            {change.incrementEducation();}
          }}
        />
        <button
        onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteEducation();
        }}
        >Delete</button>
      </form>
    );
  }
}

export default Education;
