
---

## 14_Direct_State_Modification.md

```markdown
# React Concept: Direct State Modification

**Project:** BillNest  
**Day:** 5

===============================================================================
PURPOSE
===============================================================================

Understand why React State should be updated through its State setter instead
of directly modifying the State variable.

===============================================================================
INCORRECT
===============================================================================

```jsx
const [count, setCount] = useState(0);

function increase() {

    count++;
}
Also incorrect:

count = 10;

The State variable should not be directly modified.

===============================================================================
CORRECT
setCount(count + 1);

The State setter tells React that the State should be updated.

===============================================================================
WHY count++ IS DIFFERENT

Normal JavaScript:

count++;

means:

Change the JavaScript value

But React needs to know that its State has changed.

Using:

setCount(count + 1);

means:

Request State update
        ↓
React knows State changed
        ↓
React re-renders the component
        ↓
New JSX is produced
        ↓
React updates the required DOM
        ↓
UI changes
===============================================================================
IMPORTANT

Do not think:

count++;

is equivalent to:

setCount(count + 1);

They are not the same in React.

The State setter is the correct way to update React State.

===============================================================================
C# COMPARISON

Normal C# variable:

int count = 0;


count++;

The variable changes directly.

React State:

const [count, setCount] = useState(0);


setCount(count + 1);

React State is managed by React, so use the setter to request the update.

===============================================================================
BILLNEST EXAMPLE

Incorrect:

function Cart() {


    const [cartCount, setCartCount] = useState(0);


    function addLaptop() {


        cartCount++;
    }


    return (
        <>
            <h1>{cartCount}</h1>


            <button onClick={addLaptop}>
                Add Laptop
            </button>
        </>
    );
}

Correct:

function Cart() {


    const [cartCount, setCartCount] = useState(0);


    function addLaptop() {


        setCartCount(cartCount + 1);
    }


    return (
        <>
            <h1>{cartCount}</h1>


            <button onClick={addLaptop}>
                Add Laptop
            </button>
        </>
    );
}
===============================================================================
C# MENTAL MODEL

Think:

cartCount++;

as changing a normal variable.

Whereas:

setCartCount(cartCount + 1);

means:

Update React-managed State
+
Inform React that the UI may need to update
===============================================================================
INTERVIEW QUESTION

Q: Why shouldn't React State be modified directly?

A:

Because React State should be updated through its setter. The setter allows
React to process the State update and re-render the component when required.

===============================================================================
KEY POINT TO REMEMBER

Wrong:

count++;

Correct:

setCount(count + 1);

React State → use the State setter.