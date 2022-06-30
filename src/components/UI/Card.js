import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;  // classes is uded to combine the class given in this file and the incoming class from the classname
    return <div className={classes}>{props.children}</div>
    //props.children is used to get the children object from the File we are using.
}
export default Card;