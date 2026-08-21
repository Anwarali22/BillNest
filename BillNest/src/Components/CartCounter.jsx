
import { useState } from "react";

function CartCounter() {
    //state1: Number of items in the cart
    const [cartCount, setCartCount] = useState(0);

    //state2: Total amount of items in the cart
    const [totalAmount, setTotalAmount] = useState(0);


    function addLaptop() {
        // Increase the cart count
       // setCartCount(cartCount + 1);
        // Add the laptop price
        setTotalAmount(totalAmount + 60000);

        setCartCount(cartCount => cartCount + 1);

    }

    return (
        <>
            <h1>Cart Items:{cartCount}</h1>
            <h1>Total Amount:₹{totalAmount}</h1>
            <button onClick={addLaptop}>Add Laptop</button>
        </>
    );
}
export default CartCounter;