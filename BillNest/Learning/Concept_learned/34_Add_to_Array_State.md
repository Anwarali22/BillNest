# Add Items to React Array State

## Pattern
Use the spread operator to create a new array.

```jsx
setProducts([
    ...products,
    {
        id: 3,
        name: "Keyboard",
        price: 1000
    }
]);
```

`...products` copies the existing items and the new object is appended.

## BillNest
Form submission can create `newProduct` and append it with this pattern.

## Common Mistake
```jsx
setProducts([...Products, newProduct]); // ❌
```

JavaScript is case-sensitive.
