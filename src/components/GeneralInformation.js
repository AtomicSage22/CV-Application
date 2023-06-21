import { Component } from "react"

class GeneralInformation extends Component{
    render(){
        return(
            <form>
                <h2>General Information</h2>
                <label htmlFor="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required/><br/><br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/><br/><br/>

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required/><br/><br/>

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default GeneralInformation;