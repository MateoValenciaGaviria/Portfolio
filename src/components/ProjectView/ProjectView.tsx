import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectView.css'

interface ProjectViewProps{
    imgSrc: string,
    tittle: string,
    text: string, 
    linkProject: string,
}

export const ProjectView: React.FC<ProjectViewProps> = ( {imgSrc, tittle, text, linkProject} ) =>{

    return(
        <div className='projectViewContainer'>
            <div className='projectViewImgContainer'>
                <Link to={linkProject}>
                    <img className='projectViewImg' src = {imgSrc} />
                </Link>
            </div>
            <p className='projectViewTittle'> {tittle} </p>
            <p className='projectViewText'> {text} </p>
        </div>
    );
}