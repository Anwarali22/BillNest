# React Fragments

## Problem

A component may need to return multiple sibling elements.

For example:

```jsx
return (
    <h1>BillNest</h1>
    <p>Dashboard</p>
);
```

This is not valid JSX because the returned structure needs one parent/root.

---

## Traditional Solution

Add a wrapper:

```jsx
return (
    <div>
        <h1>BillNest</h1>
        <p>Dashboard</p>
    </div>
);
```

But sometimes the wrapper has no semantic purpose and adds an unnecessary DOM element.

---

## Fragment Solution

React provides Fragments:

```jsx
return (
    <>
        <h1>BillNest</h1>
        <p>Dashboard</p>
    </>
);
```

The shorthand `<>...</>` is a Fragment.

---

## Why It Matters

Fragments allow multiple elements to be grouped for React without adding an unnecessary wrapper element to the DOM.

---

## Key Takeaways

- Components need a valid returned structure.
- A Fragment groups multiple elements.
- Fragments avoid unnecessary wrapper DOM elements.
