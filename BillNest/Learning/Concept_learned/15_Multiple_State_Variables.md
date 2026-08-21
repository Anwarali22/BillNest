
---

## 15_Multiple_State_Variables.md

```markdown
# React Concept: Multiple State Variables

**Project:** BillNest  
**Day:** 5

===============================================================================
PURPOSE
===============================================================================

A React component can have multiple independent State variables.

This is important for BillNest because a real UI contains many pieces of
changing data.

===============================================================================
BASIC EXAMPLE
===============================================================================

```jsx
const [userName, setUserName] = useState("Anwar");

const [cartCount, setCartCount] = useState(0);

const [totalAmount, setTotalAmount] = useState(0);
Here we have three separate State variables.

userName
    ↓
setUserName()


cartCount
    ↓
setCartCount()


totalAmount
    ↓
setTotalAmount()

Each State has:

Current value
+
State setter
===============================================================================
C# COMPARISON

In C# you may have:

string userName = "Anwar";


int cartCount = 0;


double totalAmount = 0;

React has a similar idea:

const [userName, setUserName] = useState("Anwar");


const [cartCount, setCartCount] = useState(0);


const [totalAmount, setTotalAmount] = useState(0);

But React gives each State value a setter so React can manage UI updates.

===============================================================================
BILLNEST EXAMPLE
import { useState } from "react";


function Cart() {


    // Stores number of products in the cart.
    const [cartCount, setCartCount] = useState(0);


    // Stores total cart amount.
    const [totalAmount, setTotalAmount] = useState(0);


    function addLaptop() {


        // Increase cart item count.
        setCartCount(cartCount + 1);


        // Add laptop price.
        setTotalAmount(totalAmount + 60000);
    }


    return (
        <>
            <h1>Cart Items: {cartCount}</h1>


            <h1>Total Amount: ₹{totalAmount}</h1>


            <button onClick={addLaptop}>
                Add Laptop
            </button>
        </>
    );
}


export default Cart;
===============================================================================
INITIAL STATE
cartCount = 0


totalAmount = 0

UI:

Cart Items: 0
Total Amount: ₹0
===============================================================================
AFTER CLICKING ADD LAPTOP

React receives:

setCartCount(cartCount + 1);


setTotalAmount(totalAmount + 60000);

New State after the render:

cartCount = 1


totalAmount = 60000

UI:

Cart Items: 1
Total Amount: ₹60000
===============================================================================
MULTIPLE STATE SETTERS

One function can update multiple State variables:

function addLaptop() {


    setCartCount(cartCount + 1);


    setTotalAmount(totalAmount + 60000);
}

Each setter belongs to a different State variable.

setCartCount()
    ↓
cartCount changes


setTotalAmount()
    ↓
totalAmount changes
===============================================================================
IMPORTANT

Do not think:

setCartCount == setTotalAmount

They are different State setter functions.

cartCount     → setCartCount


totalAmount   → setTotalAmount
===============================================================================
C# MENTAL MODEL

Similar idea:

int cartCount = 0;


int totalAmount = 0;


void AddLaptop()
{
    cartCount++;


    totalAmount += 60000;


    RefreshUI();
}

In React:

function addLaptop() {


    setCartCount(cartCount + 1);


    setTotalAmount(totalAmount + 60000);
}

The important difference is that React manages the State and re-rendering.

===============================================================================
INTERVIEW QUESTION

Q: Can one React component have multiple State variables?

A:

Yes.

A component can use multiple useState() calls. Each State variable has its
own current value and State setter.

===============================================================================
KEY POINT TO REMEMBER

One Component:

    ├── State 1 → value + setter
    ├── State 2 → value + setter
    ├── State 3 → value + setter
    └── State 4 → value + setter

Multiple State variables are completely normal in React.
