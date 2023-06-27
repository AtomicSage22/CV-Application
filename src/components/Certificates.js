import { Component } from "react";

class Certificates extends Component {
  render() {
    return (
      <form>
        <h2>Certificates</h2>
        <label htmlFor="certificate">Certificate Title:</label>
        <input
          type="text"
          id="certificate"
          name="certificate"
          value={this.props.props[this.props.props.length -1]}
          onChange={(e) =>
            this.props.changefunctions.addCertificate(e.target.value)
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
            {this.props.changefunctions.incrementCertificates();}
          }}
        />
        <button onClick={(e)=>{
            e.preventDefault()
            this.props.changefunctions.deleteCertificate();
        }
        }>Delete</button>
      </form>
    );
  }
}

export default Certificates;
