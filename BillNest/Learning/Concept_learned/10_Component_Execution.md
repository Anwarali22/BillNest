# React Component Execution

## Core Idea

A function component is a JavaScript function.

Example:

```jsx
function Counter() {
    console.log("Counter running");

    return <h2>Counter</h2>;
}
```

React executes the function when it renders the component.

---

## It Is Not Permanently Running

A component function does not continuously run like a background process.

Instead:

```text
React needs UI
      ↓
React executes component
      ↓
Component returns JSX
```

---

## State Update

When State changes:

```text
setState()
    ↓
React schedules another render
    ↓
Component function executes again
    ↓
New JSX is produced
```

This is why code at the top level of a component can run again after a state update.

---

## Example

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    console.log("Counter running");

    function increase() {
        setCount(count + 1);
    }

    return (
        <button onClick={increase}>
            {count}
        </button>
    );
}
```

Initial render:

```text
Counter running
```

After clicking:

```text
increase()
    ↓
setCount()
    ↓
React re-renders
    ↓
Counter function runs again
```

Therefore:

```text
"Counter running"
```

appears again.

---

## Return Statement

Code after a return statement is unreachable in that function execution.

```jsx
function Example() {
    return <h1>Hello</h1>;

    console.log("This won't execute");
}
```

The `console.log` is never reached.

---

## Key Takeaways

- Function components execute when React renders them.
- State updates can cause them to execute again.
- A component function is not permanently running.
- The returned JSX represents the component's UI output.
