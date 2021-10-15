import { useState } from "react";

// Form request
const Form = (props) => {

    const [req, setReq] = useState(['','','']);

    const handleChange = e => {
        let arr = req;
        arr[e.target.id] = e.target.value;
        setReq(arr);
    }

    const prevDef = e => {
        e.preventDefault();
        props.handleSubmit(req)
    }

    return (
        <form className='form-request' autoComplete="off" onSubmit={prevDef}>
            <label>Name:</label>
            <input id="0" type='text' text={req[1]} onChange={handleChange}/>
            <label>E-mail:</label>
            <input id="1" type='email' text={req[2]} onChange={handleChange}/>
            <label>Request:</label>
            <textarea id="2" type='text' rows='2' value={req[3]} onChange={handleChange}/>
            <button type='submit'>SUBMIT</button>
        </form>
    )
}

export default Form;