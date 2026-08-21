# React Learning — Day 5

**Date:** 20 August 2026  
**Project:** BillNest  
**Focus:** React State, State Updates, Re-rendering, Multiple State Variables

---

## 1. Concepts Learned

- `useState()`
- State value vs State setter
- State preservation between renders
- Re-rendering
- `setState()` is not an immediate mutation
- Function reference vs function call
- `return` in a React component
- Direct State modification
- `count++` vs `setCount()`
- Multiple State variables
- Multiple State updates in one event
- State as a snapshot
- BillNest cart example

---

## 2. `useState()`

```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

Think of it as:

```text
count
    ↓
Current State value

setCount
    ↓
Function used to request a State update
```

`count` and `setCount` are **not compared**.

```text
count     → data/value
setCount  → function
```

---

## 3. State Is Preserved Between Renders

```jsx
const [count, setCount] = useState(5);
```

First render:

```text
count = 5
```

After:

```jsx
setCount(6);
```

React re-renders and the next render has:

```text
count = 6
```

It does not reset to `5`.

Important mental model:

> The component function executes again, but React preserves the State between renders.

---

## 4. What Is a Re-render?

A re-render means React executes the component function again to generate updated JSX.

Flow:

```text
State changes
    ↓
React executes component again
    ↓
New JSX
    ↓
Virtual DOM comparison
    ↓
Necessary Real DOM update
```

A re-render does not mean React blindly recreates the entire browser page.

---

## 5. `setCount()` Does Not Immediately Change `count`

```jsx
function Counter() {

    const [count, setCount] = useState(5);

    function increase() {

        console.log(count);

        setCount(count + 1);

        console.log(count);
    }

    return (
        <button onClick={increase}>
            Increase
        </button>
    );
}
```

After one click:

```text
First console.log → 5

setCount(6)

Second console.log → 5
```

Then the function finishes and React re-renders.

New State:

```text
count = 6
```

Rule:

> `setCount()` requests a State update. It does not immediately change the `count` value used by the current function execution.

---

## 6. Complete State Update Flow

```text
Button click
    ↓
Event handler executes
    ↓
setCount(newValue)
    ↓
React schedules State update
    ↓
Current function continues
    ↓
Current function finishes
    ↓
React re-renders component
    ↓
Component executes again
    ↓
New State value is available
    ↓
New JSX is generated
    ↓
Old Virtual DOM vs New Virtual DOM
    ↓
Necessary Real DOM update
    ↓
Browser UI changes
```

---

## 7. Function Reference vs Function Call

Correct:

```jsx
<button onClick={increase}>
    Increase
</button>
```

`increase` is a **function reference**.

React stores the function and calls it when the click occurs.

Incorrect:

```jsx
<button onClick={increase()}>
    Increase
</button>
```

`increase()` calls the function immediately during rendering.

### C# comparison

React:

```jsx
<button onClick={increase}>
```

is conceptually similar to:

```csharp
button.Click += Increase;
```

Whereas:

```csharp
Increase();
```

means execute the method now.

---

## 8. `return` in a React Component

A React component is a JavaScript function.

```jsx
function Counter() {

    console.log("Start");

    function increase() {
        console.log("Increase");
    }

    console.log("Middle");

    return (
        <>
            <h1>Counter</h1>
        </>
    );

    console.log("End");
}
```

Execution:

```text
Counter()
    ↓
"Start"
    ↓
Create increase function
    ↓
"Middle"
    ↓
return JSX
    ↓
Function ends
```

`"End"` never executes because it is after `return`.

This is the same basic behavior as C#:

```csharp
public string GetMessage()
{
    Console.WriteLine("Start");

    return "Hello";

    Console.WriteLine("End");
}
```

---

## 9. Direct State Modification Is Wrong

Do not do:

```jsx
count++;
```

or:

```jsx
count = 10;
```

Use the State setter:

```jsx
setCount(count + 1);
```

React needs to be informed that State changed.

---

## 10. `count++` vs `setCount()`

### Direct modification

```jsx
count++;
```

Conceptually:

```text
count changes
    ↓
React is not informed
    ↓
No State-driven re-render
    ↓
UI stays unchanged
```

But JavaScript can still read the changed local value:

```jsx
count++;

console.log(count);
```

The console can show the changed value even though the React UI did not update.

### State setter

```jsx
setCount(count + 1);
```

Conceptually:

```text
Request State update
    ↓
React knows State changed
    ↓
Re-render
    ↓
New JSX
    ↓
Virtual DOM comparison
    ↓
UI update
```

---

## 11. Example: `count++`

```jsx
function Counter() {

    const [count, setCount] = useState(0);

    function increase() {

        count++;

        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>
        </>
    );
}
```

After clicking once:

```text
console.log → 1
```

But UI remains:

```text
0
```

Why?

```text
count++
    ↓
Value changes
    ↓
React is not informed
    ↓
No re-render
    ↓
UI remains 0
```

---

## 12. Multiple State Variables

A component can have multiple independent State variables:

```jsx
const [userName, setUserName] = useState("Anwar");

const [cartCount, setCartCount] = useState(0);

const [totalAmount, setTotalAmount] = useState(0);
```

Each has its own State and setter:

```text
userName     → setUserName()
cartCount    → setCartCount()
totalAmount  → setTotalAmount()
```

---

## 13. BillNest Cart Example

```jsx
import { useState } from "react";

