import React from 'react';
import './ProjectView.css'

interface ProjectViewProps{
    imgSrc: string,
    tittle: string,
    text: string, 
}

export const ProjectView: React.FC<ProjectViewProps> = ( {imgSrc, tittle, text} ) =>{

    return(
        <div className='projectViewContainer'>
            <div className='projectViewImgContainer'>
                <img className='projectViewImg' src = {imgSrc} />
            </div>
            <p className='projectViewTittle'> {tittle} </p>
            <p className='projectViewText'> {text} </p>
        </div>
    );
}