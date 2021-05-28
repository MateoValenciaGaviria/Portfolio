import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { Link } from 'react-router-dom';
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
                        <button className="goBackBtn">Go back!</button>
                    </Link>
                <HtmlTag tag={"⠀</body>"}></HtmlTag>
            <HtmlTag tag={"</html>"}></HtmlTag>
        </div>
    );
}