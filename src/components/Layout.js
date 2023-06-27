import { Component } from "react";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import '../styles/Layout.css';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import location from '../assets/location.png';
import phone from '../assets/phone.png';


class Layout extends Component{
    constructor(props){
        super(props)
        this.pdfRef = React.createRef();
    }


    render(){
        const generalInformation = this.props.props.generalInformation;
        const additionalInformation = this.props.props.additionalInformation;

        const education = this.props.props.education.map(level => 
            <div>  
                    <h3>{level.title}</h3>
                    <p className="name">{level.name}</p>
                    <p>{level.date}</p>
            </div>
        );

        const skills = this.props.props.skills.map((skill)=>
            <p>{skill}</p>
            );

        const projects = this.props.props.projects.map((project, index)=>
            <li key = {index}>{project}</li>
            );

        const certificates = this.props.props.certificates.map((certificate, index)=>
            <li key = {index}>{certificate}</li>
            );

        const languages = this.props.props.languages.map((language)=>
            <p>{language}</p>
            );
        
        const interests = this.props.props.interests.map((interest)=>
            <p>{interest}</p>
            );

        const downloadPDF = () =>{
            const input = this.pdfRef.current;
            html2canvas(input).then((canvas) =>{
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('invoice.pdf')
            });
        };
        return(
            <div className="layout">
                <div className="resume" ref={this.pdfRef}> 
                    <div className="header">
                        <h1>{generalInformation.name}</h1>
                        <h3>{this.props.props.generalInformation.title}</h3>
                        <p>{additionalInformation.about}</p>
                    </div>
                    <div className="contacts">
                    <a href = {"mailto:" + generalInformation.email}><img src={email}/><p>{generalInformation.email}</p></a>
                    <a href={"tel:" + generalInformation.phone}><img src={phone}/><p>{generalInformation.phone}</p></a>
                    <a href={"https://www.google.com/maps/place/" + generalInformation.address}><img src={location}/><p>{generalInformation.address}</p></a>
                    <a href={additionalInformation.linkedin}><img src={linkedin}/><p>{additionalInformation.linkedin}</p></a>
                    <a href={additionalInformation.github}><img src={github}/><p>{additionalInformation.github}</p></a>
                    </div>
                    <div className="information">
                        <div className="left">
                            <div className="education">
                                <h2>Education</h2>
                                {education}
                            </div>
                            <div className="projects">
                                <h2>Personal Projects</h2>
                                <ul>
                                    {projects}
                                </ul>
                            </div>
                            {/* <button onClick={this.props.change("meow")}>meow</button> */}
                        </div>
                        <div className="right">
                            <div className="skills">
                                <h2>Skills</h2>
                                <div className="skill-contents">
                                    {skills}
                                </div>
                            </div>
                            <div className="certificates">
                                <h2>Certificates</h2>
                                <ul>
                                    {certificates}
                                </ul>
                            </div>
                            <div className="languages">
                                <h2>Languages</h2>
                                <div className="language-contents">
                                    {languages}
                                </div>
                            </div>
                            <div className="interests">
                                <h2>Interests</h2>
                                <div className="interest-contents">
                                    {interests}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={downloadPDF}>Download</button>
            </div>
        )
    }

}


export default Layout;

