import React, { Component } from 'react'
import emailjs from 'emailjs-com'

class Contact extends Component {
    render() {
        function sendEmail(e){
            e.preventDefault();
            emailjs.sendForm('service_2dtw72k','template_nt5aslf',
            e.target,'user_PrCL3nAjMvKZgn15NwsaC').then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));

        }
        return (
            <div className = "container border"
            style={{marginTop: "50px",
            width:'50%',
            backgroundPosition: "center"
            }}>
                <h1 style={{marginTop:'25px',textAlign:'center'}}>Contact Form</h1>
                <form className = "row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type = "text" name = "name" className="form-control" />
                    <label>Email</label>
                    <input type = "email" name = "user_email" className="form-control" />
                    <label>Message</label>
                    <textarea name = 'message' rows = "4"  className="form-control"/>
                    <input type = 'submit' value = 'Send'className="form-control  btn btn-primary"
                    style={{marginTop:'30px'}}/>
                </form>
            </div>
        );
    }
}
export default Contact;