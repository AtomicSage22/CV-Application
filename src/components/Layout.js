import { Component } from "react";
import '../styles/Layout.css';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import location from '../assets/location.png';
import phone from '../assets/phone.png';


class Layout extends Component{
    render(){
        return(
            <div className="layout">
                <div className="header">
                    <h1>Dev Singh Chuahan</h1>
                    <h3>Web Developer</h3>
                    <p>Passionate computer science student with experience in full stack web development and machine
learning . Proficient in HTML , CSS , JavaScript , React .js , Node .js , MongoDB , and Express .js . Possess
strong problem-solving and collaboration skills and continuously strive to learn and improve</p>
                </div>
                <div className="contacts">
                <a href = "mailto: dev.dev.singh.chauhan@gmail.com"><img src={email}/><p>dev.dev.singh.chauhan@gmail.com</p></a>
                <a href="tel:9644665727"><img src={phone}/><p>9644665727</p></a>
                <a href="https://www.google.com/maps/place/Bhopal"><img src={location}/><p>Bhopal, India</p></a>
                <a href="https://www.linkedin.com/in/dev-singh-chauhan-319592149/https://www.linkedin.com/in/dev-singh-chauhan-319592149/"><img src={linkedin}/><p>https://www.linkedin.com/in/dev-singh-chauhan-319592149/</p></a>
                <a href="https://github.com/AtomicSage22"><img src={github}/><p>https://github.com/AtomicSage22</p></a>
                </div>
                <div className="information">
                    <div className="left">
                        <div className="education">
                            <h2>Education</h2>
                            <h3>B.Tech</h3>
                            <p className="name">Sagar Institute of research and technology</p>
                            <p>08/2020 - present</p>
                        </div>
                        <div className="projects">
                            <h2>Personal Projects</h2>
                            <ul>
                                <li>GeoFencing based Attendance Management App</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="skills">
                            <h2>Skills</h2>
                            <div className="skill-contents">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>React.JS</p>
                                <p>Node.JS</p>
                                <p>React Native</p>
                            </div>
                        </div>
                        <div className="certificates">
                            <h2>Certificates</h2>
                            <ul>
                                <li>Internal Smart India Hackathon</li>
                                <li>CodeBite 2k23 Hackathon</li>
                            </ul>
                        </div>
                        <div className="languages">
                            <h2>Languages</h2>
                            <div className="language-contents">
                                <p>JavaScript</p>
                                <p>Python</p>
                            </div>
                        </div>
                        <div className="interests">
                            <h2>Interests</h2>
                            <div className="interest-contents">
                                <p>Web Development</p>
                                <p>Machine Learning</p>
                                <p>Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Layout;

