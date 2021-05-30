import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThankYouPage.css'

export const ThankYouPage = () =>{

    return(
        <div>
            <HtmlTag tag={"<html>"}></HtmlTag>
                <HtmlTag tag={"⠀<body>"}></HtmlTag>
                    <HtmlTag tag={"⠀⠀<h1>"}></HtmlTag>
                        <p className="profileTitle">⠀Thank you for your message!</p>
                    <HtmlTag tag={"⠀⠀</h1>"}></HtmlTag>
                    <Link to="/Home">
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}  
                            className="goBackBtn">Go back!</motion.button>
                    </Link>
                <HtmlTag tag={"⠀</body>"}></HtmlTag>
            <HtmlTag tag={"</html>"}></HtmlTag>
        </div>
    );
}