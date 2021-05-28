import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import './Profile.css'

export const Profile = () =>{

    return(
        <div className='profileMainContainer'>
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="profileTitle">Profile</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
        </div>
    );
}