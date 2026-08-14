# JSX

## What Is JSX?

JSX is syntax that allows UI-like markup to be written inside JavaScript.

```jsx
const element = <h1>BillNest</h1>;
```

It looks similar to HTML, but it is written inside JavaScript code.

---

## Why JSX Exists

Writing complex UI creation entirely as JavaScript function calls would be difficult to read.

JSX makes the relationship between JavaScript logic and UI structure easier to express.

---

## JSX Is Not HTML

JSX resembles HTML, but it follows JavaScript/React rules.

For example:

```jsx
<h1>{name}</h1>
```

The `{name}` expression comes from JavaScript.

---

## JavaScript Inside JSX

Expressions can be placed inside `{}`.

```jsx
function Product() {
    const name = "Laptop";
    const price = 60000;

    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
}
```

---

## JSX and Rendering

A component returns JSX.

```text
Component
    ↓
JSX
    ↓
React rendering system
    ↓
Browser DOM
```

---

## Key Takeaways

- JSX allows UI structure to be written with JavaScript.
- JSX is not plain HTML.
- JavaScript expressions can be embedded using `{}`.
- Components commonly return JSX.
