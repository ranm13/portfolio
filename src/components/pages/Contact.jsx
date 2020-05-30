import React, {Component} from "react";

class Contact extends Component{
  constructor(){
    super();
    this.state={
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }

  render(){
    return (
      <div className="contact-page-container">
        <h1>Contact me</h1>
        <p>Explanation paragraph</p>
    
        <form className="contact-info" autoComplete="off" >
          <input placeholder="Name" name="name" value={this.state.name} type="text" onChange={this.onChange}/>
          <input placeholder="Email" name="email" value={this.state.email} type="text" onChange={this.onChange}/>
          <input placeholder="Subject" name="subject" value={this.state.subject} type="text" onChange={this.onChange}/>
          <textarea placeholder="Message" name="message" value={this.state.message} type="text" onChange={this.onChange}/>
          <button type="button" onClick={this.send}>Send</button>
        </form>
      </div>);
    };

    onChange = e => {
      let changedKey = e.target.name;
      this.setState({ [changedKey] : e.target.value });
    }
  
  send = () => {}
  }

export default Contact;
