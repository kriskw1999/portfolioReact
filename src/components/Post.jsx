import ButtonContainer from './ButtonContainer';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import KnowledgeSection from './KnowledgeSection';
import ContactSection from './ContactSection';
import React, { useState } from 'react';

const Post = () => {

    const [toDisplay, setToDisplay] = useState([{clicked:true},{clicked:false},{clicked:false},{clicked:false}]);

    const handleChangeSection = section => {
        setToDisplay(section);
    }
    
    return (
        <div className='post-box'>
            <ButtonContainer onChangeSection={handleChangeSection}/>
            <div className='information'>
                <AboutMeSection displays={toDisplay[0].clicked}/>
                <ProjectsSection displays={toDisplay[1].clicked}/>
                <KnowledgeSection displays={toDisplay[2].clicked}/>
                <ContactSection displays={toDisplay[3].clicked}/>
            </div>
        </div>
    );
    
}
 
export default Post;