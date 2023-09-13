import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Custom from './custom'
function Todo(props) {
    return (
        <div>
            <header>
                <img src={keyConceptsImage} alt="Medal badge with a star" />
                <h1>Key React Concepts</h1>
                <p>Selected key React concepts you should know about</p>
            </header>
            <ul id="concepts">
                <Custom className="concept">
                    <img src={props.item[0].image} alt="TODO: TITLE" />
                    <h2>{props.item[0].title}</h2>
                    <p>{props.item[0].description}</p>
                </Custom>
                <Custom className="concept">
                    <img src={props.item[1].image} alt="TODO: TITLE" />
                    <h2>{props.item[1].title}</h2>
                    <p>{props.item[1].description}</p>
                </Custom>
                <Custom className="concept">
                    <img src={props.item[2].image} alt="TODO: TITLE" />
                    <h2>{props.item[2].title}</h2>
                    <p>{props.item[2].description}</p>
                </Custom>
            </ul>
        </div>
    )
}
export default Todo;