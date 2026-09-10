# React Concept — Array State

## Why Array State Matters

Real React applications frequently store collections:

```jsx
const [products, setProducts] = useState([]);
```

Examples:
- Products
- Cart items
- Users
- Orders
- Notifications

React state should be treated as immutable. Do not directly mutate the existing array.

## 1. Add an Item

Use the spread operator to create a new array:

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

`...products` copies the old items into a new array.

### C# comparison

Conceptually similar to creating a new collection containing the old items plus one new item, rather than modifying the original collection in place.

## 2. Remove an Item

Use `.filter()`:

```jsx
setProducts(
  products.filter(product => product.id !== 2)
);
```

`filter()` creates a new array containing only items that satisfy the condition.

For deletion:
- matching ID → condition is `false` → removed
- other IDs → condition is `true` → kept

## 3. Update an Item

Use `.map()`:

```jsx
setProducts(
  products.map(product =>
    product.id === 3
      ? { ...product, price: 18000 }
      : product
  )
);
```

For the matching item:
```jsx
{ ...product, price: 18000 }
```

creates a new object while preserving the other properties.

For non-matching items:
```jsx
product
```

returns the existing item unchanged.

## 4. Why Spread Is Used During Update

Suppose:

```jsx
const product = {
  id: 3,
  name: "Monitor",
  price: 15000
};
```

If only the price should change:

```jsx
{ ...product, price: 18000 }
```

Result:

```jsx
{
  id: 3,
  name: "Monitor",
  price: 18000
}
```

Without the spread operator, you would have to recreate every property manually.

## 5. CRUD Mental Model

| Operation | React pattern |
|---|---|
| Create/Add | `[...array, item]` |
| Read | `array.map(...)` |
| Update | `array.map(...)` |
| Delete | `array.filter(...)` |

## 6. Common Mistakes

### Direct mutation

```jsx
products.push(newProduct); // ❌
```

### Incorrect spread variable

```jsx
setProducts([...Products, newProduct]); // ❌
```

JavaScript is case-sensitive.

### Incorrect filter syntax

```jsx
products.filter()product => ... // ❌
```

Correct:

```jsx
products.filter(product => ...)
```

### Wrong update condition

```jsx
product.id = 3 // ❌ assignment
```

Use comparison:

```jsx
product.id === 3 // ✅
```

## Interview Questions

### Why shouldn't we use `push()` on a React state array?

Because `push()` mutates the existing array. React state should be updated by creating a new array reference.

### Why does React care about a new array reference?

React uses state changes and object/array references as important signals when determining whether it needs to re-render.

### Why use `filter()` for deletion?

It returns a new array containing only the elements that pass the condition.

### Why use `map()` for updates?

It returns a new array while allowing one or more items to be replaced with updated objects.

## Quick Revision

```jsx
// ADD
setProducts([...products, newProduct]);

// DELETE
setProducts(
  products.filter(product => product.id !== id)
);

// UPDATE
setProducts(
  products.map(product =>
    product.id === id
      ? { ...product, price: newPrice }
      : product
  )
);
```
