import React from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
// <Fragment/> is alternate for <React.Fragment/>

function App(props) {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
    console.log(cartIsShown);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart closeIt={hideCartHandler} />}
      <Header Trigger={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
