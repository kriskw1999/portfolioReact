import axios from "axios";
import { useState } from "react";
import Form from "./Form";

// Contact section that handles the request and send it to the backend server
const ContactSection = props => {

    // onSubmit the function calls the backend server with the form content
    const onSubmit = req => {
        axios
            .get(`https://portfoliokrzysztof.herokuapp.com/sendcontact/${req[0]}/${req[1]}/${req[2]}`)
            .then(res => {
                console.log(res);
                setSubmitted(<h1 className='m-top'>We will answer you soon!</h1>);
            })
            .catch(e => {
                console.log(e);
                setSubmitted(<h1 className='m-top'>An error occured...</h1>);
            })
        
    }


    const [submitted, setSubmitted] = useState(<Form handleSubmit={onSubmit}/>);

    if(props.displays){
        return(
            <>
                <h1>CONTACT ME</h1>
                <div className="contact-information-div">
                    <div className="information-section">
                        <div className="fa-container">
                            <i class="fas fa-phone"></i>
                        </div>
                        <p className='blue'>Phone</p>
                        <p>+39 3924704791</p>
                    </div>
                    <div className="information-section">
                        <div className="fa-container">
                            <i class="fas fa-map-marked"></i>
                        </div>
                        <p className='blue'>Adress</p>
                        <p>Gramsci street 109/2 Ovada</p>
                    </div>
                    <div className="information-section">
                        <div className="fa-container">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <p className='blue'>Email</p>
                        <p>kriskw1999@gmail.com</p>
                    </div>
                </div>
                {submitted}
                
            </>
        );
    }else
        return null;
}

export default ContactSection;