import { Component } from "react";

class Languages extends Component {
  render() {
    return (
      <form>
        <h2>Languages</h2>
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          id="langugae"
          name="language"
          value={this.props.props[this.props.props.length - 1]}
          onChange={(e) =>
            this.props.changefunctions.addLanguage(e.target.value)
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
            {this.props.changefunctions.incrementLanguages();}
          }}
        />
        <button
        onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteLanguage();
        }}
        >Delete</button>
      </form>
    );
  }
}

export default Languages;
