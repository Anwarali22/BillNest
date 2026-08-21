# Functional State Updater

## What Is It?

The Functional State Updater is a form of React state update where we provide a function to the state setter.

```jsx
setCount(previousCount => previousCount + 1);
```

React provides the previous state value to the function.

---

# Normal State Update

```jsx
setCount(count + 1);
```

Here, `count` comes from the current render's state snapshot.

Example:

```jsx
const [count, setCount] = useState(5);

function increase() {
    setCount(count + 1);
    setCount(count + 1);
}
```

Both updates use:

```text
count = 5
```

So they effectively become:

```text
setCount(6)
setCount(6)
```

Final result:

```text
6
```

---

# Functional State Update

```jsx
setCount(previousCount => previousCount + 1);
```

Example:

```jsx
const [count, setCount] = useState(5);

function increase() {
    // First updater: 5 → 6
    setCount(previousCount => previousCount + 1);

    // Second updater: 6 → 7
    setCount(previousCount => previousCount + 1);
}
```

Final result:

```text
7
```

Conceptually:

```text
5 → 6 → 7
```

---

# Why Does It Work?

The normal form uses the current render's snapshot:

```jsx
setCount(count + 1);
```

The functional form tells React:

```text
"Take the previous state and calculate the next state from it."
```

React can therefore process multiple queued functional updates sequentially.

---

# BillNest Example

Suppose the cart currently contains 5 items:

```jsx
const [cartCount, setCartCount] = useState(5);
```

If two items need to be added in one operation:

```jsx
function addTwoItems() {
    // Add the first item based on the previous cart count.
    setCartCount(previousCount => previousCount + 1);

    // Add the second item based on the result of the first update.
    setCartCount(previousCount => previousCount + 1);
}
```

Result:

```text
5 → 6 → 7
```

Final:

```text
cartCount = 7
```

---

# When to Use It

Use the functional updater when the new state depends on the previous state.

Examples:

```jsx
// Increment based on previous value.
setCount(previousCount => previousCount + 1);

// Decrement based on previous value.
setCount(previousCount => previousCount - 1);

// Add an item based on the previous cart count.
setCartCount(previousCount => previousCount + 1);
```

---

# When It Is Not Necessary

If the new value does not depend on the previous value, a normal update is often sufficient.

```jsx
setName("Anwar");
setTotalAmount(60000);
```

These values are being directly replaced rather than calculated from the previous state.

---

# Interview Question

### Why would you use a functional state updater?

Answer:

> We use the functional state updater when the next state depends on the previous state. It allows React to provide the previous state value to the updater function and correctly process multiple queued state updates.

Example:

```jsx
setCount(previousCount => previousCount + 1);
```

---

# Important Rule

Remember:

```text
Next state depends on previous state
                ↓
       Functional updater
```

Example:

```jsx
setCartCount(previousCount => previousCount + 1);
```