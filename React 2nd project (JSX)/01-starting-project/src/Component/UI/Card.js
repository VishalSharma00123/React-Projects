import style from 'styled-components';
const Stylediv = style.div`
background:white;
box-shadow:0 2px 8px rgba(0,0,0,0.26);
border-radius:10px;
`
const Card = props => {
    // here we are explicitly defining className for the custom component
    // and we can provide out custome names for defining classes like here i used my className as myclass and inside myclass i can store all the css properties in Card custom component
    return <Stylediv className={props.myclass}>{props.children}</Stylediv>
}
export default Card;