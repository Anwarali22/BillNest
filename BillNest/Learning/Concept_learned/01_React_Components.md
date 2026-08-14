# React Components

## What Is a Component?

A React component is a reusable unit of UI.

In the learning model used so far, a function component is a JavaScript function that returns JSX.

```jsx
function ProductCard() {
    return <h2>Laptop</h2>;
}
```

The component describes what UI should be produced.

---

## Why Components Exist

Without components, a large application would become one large UI definition.

Components allow the UI to be divided into smaller logical pieces.

For BillNest, possible components could eventually include:

```text
App
├── Header
├── Sidebar
├── Dashboard
├── ProductList
├── ProductCard
└── Invoice
```

Each component has a focused responsibility.

---

## Component Reuse

A component can be used multiple times.

```jsx
function ProductCard() {
    return <h2>Product</h2>;
}

function App() {
    return (
        <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </>
    );
}
```

The same component can appear multiple times.

Props later allow each instance to receive different data.

---

## C# Comparison

A useful conceptual comparison is a reusable method or UI control.

```text
React Component
    ≈
Reusable UI unit / method-like function
```

The comparison is not exact.

A React function component participates in React's rendering system.

---

## Component Execution

A function component executes when React renders it.

```jsx
function Counter() {
    console.log("Counter running");

    return <h2>Counter</h2>;
}
```

The function is not permanently running.

React calls it when it needs its UI output.

---

## Key Takeaways

- Components divide UI into reusable units.
- Function components are JavaScript functions that return JSX.
- Components can be reused.
- Props make reused components capable of displaying different data.
- State allows components to manage changing data.
