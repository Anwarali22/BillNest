# Update Items in React Array State with map()

## Concept
Use `.map()` to create a new array while replacing the item that needs updating.

Change Monitor (ID 3) to ₹18,000:

```jsx
setProducts(
    products.map(product =>
        product.id === 3
            ? { ...product, price: 18000 }
            : product
    )
);
```

## Logic
Matching item → create updated object.
Non-matching item → return unchanged item.

## Important
The spread operator preserves existing properties:

```jsx
{ ...product, price: 18000 }
```

## CRUD
```text
Add    → [...products, newProduct]
Read   → products.map(...)
Update → products.map(...)
Delete → products.filter(...)
```
