import { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import AdditionalInformation from "./AdditionalInformation";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Langauges from "./Languages";
import Interests from "./Interests";

import '../styles/Forms.css'


class Forms extends Component{
    render(){
        return(
            <div className="forms">
                <GeneralInformation/>
                <AdditionalInformation/>
                <Education/>
                <Projects/>
                <Skills/>
                <Certificates/>
                <Langauges/>
                <Skills/>
                <Interests/>
            </div>
        )
    }
}

export default Forms;