import React, {Component} from 'react';
import Mailchimp from 'react-mailchimp-form';
import Dafna from '../media/letters/Dafna-logo.png';
import close from '../media/icons/close.svg';

import './Mail.css';

export default class Mail extends Component{

  onClose = (e) =>{
    if(e.target.className === "Mail" || e.target.className === "close"){
      this.props.onClose && this.props.onClose(e);
    }
  }
  render(){
    if(this.props.show || localStorage.getItem('seen') === null){
      return(
        <div className="Mail" onClick={e => {this.onClose(e);}}>
        <div className="Mail-Modal">
        <div className="header">
        <img src={close} onClick={e => {this.onClose(e);}} className="close" alt="close"></img>
        </div>
        <img src={Dafna} className="logo" alt="logo"></img>
        <p className="text">Let's stay in touch!</p>
        <Mailchimp
                className="Mailchimp-Form"
                action={process.env.REACT_APP_MAILCHIMP_URL}
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  },
                  {
                    name: 'FNAME',
                    placeholder: 'First Name',
                    type: 'text',
                    required: true
                  },
                  {
                    name: 'LNAME',
                    placeholder: 'Last Name',
                    type: 'text',
                    required: true
                  }
                ]}
                messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "Please enter your email.",
                  duplicate: "You have already subscribed with this email address",
                  button: "Subscribe"
                }
                }
            />
        </div>
        </div>
        );
    }
    else{
      return null;
    }
  }
}


