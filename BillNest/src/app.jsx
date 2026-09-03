/*
===============================================================================
FILE : App.jsx

PURPOSE

Root Component

This component uses another component.

Header Component

===============================================================================
*/

// Import our Header Component.
//
// "./Components/Header"
//
// Means
//
// Current Folder
//
// ↓
//
// Components Folder
//
// ↓
//
// Header.jsx
//
import Header from "./Components/Header";
import CartCounter from "./Components/CartCounter";
import { ProductCard } from "./Components/ProductCard";


function App() {
    return (

        <>
            <Header />
            <ProductCard name="Laptop" price={60000} />
            <ProductCard name="Mouse" price={300} />
            <ProductCard name="Keyboard" price={1000} />
            <ProductCard name="Monitor" price={15000} />
            <CartCounter/>
        </>
    );
}

export default App;