function Cart() {

    const [cartCount, setCartCount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    function addLaptop() {

        setCartCount(cartCount + 1);

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
```

Initial State:

```text
cartCount = 0
totalAmount = 0
```

After clicking Add Laptop:

```text
cartCount → 1
totalAmount → 60000
```

UI:

```text
Cart Items: 1
Total Amount: ₹60000
```

---

## 14. Multiple State Setters in One Function

```jsx
function addLaptop() {

    setCartCount(cartCount + 1);

    setTotalAmount(totalAmount + 60000);
}
```

If the current values are:

```text
cartCount = 0
totalAmount = 0
```

React receives update requests equivalent to:

```text
setCartCount(1)
setTotalAmount(60000)
```

The current function does not immediately see the new values.

After the component re-renders:

```text
cartCount = 1
totalAmount = 60000
```

---

## 15. Multiple `setCount()` Calls

```jsx
function increase() {

    setCount(count + 1);

    setCount(count + 1);

    setCount(count + 1);
}
```

If:

```text
count = 0
```

all three statements use the current render's `count` value:

```text
0
```

So they effectively request:

```text
setCount(1)
setCount(1)
setCount(1)
```

Result:

```text
count = 1
```

Not:

```text
count = 3
```

The functional updater syntax for sequential updates is a separate topic.

---

## 16. State Behaves Like a Snapshot

Suppose the current render has:

```text
count = 5
```

Then:

```jsx
setCount(6);

console.log(count);
```

still prints:

```text
5
```

because the current render's `count` is still 5.

Flow:

```text
Current render
    ↓
count = 5
    ↓
setCount(6)
    ↓
Current render still sees 5
    ↓
Function finishes
    ↓
Next render
    ↓
count = 6
```

---

## 17. C# Mental Model

For a C# developer, use this approximate mental model:

```csharp
void Increase()
{
    RequestStateUpdate(6);

    // Current execution still uses the current value
    Console.WriteLine(5);
}

// Later:
Render(6);
```

This is not React's implementation. It is only a mental model for understanding State timing.

---

# 18. Interview Questions

### Q1. What is `useState()`?

`useState()` is a React Hook used to add State to a functional component.

### Q2. What does `setCount()` do?

It requests a State update and causes React to schedule a re-render.

### Q3. Does `setCount()` immediately change `count`?

No. The current function execution continues with its current State value. The updated State is available on the next render.

### Q4. Why shouldn't we use `count++`?

Because directly modifying State does not properly notify React that the State changed, so React does not perform the required State-driven re-render.

### Q5. What is a re-render?

A re-render means React executes the component function again to generate updated JSX.

### Q6. What happens after State changes?

```text
State update requested
    ↓
Component re-renders
    ↓
New JSX
    ↓
Virtual DOM comparison
    ↓
Necessary DOM update
```

### Q7. Difference between `onClick={increase}` and `onClick={increase()}`?

```jsx
onClick={increase}
```

passes the function reference.

```jsx
onClick={increase()}
```

executes the function immediately during rendering.

### Q8. Why doesn't State reset when the component function executes again?

React preserves the component's State between renders and provides the stored State during the next execution.

### Q9. Can a component have multiple State variables?

Yes.

```jsx
const [cartCount, setCartCount] = useState(0);

const [totalAmount, setTotalAmount] = useState(0);
```

### Q10. What happens here?

```jsx
setCount(count + 1);
console.log(count);
```

If the current State is `5`, the `console.log()` prints:

```text
5
```

The updated value becomes available after React re-renders.

---

# 19. Day 5 Final Mental Model

```text
User clicks button
        ↓
Event handler runs
        ↓
setState() is called
        ↓
React schedules State update
        ↓
Current function continues
        ↓
Current State value does not immediately change
        ↓
Function finishes
        ↓
React re-renders component
        ↓
Component function executes again
        ↓
New State value is available
        ↓
New JSX is generated
        ↓
Old Virtual DOM vs New Virtual DOM
        ↓
Necessary Real DOM changes
        ↓
Browser UI updates
```

---

# 20. BillNest Connection

Eventually BillNest will have State such as:

```jsx
const [cartCount, setCartCount] = useState(0);

const [totalAmount, setTotalAmount] = useState(0);

const [products, setProducts] = useState([]);
```

Typical flow:

```text
User clicks Add
    ↓
Event handler
    ↓
State setter
    ↓
React re-render
    ↓
Updated BillNest UI
```

---

# Day 5 Checklist

- [x] Understand `useState()`
- [x] Understand State value vs State setter
- [x] Understand State preservation
- [x] Understand re-rendering
- [x] Understand `setState()` is not an immediate mutation
- [x] Understand function reference vs function call
- [x] Understand `return` in a component
- [x] Understand direct State modification is wrong
- [x] Understand `count++` vs `setCount()`
- [x] Understand multiple State variables
- [x] Understand multiple State setters in one event
- [x] Understand State as a snapshot
- [x] Apply State concepts to BillNest

---

# What Comes Next

**Next topic: Functional State Updates**

We will learn why:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

results in `1` when starting from `0`, and how:

```jsx
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
```

can correctly process three sequential updates.
