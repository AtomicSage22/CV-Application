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
        <div>
          <Education
            props={this.props.props.education}
            changefunctions={this.props.changeForms.educationFunctions}
          />
          <input
            type="submit"
            onClick={(e) =>
              this.props.changeForms.educationFunctions.incrementEducation()
            }
            value="Add"
          />
        </div>
        <div>
          <Projects
            props={this.props.props.projects}
            changefunctions={this.props.changeForms.projectFunctions}
          />
          <input
            type="submit"
            onClick={(e) =>
              this.props.changeForms.projectFunctions.incrementProjects()
            }
            value="Add"
          />
        </div>
        <div>
          <Skills 
          props={this.props.props.skills} 
          changefunctions={this.props.changeForms.skillFunctions}
          />
          <input 
          type="submit" 
          value="Add" 
          onClick={(e) =>
            this.props.changeForms.skillFunctions.incrementSkills()
          }
          />
        </div>
        <div>
          <Certificates 
          props={this.props.props.certificates} 
          changefunctions={this.props.changeForms.certificateFunctions}
          />
          <input 
          type="submit" 
          value="Add" 
          onClick={(e) =>
            this.props.changeForms.certificateFunctions.incrementCertificate()
          }
          />
        </div>
        <div>
            <Languages
            props={this.props.props.languages}
            changefunctions={this.props.changeForms.languageFunctions}
            />
            <input 
            type="submit" 
            value="Add"
            onClick={(e) =>
                this.props.changeForms.languageFunctions.incrementLanguages()
              } 
            />
        </div>
        <div>
            <Interests
            props={this.props.props.interests}
            changefunctions={this.props.changeForms.interestFunctions}
            />
            <input 
            type="submit" 
            value="Add" 
            onClick={(e) =>
                this.props.changeForms.interestFunctions.incrementInterests()
              }
            />
        </div>
      </div>
    );
  }
}

export default Forms;
