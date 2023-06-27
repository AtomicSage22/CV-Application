import { Component } from 'react';
import './App.css';
import Forms from './components/Forms.js';
import Layout from './components/Layout.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      generalInformation: {
        name:"",
        email: "",
        phone: "",
        address: "",
        title: ""
      },
      
      additionalInformation: {
        about: "",
        linkedin: "",
        github: ""
      },

      education: [
        {
          name: "",
          title: "",
          date: ""
        },
      ],

      projects: [""],

      skills:[""],

      certificates: [""],

      languages: [""],

      interests: [""]
    }


    this.functions = {
      generalInfoFunctions: {
        updateName : (name) =>{
          this.setState(prevState =>({
            ...prevState,
            generalInformation: {
              ...prevState.generalInformation,
              name: name}
          }))
        },
        updateEmail : (email) =>{
          this.setState(prevState =>({
            generalInformation: {
              ...prevState.generalInformation,
              email: email
            }
          }))
        },
        updatePhone : (phone) =>{
          this.setState(prevState =>({
            generalInformation: {
              ...prevState.generalInformation,
              phone: phone
            }
          }))
        },
        updateAddress : (address) =>{
          this.setState(prevState =>({
            generalInformation: {
              ...prevState.generalInformation,
              address: address
            }
          }))
        },
        updateTitle : (title) =>{
          this.setState(prevState =>({
            generalInformation: {
              ...prevState.generalInformation,
              title: title
            }
          }))
        }
      },
      additionalInfoFunctions: {
        updateAbout: (about) =>{
          this.setState(prevState =>({
            additionalInformation: {
              ...prevState.additionalInformation,
              about: about
            }
          }))
        },
        updateLinkedIn: (linkedin) =>{
          this.setState(prevState =>({
            additionalInformation: {
              ...prevState.additionalInformation,
              linkedin: linkedin
            }
          }))
        },
        updateGitHub: (gitHub) =>{
          this.setState(prevState =>({
            additionalInformation: {
              ...prevState.additionalInformation,
              github: gitHub
            }
          }))
        }
      },
      educationFunctions: {
        incrementEducation: () =>{
          this.setState((prev) =>({
            education: [...prev.education, {
              name: "",
              title: "",
              date: ""
            }]
          }))
        },
        addName: (name) =>{
          this.setState(prevState=>prevState.education[this.state.education.length -1].name = name)
        },
        addTitle: (title) =>{
          this.setState(prevState => prevState.education[this.state.education.length -1].title = title)
        },
        addDate : (date) =>{
          this.setState(prevState => prevState.education[this.state.education.length -1].date = date)
        },
        deleteEducation: () =>{
          let slicedArray = this.state.education.slice(0,-1);
          this.setState({education: slicedArray});
      }
    },
      projectFunctions:{
        incrementProjects: () =>{
          this.setState(prevState => ({
            projects: [...prevState.projects, ""]
          }))
        },
        addProject: (title) =>{
          this.setState(prevState => prevState.projects[this.state.projects.length -1] = title)
        },
        deleteProject: () =>{
          let slicedArray = this.state.projects.slice(0,-1);
          this.setState({projects: slicedArray});
        }
      },
      skillFunctions:{
        incrementSkills: () =>{
          this.setState(prevState => ({
            skills: [...prevState.skills, ""]
          }))
        },
        addSkill: (title) =>{
          this.setState(prevState => prevState.skills[this.state.skills.length -1] = title)
        },
        deleteSkill: () =>{
          let slicedArray = this.state.skills.slice(0,-1);
          this.setState({skills: slicedArray});
        }
      },
      certificateFunctions: {
        incrementCertificates: () =>{
          this.setState(prevState => ({
            certificates: [...prevState.certificates, ""]
          }))
        },
        addCertificate: (title) =>{
          this.setState(prevState => prevState.certificates[this.state.certificates.length -1] = title)
        },
        deleteCertificate: () =>{
          let slicedArray = this.state.certificates.slice(0,-1);
          this.setState({certificates: slicedArray});
        }
      },
      languageFunctions: {
        incrementLanguages: () =>{
          this.setState(prevState => ({
            languages: [...prevState.languages, ""]
          }))
        },
        addLanguage: (title) =>{
          this.setState(prevState => prevState.languages[this.state.languages.length -1] = title)
        },
        deleteLanguage: () =>{
          let slicedArray = this.state.languages.slice(0,-1);
          this.setState({languages: slicedArray});
        }
      },
      interestFunctions: {
        incrementInterests: () =>{
          this.setState(prevState => ({
            interests: [...prevState.interests, ""]
          }))
        },
        addInterest: (title) =>{
          this.setState(prevState => prevState.interests[this.state.interests.length -1] = title)
        },
        deleteInterest: () =>{
          let slicedArray = this.state.interests.slice(0,-1);
          this.setState({interests: slicedArray});
        }
      }

      }
    }
  render(){
    return (
      <>
        <Forms className = "form-group"
        props = {this.state} 
        changeForms = {this.functions}
        changeName = {this.updateName}
        changeEmail = {this.updateEmail}
        />
        <Layout props = {this.state} change = {this.updateName}/>
      </>
    )
  }
}

export default App;
