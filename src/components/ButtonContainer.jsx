import React, {useState } from 'react';
import MenuButton from './MenuButton';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import KnowledgeSection from './KnowledgeSection';
import ProjectsSection from './ProjectsSection';
import '../styles/mainStyles.css';

// Contains all the section buttons 
const ButtonContainer = (props) => {

    let [menuOpened, setMenuOpened] = useState(false);
    const containerClass = 'button-container button-container-'

    let [buttons, setButtons] = useState([
        {
            id:'about',
            text:'About me',
            clicked: true,
            section: AboutMeSection,
        }, {
            id:'projects',
            text:'Projects',
            clicked: false,
            section: ProjectsSection,
        }, {
            id:'knowledge',
            text:'Knowledge',
            clicked: false,
            section: KnowledgeSection,
        }, {
            id:'contact',
            text:'Contact me',
            clicked: false,
            section: ContactSection,
        },
    ]);

    const handleChangeSection = id => {
        setMenuOpened(!menuOpened)
        setButtons(buttons.map(e => {
            if(e.id === id){
                e.clicked = true;
                return e;  
            } else {
                e.clicked = false;
                return e; 
            }
        }))
        props.onChangeSection(buttons);
    }

    const openMenu = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <div className='main-button-container-div'>
            <div className="fa-container only-mobile" onClick={openMenu}>
                <i className="fas fa-bars"/>
            </div>
            <div className={containerClass + menuOpened}>
                <div className="fa-container only-mobile" onClick={openMenu} >
                    <i className="fas fa-times"/>
                </div>
                
                {buttons.map(e => 
                    <MenuButton key={e.id} id={e.id} text={e.text} clicked={e.clicked} onChangeSection={handleChangeSection}/>
                )}
            </div>
        </div>
    );
}    
 
export default ButtonContainer;