import { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import AdditionalInformation from "./AdditionalInformation";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Langauges from "./Languages";
import Interests from "./Interests";


class Forms extends Component{
    render(){
        return(
            <>
                <GeneralInformation/>
                <AdditionalInformation/>
                <Education/>
                <Projects/>
                <Skills/>
                <Certificates/>
                <Langauges/>
                <Skills/>
            </>
        )
    }
}

export default Forms;