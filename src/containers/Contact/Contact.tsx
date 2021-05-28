import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import './Contact.css'

export const Contact = () =>{

    return(
        <div className="contactContainer">
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="contactTitle">Get in touch</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag={"<form>"}></HtmlTag>
            <div className="formContainer">
                <form action="https://formsubmit.co/mateo.valencia.g@gmail.com" method="POST">
                    <div className="formInputsContainer">
                        <div className="formPersonalData">
                            <input className="formInputs" name="name" placeholder="Name" type="text" required/>
                            <input className="formInputs" name="email" placeholder="Email" type="email" required/>
                        </div>
                        <div className="formMessageData">
                            <input className="formInputs" name="_subject" placeholder="Subject" type="text"/>
                            <textarea className="formInputs message" name="message" placeholder="Write your message here!" cols={30} rows={10}></textarea>
                            <input type="hidden" name="_captcha" value="false"/>
                            {/* <input type="hidden" name="_next" value="/ThanksPage" /> */}
                        </div>
                    </div>
                    <button className="contactBtn" type="submit">Send message!</button>
                </form>
            </div>
            <HtmlTag tag={"</form>"}></HtmlTag>
        </div>
    );
}