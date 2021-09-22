import React,{Component} from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <div className="about-us">
                <h1>About Us</h1>
                <hr/>
                <section>
                    <p>We are Group 3 from Dipto's Friday 10:30am tutorial.</p>
                </section>
                <h2>Team Members </h2>
                <hr/>
                <ul>
                    <li>Jeffrey Tan - S3851781</li>
                    <li>Allister Toos - S3843971</li>
                    <li>Hibban Nawaz (Mohammed) - S3847243</li>
                    <li>Jeffrey Tan - S3839735</li>
                </ul>
                
            </div>
        );
          
    }
}
export default About
