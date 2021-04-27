import React from 'react';
import './HtmlTag.css'

interface HtmlTagProps{
    tag: string,
}

export const HtmlTag: React.FC<HtmlTagProps> = ( { tag } ) =>{

    return(
        <p className='tagStyle'>
            {tag}
        </p>
    );
}