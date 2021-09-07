import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import './Introduction.css'

export const Introduction = () => {

    return(
        <div className="introductionMainContainer">
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="introductionTitle">Hello world! <br></br> I'm Mateo_</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag={"<h3>"}></HtmlTag>
                <p className="introductionText">Interaction designer and Web developer</p>
            <HtmlTag tag={"</h3>"}></HtmlTag>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={800}>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="introductionBtn">Send message!</motion.button>
            </Link>
            <motion.div 
            animate={{ y: -10 }}
            transition={{yoyo: Infinity}}
            className="introductionImgContainer">
                <img className="introductionImgC" src='./img/scrolldown.png' />
            </motion.div>
        </div>
    );
}