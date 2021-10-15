import { useState } from "react";

// Displays all the knowledge information
const KnowledgeSection = props => {

    const [buttonClicked,setButtonClicked] = useState([true,false,false,false,false,false]);
    const [toDisplay,setToDisplay] = useState(0);

    const updateButtons = num => {
        setToDisplay(num);
        if(!buttonClicked[num]){
            let tmp = [false,false,false,false,false,false];
            tmp[num] = true;
            setButtonClicked(tmp);
        }
    }

    const sections = [
        {
            title: 'JavaScript',
            text: 'I have an excellent knowledge of JavaScript. I know how to perform asyncronous programming, some most advanced concepts that was introduced with ES6 like arrow functions and object destructuring.',
        }, {
            title: 'HTML5',
            text: 'I know all tags and attributes of HTML, I have a very good understanding of the tree component based structure.',
        }, {
            title: 'CSS',
            text: 'I know how to style, position and animate each element. I also know to adapt each style to the various devices',
        }, {
            title: 'Github',
            text: 'I am able to use a version control application like git, solving merging issues and creating high quality commits.',
        }, {
            title: 'Java',
            text: 'I know each concept of java language, I programmed a lot with android studio. Into my projects you can also find an application written in kotlin called Listener.',
        }, {
            title: 'React',
            text: 'I feel comfortable with React framework and all its concepts. I am able to perform tests and to write code with hooks and OOP. I also know how to perform testing and fetching remote API.',
        }
    ]

    if(props.displays){
    return(
        <div>
            <h1>KNOWLEDGE</h1>
            <div className="icons-container">
                <div className={"fa-container fa-" + buttonClicked[0]} onClick={()=>updateButtons(0)}>
                    <i class="fab fa-js-square"/>
                </div>    
                <div className={"fa-container fa-" + buttonClicked[1]} onClick={()=>updateButtons(1)}>
                    <i class="fab fa-html5"/>
                </div>    
                <div className={"fa-container fa-" + buttonClicked[2]} onClick={()=>updateButtons(2)}>
                    <i class="fab fa-css3-alt"/>
                </div>    
                <div className={"fa-container fa-" + buttonClicked[3]} onClick={()=>updateButtons(3)}>
                    <i class="fab fa-github"/>
                </div>    
                <div className={"fa-container fa-" + buttonClicked[4]} onClick={()=>updateButtons(4)}>
                    <i class="fab fa-java"/>
                </div>
                <div className={"fa-container fa-" + buttonClicked[5]} onClick={()=>updateButtons(5)}>
                    <i class="fab fa-react"/>
                </div>
            </div>
            <div className="knowledge-container">
                <p className="title-knowledge">{sections[toDisplay].title}</p>
                <p>{sections[toDisplay].text}</p>
            </div>
        </div>
    );
    }else 
        return null;
}

export default KnowledgeSection;