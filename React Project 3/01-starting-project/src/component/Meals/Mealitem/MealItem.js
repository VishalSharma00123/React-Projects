import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const totalprice = `$${props.totalprice.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.username,
            amount: amount,
            price: props.totalprice,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.username}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.totalprice}>{totalprice}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;