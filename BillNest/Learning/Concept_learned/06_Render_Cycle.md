# React Render Cycle

## What Is Rendering?

Rendering means React executes a component to determine what UI it should produce.

Example:

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return <h2>{count}</h2>;
}
```

The component execution produces UI based on the current state.

---

## Initial Render

A simplified initial flow:

```text
Application starts
      ↓
React renders component
      ↓
Component function executes
      ↓
JSX is returned
      ↓
React renders the UI
      ↓
Browser DOM is updated
```

---

## State Update

Later:

```text
User interaction
      ↓
setCount()
      ↓
React schedules update
      ↓
Component executes again
      ↓
New JSX/output
      ↓
React reconciles
      ↓
Required DOM changes
```

---

## Important Point

Calling a state setter does not mean:

```text
setState()
    ↓
direct DOM modification
```

Instead, think:

```text
setState()
    ↓
React schedules another render
    ↓
Component executes again
    ↓
React determines UI changes
```

---

## Why Does the Component Run Again?

The component function describes UI based on current data.

When that data changes, React needs a new result.

Therefore React executes the component again.

---

## Key Takeaways

- Rendering means React obtains the component's UI output.
- State updates can trigger another render.
- A re-render means the component function executes again.
- React then reconciles the new output with the previous output.
- The browser DOM is updated as necessary.
