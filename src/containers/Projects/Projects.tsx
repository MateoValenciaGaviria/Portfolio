import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { ProjectView } from '../../components/ProjectView/ProjectView';
import './Projects.css'

export const Projects = () =>{

    return(
        <div className='projectsMainContainer' id="projects">
            <HtmlTag tag={"<h1>"}></HtmlTag>
                <p className="projectsTittle">My projects</p>
            <HtmlTag tag={"</h1>"}></HtmlTag>
            <HtmlTag tag = {"<section>"}></HtmlTag>
                <div className='projectsContainer'>
                    <ProjectView
                    imgSrc = {'/img/msiBrand.png'}
                    tittle = {'Msi Website redesign'}
                    text = {'Website design and development'}
                    linkProject = {'/Project_msi_redesign'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/marca.png'}
                    tittle = {'Personal branding'}
                    text = {'Concept and construction'}
                    linkProject = {'/Project_personal_brand'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/knightsFightBanner.png'}
                    tittle = {'Knights fight'}
                    text = {'Video game concept and development'}
                    linkProject = {'/Project_knights_fight'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/tendiBanner.png'}
                    tittle = {'Tendi App'}
                    text = {'Mobile application development'}
                    linkProject = {'/Project_tendi'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/bristoBanner.png'}
                    tittle = {'Bristo del G'}
                    text = {'Mobile application development'}
                    linkProject = {'/Project_bristo'}></ProjectView>
                    <ProjectView
                    imgSrc = {'/img/abstractSoundBanner.png'}
                    tittle = {'Abstract Sound of Amazons'}
                    text = {'Concept and web development'}
                    linkProject = {'/Project_abstract_sound_of_amazons'}></ProjectView>
                </div>
            <HtmlTag tag = {"</section>"}></HtmlTag>
        </div>
    );
}