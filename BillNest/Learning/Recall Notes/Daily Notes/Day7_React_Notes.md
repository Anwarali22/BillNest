# React Day 7 — Study Notes

**Date:** 2026-09-10  
**Focus:** Conditional rendering, lists, keys, reusable components, forms, and array state.

## Goals
- Render UI conditionally.
- Render arrays with `.map()`.
- Understand React `key`.
- Pass objects and functions through props.
- Understand named/default exports.
- Build controlled inputs and forms.
- Understand `preventDefault()`.
- Add, remove, and update array items in React state.

## 1. Conditional Rendering

React can render different JSX depending on a condition.

### Ternary
```jsx
{cartCount === 0 ? (
  <h2>Cart is empty</h2>
) : (
  <button>Checkout</button>
)}
```

Multiple conditions can be nested, although complex conditions are usually better moved into variables/functions.

## 2. Array `.map()`

`.map()` transforms each array item into JSX.

```jsx
const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 300 }
];

return (
  <>
    {products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
      </div>
    ))}
  </>
);
```

`products` = complete array.  
`product` = one item from the array.

## 3. React `key`

```jsx
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```

A `key` gives React a stable identity for each list item.

Prefer a stable ID:
```jsx
key={product.id}
```

Avoid array index when items can be deleted/reordered:
```jsx
key={index}
```

Mental model:

**ID = item identity**  
**Index = item position**

## 4. Reusable Components + Props

A component can receive an object through props:

```jsx
function Products({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </div>
  );
}
```

Another component can receive individual props:

```jsx
function ProductCard(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </>
  );
}
```

Important distinction:

```jsx
<Products product={product} />
```

means the child receives a `product` prop.

```jsx
<ProductCard name="Laptop" price={60000} />
```

means the child receives `name` and `price` props directly.

## 5. Named vs Default Exports

If a file contains multiple components:

```jsx
export { Products, ProductCard };
```

Import them using:

```jsx
import { Products, ProductCard } from "./ProductCard";
```

Default export:

```jsx
export default ProductCard;
```

Import without braces:

```jsx
import ProductCard from "./ProductCard";
```

## 6. Controlled Input

React state controls the input value.

```jsx
const [price, setPrice] = useState("");

<input
  type="number"
  value={price}
  onChange={(event) => setPrice(event.target.value)}
/>
```

Flow:

**User types → `onChange` → setter → state changes → re-render → input value updates**

Note: `event.target.value` is normally a string, even for `type="number"`. Use `Number(...)` when numeric state is required.

## 7. Form Submission + `preventDefault()`

```jsx
function addProduct(event) {
  event.preventDefault();

  // React logic continues without browser page reload.
}
```

`preventDefault()` stops the browser's default form submission behavior.

It does **not** automatically clear inputs.

To clear inputs:

```jsx
setName("");
setPrice("");
```

## 8. Array State

An array can be stored in React state:

```jsx
const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 300 }
]);
```

Do not mutate the state array directly:

```jsx
products.push(newProduct); // ❌
```

Instead create a new array.

### Add

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

`...products` copies the existing array items into a new array.

### Remove

Use `.filter()`:

```jsx
setProducts(
  products.filter(product => product.id !== 2)
);
```

This keeps every product except the product whose ID is `2`.

### Update

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

The matching product gets a new object with the changed property. Other products remain unchanged.

## BillNest Flow

A product form can follow:

```text
Form
 ↓
preventDefault()
 ↓
Create newProduct
 ↓
setProducts([...products, newProduct])
 ↓
React re-renders
 ↓
products.map(...)
 ↓
New ProductCard appears
```

For deletion:

```text
Delete button
 ↓
setProducts(products.filter(...))
 ↓
React re-renders
 ↓
Deleted product disappears
```

For editing:

```text
Edit action
 ↓
setProducts(products.map(...))
 ↓
React re-renders
 ↓
Updated product appears
```

## Interview Questions

1. Why should React state arrays not be mutated directly?
2. What does the spread operator do when adding an item?
3. Why is `filter()` useful for deleting an item?
4. Why is `map()` useful for updating an item?
5. Why should React list items have a `key`?
6. Why is a stable ID usually better than an array index as a key?
7. What does `event.preventDefault()` do?
8. What is a controlled input?
9. What is the difference between named and default exports?
10. What is the difference between `product` and `products` inside `.map()`?

## Common Mistakes

```jsx
products.push(newProduct); // ❌ mutates state
```

```jsx
setProducts([...Products, newProduct]); // ❌ wrong variable/case
```

```jsx
setProducts(products.filter()product => ...); // ❌ arrow function outside filter
```

Correct:

```jsx
setProducts(products.filter(product => product.id !== 3));
```

Strict equality is preferred:

```jsx
product.id === 3
```

instead of:

```jsx
product.id == 3
```

## Day 7 Key Takeaway

For React array state:

```jsx
// Add
setProducts([...products, newProduct]);

// Remove
setProducts(products.filter(product => product.id !== id));

// Update
setProducts(
  products.map(product =>
    product.id === id
      ? { ...product, price: newPrice }
      : product
  )
);
```

## Next Lesson

Apply these array-state operations to the actual BillNest product workflow: **add, delete, and edit products**.
