const Form = (props) => {
    return (
        <form className='form-request' autoComplete="off" onSubmit={props.handleSubmit}>
            <label>Name:</label>
            <input type='text'/>
            <label>E-mail:</label>
            <input type='email'/>
            <label>Request:</label>
            <textarea type='text' rows='2'/>
            <button type='submit'>SUBMIT</button>
        </form>
    )
}

export default Form;