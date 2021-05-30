import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import './Profile.css'

export const Profile = () =>{

    return(
        <div className='profileMainContainer'>
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="profileTitle">Profile</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <div className="profileDescription">
                <div>
                    <HtmlTag tag={"<p>"}></HtmlTag>
                        <p className="profileText">I am a student of the interactive media designer major from the Icesi University of Cali Colombia.
                        <br></br>
                        <br></br>
                        Since my education at university, I have been involved 
                        a lot with programming and user experience design.
                        <br></br>
                        <br></br>
                        During my career I was a room monitor tthat helps with programming questions, both web and mobile, I also attended different programming activities, such as the programming club, the competitive programming club, the web development club, and others.
                        <br></br>
                        <br></br>
                        My passion for code started at my first semesters of systems engineering learning object-oriented programming in Java, but even though I was learning to program, I felt that I needed something more and that’s why I decided to change to the major of interactive media design. 
                        <br></br>
                        <br></br>
                        This helps me to reinforce this skills that I acquired to program and combine it with the design components seen in the major, whit this, I can develop functional, attractive, and high-quality digital products,  that will generate a good user experience.
                        <br></br>
                        <br></br>
                        I am currently looking for a company to bring about my professional practice and to put into practice my skills and knowledge that I have acquired in all this time.</p>
                    <HtmlTag tag={"</p>"}></HtmlTag>
                </div>
                <img className='profileWordsImg' src = {'./img/words.png'} />
            </div>
        </div>
    );
}