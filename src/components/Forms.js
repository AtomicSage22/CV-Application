import { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import AdditionalInformation from "./AdditionalInformation";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Languages from "./Languages";
import Interests from "./Interests";

import "../styles/Forms.css";

class Forms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="forms">
        <GeneralInformation
          props={this.props.props.generalInformation}
          changeFunctions={this.props.changeForms.generalInfoFunctions}
        />
        <AdditionalInformation
          props={this.props.props.additionalInformation}
          changefunctions={this.props.changeForms.additionalInfoFunctions}
        />

        <div className="form-group">
          <Education
            props={this.props.props.education}
            changefunctions={this.props.changeForms.educationFunctions}
          />
          <Projects
            props={this.props.props.projects}
            changefunctions={this.props.changeForms.projectFunctions}
          />
          <Skills
            props={this.props.props.skills}
            changefunctions={this.props.changeForms.skillFunctions}
          />
          <Certificates
            props={this.props.props.certificates}
            changefunctions={this.props.changeForms.certificateFunctions}
          />
          <Languages
            props={this.props.props.languages}
            changefunctions={this.props.changeForms.languageFunctions}
          />
          <Interests
            props={this.props.props.interests}
            changefunctions={this.props.changeForms.interestFunctions}
          />
        </div>
      </div>
    );
  }
}

export default Forms;
