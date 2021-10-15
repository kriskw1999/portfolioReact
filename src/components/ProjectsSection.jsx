import {useState } from "react";

// Displays all the projects
const ProjectsSection = props => {

    const projects = [
        {
            id: 0,
            title: 'Listener',
            text: "Listener is a simple android application that allows to the user to create it's own shopping list. The layout is really easy created with xml compined with the main classes of AndroidStudio, the programming part is written in Kotlin and the database used to store the list on the mobile phone is SQLite. The app is already available on PlayStore.",
            fLink: 'https://play.google.com/store/apps/details?id=com.moltenbit.spoppinglist',
            fLinkText: 'Playstore',
            sLink: 'https://github.com/kriskw1999/Listener',
            sLinkText: 'Github',
            displaySecond: 'inline',
        },{
            id: 1,
            title: 'B&B Website',
            text: "La Foresteria del Passeggere is a Wordpress website that I created for a little holiday house here in Ovada. The website is mobile friendly, I also implemented SimpleForms to allow to the user To contact easily the owner of the B&B.",
            fLink: 'https://www.laforesteriadelpasseggere.it/',
            fLinkText: 'Website',
            sLink: '',
            sLinkText: 'Github',
            displaySecond: 'none',
        },{
            id: 2,
            title: 'React Portfolio Frontend',
            text: "You can find the link to the github repository of this project in the lik below.",
            fLink: 'https://github.com/kriskw1999/portfolioReact/',
            fLinkText: 'Github',
            sLink: '',
            sLinkText: 'Github',
            displaySecond: 'none',
        },{
            id: 3,
            title: 'React Portfolio Backend',
            text: "The backend allows to the user to send emails to me. The server repository is hosted on Heroku.",
            fLink: 'https://github.com/kriskw1999/PortfolioBackend/',
            fLinkText: 'Github',
            sLink: '',
            sLinkText: 'Github',
            displaySecond: 'none',
        }
    ];

    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [opacityZero, setOpacityZero] = useState('');

    const handleNextSection = () => {
        setOpacityZero('opacity-zero');
        setTimeout(() => {
            if(projects.length-1 === currentProject.id){
                console.log('a');
                setCurrentProject(projects[0]);
            } else {
                setCurrentProject(projects[currentProject.id+1]);
            }
            setOpacityZero('');  
        }, 410);
    }

    const handlePreviousSection = () => {
        setOpacityZero('opacity-zero');
        setTimeout(() => {
            if(currentProject.id === 0){
                console.log('a');
                setCurrentProject(projects[projects.length-1]);
            } else {
                setCurrentProject(projects[currentProject.id-1]);
            } 
            setOpacityZero('');  
        }, 410);
        
    }

    if(props.displays){
        return(
            <div className="projects-container">
                <h1>PROJECTS</h1>
                <div className="projects-main-div">
                    <i className="fas fa-chevron-left only-desktop" onClick={handlePreviousSection}/>
                    <div className="projects">
                        <div className={"project-displayed " + opacityZero}>
                            <p className="white project-title">{currentProject.title}</p>
                            <p className="white">{currentProject.text}</p>
                            <div className="a-container">
                                <a href={currentProject.fLink} target="_blank" rel="noreferrer">{currentProject.fLinkText}</a>
                                <a style={{display: currentProject.displaySecond}} href={currentProject.sLink} target="_blank" rel="noreferrer">{currentProject.sLinkText}</a>
                            </div>
                        </div>
                    </div>
                    <i className="fas fa-chevron-right only-desktop"  onClick={handleNextSection}/>
                </div>
                <button className="only-mobile next-project" onClick={handleNextSection}>Next</button>
            </div>
        );
    }else
        return null;
}

export default ProjectsSection;