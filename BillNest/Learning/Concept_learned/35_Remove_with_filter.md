# Remove Items from React Array State with filter()

## Concept
`.filter()` creates a new array containing only items that satisfy a condition.

To remove product ID 3:

```jsx
setProducts(
    products.filter(product => product.id !== 3)
);
```

## Logic
ID 3 → condition false → removed.
Other IDs → condition true → kept.

## Why Not splice()?
`splice()` mutates the original array. For React state, prefer creating a new array.

## BillNest
A Delete button can pass the product ID and filter that product out.
