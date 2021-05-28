import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import './Introduction.css'

export const Introduction = () => {

    return(
        <div className="introductionMainContainer">
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="introductionTitle">Hello world! <br></br> I'm Mateo_</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag={"<h3>"}></HtmlTag>
                <p className="introductionText">Interactive designer and Web developer</p>
            <HtmlTag tag={"</h3>"}></HtmlTag>
            <button className="introductionBtn">Send message!</button>
            <div className="introductionImgContainer">
                <img className="introductionImgC" src='/img/scrollDown.png' />
            </div>
        </div>
    );
}