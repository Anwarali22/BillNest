
import { useState } from "react";

function CartCounter() {
    //state1: Number of items in the cart
    // const [cartCount, setCartCount] = useState(0);
    const [cartCount, setCartCount] = useState(
        {
            count: 0,
            totalAmount: 0
        });

    //state2: Total amount of items in the cart
    // const [totalAmount, setTotalAmount] = useState(0);

    const [user, setUser] = useState(
        {
            name: "John Doe",
            age: 36
        });
    const Updateuser = {
        ...user,
        age: 38
    };


    const products = [
        { id: 1, name: "Laptops", price: 60000 },
        { id: 2, name: "Mouses", price: 300 }
    ];
    const cartCounters = 1;
    function addLaptop() {
        // Increase the cart count
        // setCartCount(cartCount + 1);
        // Add the laptop price
        // setTotalAmount(totalAmount + 60000);

        // setCartCount(cartCount => cartCount + 1);

        // const updateCartCount = {
        //     ...cartCount,
        //     count: cartCount.count + 1,
        //     totalAmount: cartCount.totalAmount + 60000


        // };

        setCartCount({
            ...cartCount,
            count: cartCount.count + 1,
            totalAmount: cartCount.totalAmount + 60000


        });


    }

    return (
        <>
            <h1>Cart Items:{cartCount.count}</h1>
            <h1>Total Amount:₹{cartCount.totalAmount}</h1>
            <h1>user name:{Updateuser.name}</h1>
            <h1>user age:{Updateuser.age}</h1>
            <button onClick={addLaptop}>Add Laptop</button>
            <h3>carts:{cartCounters}</h3>
            {
                cartCounters != 0 ? <button>checkout</button> : <h1>Cart is empty</h1>

            }
            <p>------------------------------------</p>
            {products.map(product => (
                <Products key={product.id} product={product}
                />
            ))}
        </>
    );
}
export default CartCounter;