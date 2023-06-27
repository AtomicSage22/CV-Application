import { Component } from "react";

class Interests extends Component {
  render() {
    return (
      <form>
        <h2>Interests</h2>
        <label htmlFor="interest">Interest</label>
        <input
          type="text"
          id="interest"
          name="interest"
          value={this.props.props[this.props.props.length - 1]}
          onChange={(e) =>
            this.props.changefunctions.addInterest(e.target.value)
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
            {this.props.changefunctions.incrementInterests();}
          }}
        />
        <button
        onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteInterest();
        }}
        >Delete</button>
      </form>
    );
  }
}

export default Interests;
