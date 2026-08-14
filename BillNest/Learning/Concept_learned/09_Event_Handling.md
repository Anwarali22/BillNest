# React Event Handling

## What Is an Event?

An event represents something that happens in the UI.

Examples:

- button click
- input change
- form submission
- mouse movement

---

## React Example

```jsx
function Counter() {
    function increase() {
        console.log("Clicked");
    }

    return (
        <button onClick={increase}>
            Increase
        </button>
    );
}
```

The `onClick` prop connects the button click to the function.

---

## Important Distinction

Use:

```jsx
onClick={increase}
```

not:

```jsx
onClick={increase()}
```

The first gives React the function to call when the event occurs.

The second calls the function while rendering.

---

## C# Comparison

A useful analogy is:

```text
React onClick
    ≈
C# Button.Click event
```

In C# you might subscribe to:

```csharp
button.Click += Button_Click;
```

React uses JSX event props such as:

```jsx
<button onClick={increase}>
```

The implementations are different, but the event-driven idea is similar.

---

## Event + State

Events commonly cause state updates.

```text
User clicks
    ↓
Event handler runs
    ↓
setState()
    ↓
React schedules render
    ↓
UI updates
```

---

## Key Takeaways

- Events represent user interactions.
- React provides event props such as `onClick`.
- Event handlers are functions.
- Event handlers commonly update State.
