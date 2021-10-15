import '../styles/mainStyles.css'

// About section displays all my personal information
const AboutMeSection = props => {

    const dates = [
        {
            fa: 'Name: ',
            sa: 'Krzysztof',
        }, {
            fa: 'Surname: ',
            sa: 'Witkowski',
        }, {
            fa: 'Born: ',
            sa: '06/03/1999 in Poland',
        }, {
            fa: 'Adress: ',
            sa: 'Ovada Italy',
        }, 
    ];

    const description = "I'm a full stack developer. Actually I am studying informatic engeneering in Italy.";
    const description2 = "If you would like to built your own website just today you are in the right place!"

    if(props.displays){
        return(
            <>
                <h1>ABOUT ME</h1>
                <div className='section-divider'>
                    <img className='profile-img' src='./profile_picture.png' alt="myself" />
                    <div className='text-container'>
                        <pre>
                        {dates.map(date=>
                            <div key={date.fa}>
                            <span className="white">{date.fa}</span>
                            <span className="blue">{date.sa}</span>
                            <br/><br/>
                            </div>
                        )}
                        </pre>
                    </div>
                </div>
                <div className='presentation-div'> 
                    <div className='div-rect blue-div-rect'>
                            <p className="grey">{description}</p>
                    </div>
                    <div className='div-rect grey-div-rect'>
                        <p className="white">{description2}</p>
                    </div>
                </div>
            </>
        );
    } else
        return null;
}

export default AboutMeSection;