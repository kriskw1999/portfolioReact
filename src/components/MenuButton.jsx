import '../styles/mainStyles.css'

// Buttons inside button container
const MenuButton = (props) => {

    const classes = "main-button clicked-";

    return  <button className={classes+props.clicked} onClick={()=> props.onChangeSection(props.id)}>{props.text}</button>;
    
}
 
export default MenuButton;