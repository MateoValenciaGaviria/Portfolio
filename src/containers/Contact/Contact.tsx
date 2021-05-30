import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { motion } from 'framer-motion';
import './Contact.css'

export const Contact = () =>{

    return(
        <div className="contactContainer" id="contact">
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="contactTitle">Get in touch</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag={"<form>"}></HtmlTag>
            <div className="formContainer">
                <form action="67d77d22314cccd07704784816192aae" method="POST">
                    <div className="formInputsContainer">
                        <div className="formPersonalData">
                            <input className="formInputs" name="name" placeholder="Name" type="text" required/>
                            <input className="formInputs" name="email" placeholder="Email" type="email" required/>
                        </div>
                        <div className="formMessageData">
                            <input className="formInputs" name="_subject" placeholder="Subject" type="text"/>
                            <textarea className="formInputs message" name="message" placeholder="Write your message here!" cols={30} rows={10}></textarea>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://mateovalenciagaviria.github.io/Portfolio/#/Portfolio/ThanksPage" />
                        </div>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}  
                        className="contactBtn" type="submit">Send message!</motion.button >
                </form>
            </div>
            <HtmlTag tag={"</form>"}></HtmlTag>
        </div>
    );
}