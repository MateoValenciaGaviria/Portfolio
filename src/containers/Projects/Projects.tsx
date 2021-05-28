import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { ProjectView } from '../../components/ProjectView/ProjectView';
import './Projects.css'

export const Projects = () =>{

    return(
        <div className='projectsMainContainer'>
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="projectsTittle">My projects</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag = {"<section>"}></HtmlTag>
                <div className='projectsContainer'>
                    <ProjectView
                    imgSrc = {'/img/msiBrand.png'}
                    tittle = {'Msi Website redesign'}
                    text = {'Website design and development'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/marca.png'}
                    tittle = {'Personal branding'}
                    text = {'Concept and construction'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/knightsFightBanner.png'}
                    tittle = {'Knights fight'}
                    text = {'Video game concept and development'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/tendiBanner.png'}
                    tittle = {'Tendi App'}
                    text = {'Mobile application development'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/marca.png'}
                    tittle = {'Bristo'}
                    text = {'Mobile application development'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/abstractSoundBanner.png'}
                    tittle = {'Abstract Sound of Amazons'}
                    text = {'Concept and web development'}></ProjectView>
                </div>
            <HtmlTag tag = {"</section>"}></HtmlTag>
        </div>
    );
}