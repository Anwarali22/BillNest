# React useState()

## Purpose

`useState()` is a React Hook used to add state to a function component.

Example:

```jsx
const [count, setCount] = useState(0);
```

---

## What It Provides

The result contains two important values:

```text
Current state value
        +
State update function
```

For:

```jsx
const [count, setCount] = useState(0);
```

we have:

```text
count
    → current value

setCount
    → update function
```

---

## Initial Value

```jsx
useState(0)
```

The initial state is `0`.

For a string:

```jsx
useState("Laptop")
```

For a boolean:

```jsx
useState(false)
```

---

## Updating

```jsx
setCount(count + 1);
```

The setter requests a state update.

React then schedules another render.

---

## Why Not Assign Directly?

This is not the correct React state update approach:

```jsx
count = count + 1;
```

Use:

```jsx
setCount(count + 1);
```

The setter is part of React's state management mechanism.

---

## Component Execution

After a state update, React can execute the component again.

```text
setCount()
    ↓
React schedules render
    ↓
Component function executes again
    ↓
Current state is available
    ↓
New JSX is produced
```

---

## Key Takeaways

- `useState()` gives a function component state.
- It provides the current value and an update function.
- Use the setter to request state changes.
- State updates can cause a re-render.
