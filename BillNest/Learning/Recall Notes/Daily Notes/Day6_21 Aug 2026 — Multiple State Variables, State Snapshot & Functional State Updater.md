# Day 6 — React State Updates

## Topics Learned

1. Multiple State Variables
2. State Snapshot
3. Multiple State Updates
4. Functional State Updater
5. When to use the Functional State Updater
6. Applying State Updates to BillNest

---

# 1. Multiple State Variables

A React component can have multiple independent state variables.

```jsx
function Cart() {
    // Stores the number of items in the cart.
    const [cartCount, setCartCount] = useState(0);

    // Stores the total price of the cart.
    const [totalAmount, setTotalAmount] = useState(0);

    return (
        <>
            <h2>Cart: {cartCount} items</h2>
            <h2>Total: ₹{totalAmount}</h2>
        </>
    );
}
```

Each `useState()` creates a separate state value.

```text
cartCount   → number of products
totalAmount → total price
```

Changing `cartCount` does not directly change `totalAmount`.

### C# comparison

Conceptually, this is similar to having separate fields:

```csharp
string name;
int age;
decimal salary;
```

React state has its own update and rendering mechanism, but the idea of independent values is similar.

---

# 2. State Snapshot

Every render receives a snapshot of the current state.

Suppose:

```jsx
const [count, setCount] = useState(0);
```

The current render has:

```text
count = 0
```

Consider:

```jsx
function increase() {
    setCount(count + 1);

    // Still reads the current render's snapshot.
    console.log(count);
}
```

The console prints:

```text
0
```

The screen will display:

```text
1
```

after React performs the next render.

### Execution flow

```text
Render 1
count = 0
    ↓
Click
    ↓
setCount(1)
    ↓
console.log(count) → 0
    ↓
Function finishes
    ↓
React renders again
    ↓
Render 2
count = 1
```

### Important rule

`setCount()` does not immediately modify the `count` variable inside the currently executing function.

It requests a state update for a future render.

---

# 3. Multiple State Updates

Consider:

```jsx
const [count, setCount] = useState(0);

function increase() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
}
```

The current render has:

```text
count = 0
```

Therefore all three expressions use the same snapshot:

```text
setCount(0 + 1)
setCount(0 + 1)
setCount(0 + 1)
```

Effectively:

```text
setCount(1)
setCount(1)
setCount(1)
```

Final result:

```text
count = 1
```

They do NOT produce:

```text
0 → 1 → 2 → 3
```

because all three updates calculated their value from the same render snapshot.

---

# 4. Functional State Updater

When the next state depends on the previous state, React provides the functional updater form.

```jsx
setCount(previousCount => previousCount + 1);
```

Example:

```jsx
const [count, setCount] = useState(0);

function increase() {
    // Each updater receives the previous state value.
    setCount(previousCount => previousCount + 1);

    // This updater receives the result of the previous updater.
    setCount(previousCount => previousCount + 1);

    // This updater receives the result of the second updater.
    setCount(previousCount => previousCount + 1);
}
```

The updates can be understood as:

```text
0 → 1 → 2 → 3
```

Final result:

```text
count = 3
```

---

# 5. Normal Form vs Functional Form

## Normal form

```jsx
setCount(count + 1);
```

This uses the `count` value from the current render's snapshot.

If:

```text
count = 5
```

then:

```jsx
setCount(count + 1);
setCount(count + 1);
```

effectively becomes:

```text
setCount(6)
setCount(6)
```

Final result:

```text
6
```

---

## Functional form

```jsx
setCount(previousCount => previousCount + 1);
```

If:

```text
count = 5
```

then two updates can be processed as:

```text
5 → 6 → 7
```

Final result:

```text
7
```

---

# 6. When Should We Use Functional Updater?

Use the functional updater when the new state depends on the previous state.

For example:

```jsx
// The new cart count depends on the previous cart count.
setCartCount(previousCount => previousCount + 1);
```

This is especially useful when multiple updates may be queued.

For a state value that does not depend on its previous value, the normal form is often sufficient.

---

# 7. BillNest Application

BillNest has:

```jsx
const [cartCount, setCartCount] = useState(0);
const [totalAmount, setTotalAmount] = useState(0);
```

Adding a laptop:

```jsx
function addLaptop() {
    // Increase the number of products in the cart.
    setCartCount(previousCount => previousCount + 1);

    // Increase the total by the laptop price.
    setTotalAmount(totalAmount + 60000);
}
```

After adding one laptop:

```text
Cart: 1 item
Total: ₹60000
```

After adding another laptop:

```text
Cart: 2 items
Total: ₹120000
```

---

# Interview Questions

## 1. What is a state snapshot in React?

Each render receives its own snapshot of the component's state.

Updating state does not change the state variable inside the currently executing render.

---

## 2. What happens here?

```jsx
setCount(count + 1);
setCount(count + 1);
```

If `count` is `0`, the final value is:

```text
1
```

Both updates use the same `count = 0` snapshot.

---

## 3. How do you increment state multiple times correctly?

Use the functional updater:

```jsx
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
```

Starting from `0`, the result is:

```text
2
```

---

## 4. When should you use the functional state updater?

When the next state depends on the previous state.

Example:

```jsx
setCartCount(previousCount => previousCount + 1);
```

---

## 5. Does `setCount()` immediately change `count`?

No.

```jsx
setCount(count + 1);
console.log(count);
```

The `console.log()` still sees the current render's snapshot.

---

# Key Takeaways

```text
Multiple State Variables
        ↓
Each useState creates separate state
        ↓
State Snapshot
        ↓
Each render has its own state snapshot
        ↓
Multiple normal updates use the same snapshot
        ↓
Functional Updater
        ↓
Each updater receives the previous state
```

Most important rule:

> If the next state depends on the previous state, use the functional updater.

---

# Next Lesson

Continue with the next concept in the React learning roadmap.

Do NOT restart React fundamentals.