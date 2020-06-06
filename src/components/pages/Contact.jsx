import React, {Component} from "react";
import axios from 'axios';
import "./Contact.css";

class Contact extends Component{
  constructor(){
    super();
    this.state={
      name: "",
      email: "",
      subject: "",
      message: "",
      isSaving: false,
      errors: {}
    }
  }

  render(){
    let errors = this.state.errors;
    return (
      <div className="contact-page-container">
        <h1>Contact me</h1>
        <p>Explanation paragraph</p>
    
        <form className="contact-info" autoComplete="off" >
          <input className={`field half ${errors.name? "invalid" : ""}`} placeholder="Name" name="name" value={this.state.name} type="text" onChange={this.onInputValueChange}/>
          <input className={`field half ${errors.email? "invalid" : ""}`} placeholder="Email" name="email" value={this.state.email} type="text" onChange={this.onInputValueChange}/>
          <input  className={`field ${errors.subject? "invalid" : ""}`} placeholder="Subject" name="subject" value={this.state.subject} type="text" onChange={this.onInputValueChange}/>
          <textarea className={`field ${errors.message? "invalid" : ""}`} placeholder="Message" name="message" value={this.state.message} type="text" onChange={this.onInputValueChange}/>
          <button type="button" onClick={this.send}>Send</button>
        </form>
      </div>);
    };

  onInputValueChange = e => {
    let errors = { ...this.state.errors };
    let changedKey = e.target.name;
    errors[changedKey] = false;
    this.setState({ [changedKey] : e.target.value,  errors });
  }
  
  send = () => {
    let areAllFieldsValid = this.validateFields();

    if(!areAllFieldsValid) return;

    this.setState({ isSaving: true });

    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    axios.post('http://localhost:4000/api/sendMail', data)
      .then(() => this.setState({ isSaving: false }))
      .catch(() =>this.setState({ isSaving: false }));
  }

  validateFields = () => {
    let isValid = true;
    let errors = {name: false, subject: false, message: false, email: false};

    if(!this.state.name || this.state.name.length < 3){
      isValid = false;
      errors.name = true;
    }

    if(!this.state.subject || this.state.subject.length < 3){
      isValid = false;
      errors.subject = true;
    }

    if(!this.state.message || this.state.message.length < 20){
      isValid = false;
      errors.message = true;
    }

    if(!this.state.email){
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = regex.test(String(this.state.email).toLowerCase());
      errors.email = true;
    }

    this.setState({ errors });
    return isValid;
  }
}

export default Contact;
