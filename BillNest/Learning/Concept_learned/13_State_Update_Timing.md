# React Concept: State Update Timing

**Project:** BillNest  
**Day:** 5

===============================================================================
PURPOSE
===============================================================================

Understand what happens when a React State setter such as setCount() is called.

The key rule:

> Calling a State setter does not immediately change the State value used by
> the current function execution.

===============================================================================
BASIC EXAMPLE
===============================================================================

```jsx
const [count, setCount] = useState(5);

function increase() {

    console.log(count);

    setCount(count + 1);

    console.log(count);
}
When the button is clicked:

First console.log  → 5


setCount(count + 1)
                ↓
             setCount(6)


Second console.log → 5

Why does the second console still show 5?

Because the current function execution is using the State value from the
current render.

===============================================================================
FLOW
Current render
    ↓
count = 5
    ↓
User clicks button
    ↓
increase() executes
    ↓
setCount(6)
    ↓
Current execution still sees count = 5
    ↓
increase() finishes
    ↓
React performs another render
    ↓
Component executes again
    ↓
count = 6
===============================================================================
IMPORTANT

Do NOT think:

setCount(6)
    ↓
count immediately becomes 6

Think:

setCount(6)
    ↓
React is informed that State should change
    ↓
Current function finishes
    ↓
React re-renders
    ↓
New render gets count = 6
===============================================================================
C# COMPARISON

As a C# developer, use this only as a mental model:

void Increase()
{
    RequestStateUpdate(6);


    // Current execution is still using the current value.
    Console.WriteLine(5);
}


// Later, another render uses 6.

This is NOT React's actual internal implementation.

===============================================================================
BILLNEST EXAMPLE
import { useState } from "react";


function Cart() {


    const [cartCount, setCartCount] = useState(0);


    function addLaptop() {


        console.log(cartCount);


        setCartCount(cartCount + 1);


        console.log(cartCount);
    }


    return (
        <>
            <h1>Cart Items: {cartCount}</h1>


            <button onClick={addLaptop}>
                Add Laptop
            </button>
        </>
    );
}


export default Cart;

Initial:

cartCount = 0

Click Add Laptop:

Console:
0
0

Then React re-renders.

New State:

cartCount = 1

UI:

Cart Items: 1
===============================================================================
INTERVIEW QUESTION

Q: Does setCount() immediately change count?

A:

No.

The current function execution continues using the State value from the
current render. The updated value becomes available when React performs the
next render.

===============================================================================
KEY POINT TO REMEMBER
setCount()
    ↓
Request State update
    ↓
Current function continues
    ↓
Function finishes
    ↓
React re-renders
    ↓
New State value available