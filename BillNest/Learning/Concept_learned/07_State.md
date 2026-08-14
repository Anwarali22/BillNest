# React State

## What Is State?

State is data managed by a React component that can change over time.

Example:

```jsx
const [count, setCount] = useState(0);
```

Here:

```text
count
    = current state value

setCount
    = function used to update state
```

---

## Why State Exists

A normal JavaScript variable is not enough for React-managed UI state.

Example:

```jsx
function Counter() {
    let count = 0;

    function increase() {
        count++;
    }

    return <button onClick={increase}>{count}</button>;
}
```

Changing `count` does not tell React that the UI needs to be rendered again.

React therefore provides State.

---

## useState

Basic form:

```jsx
const [count, setCount] = useState(0);
```

The initial value is:

```text
0
```

The state variable is:

```text
count
```

The setter is:

```text
setCount
```

---

## Updating State

```jsx
setCount(count + 1);
```

This requests a state update.

React then schedules a new render.

---

## Render Flow

```text
User interaction
      ↓
setCount()
      ↓
React schedules update
      ↓
Component executes again
      ↓
New UI output
      ↓
Reconciliation
      ↓
DOM update
```

---

## C# Comparison

A useful conceptual analogy is:

```text
React State
≈
component-owned field + UI update mechanism
```

It is not an exact C# implementation equivalent.

---

## State Ownership

The component that declares the state owns it.

```jsx
function Counter() {
    const [count, setCount] = useState(0);
}
```

The `Counter` component owns `count`.

---

## State vs Props

```text
State
    Component owns and manages it

Props
    Parent provides it to the child
```

This distinction is fundamental.

---

## Common Mistakes

### Mistake 1

Thinking `setCount()` directly changes the DOM.

It triggers the React update/render process.

### Mistake 2

Thinking normal variables are equivalent to State.

They are not.

### Mistake 3

Confusing State ownership with Props ownership.

State belongs to the component that manages it; Props are supplied by the parent.

---

## Key Takeaways

- State is component-managed changing data.
- `useState()` provides state and its setter.
- State survives across renders.
- Calling the setter causes React to schedule an update.
- React executes the component again and reconciles the UI.
