import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
// import mealsImage from '../../assets/meals.jpg'
//we can also import image and bind it dynamicalii
const Header = (props) => {
    return (
        <React.Fragment>

            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton myTrigger={props.Trigger} />
            </header>
            <div className={classes["main-image"]}>
                {/* binding image dynamically */}
                < img
                    src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" alt="A table full of delciuos food" />
            </div>

        </React.Fragment >
    )
}

export default Header