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
      isSaving: false
    }
  }

  render(){
    return (
      <div className="contact-page-container">
        <h1>Contact me</h1>
        <p>Explanation paragraph</p>
    
        <form className="contact-info" autoComplete="off" >
          <input placeholder="Name" name="name" value={this.state.name} type="text" onChange={this.onInputValueChange}/>
          <input placeholder="Email" name="email" value={this.state.email} type="text" onChange={this.onInputValueChange}/>
          <input placeholder="Subject" name="subject" value={this.state.subject} type="text" onChange={this.onInputValueChange}/>
          <textarea placeholder="Message" name="message" value={this.state.message} type="text" onChange={this.onInputValueChange}/>
          <button type="button" onClick={this.send}>Send</button>
        </form>
      </div>);
    };

    onInputValueChange = e => {
      let changedKey = e.target.name;
      this.setState({ [changedKey] : e.target.value });
    }
  
  send = () => {
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
}

export default Contact;
