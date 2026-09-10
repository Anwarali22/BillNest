# React Conditional Rendering

## Concept
Conditional rendering means rendering different JSX depending on a condition.

```jsx
{cartCount > 0 ? (
    <button>Checkout</button>
) : (
    <h2>Cart is empty</h2>
)}
```

## Mental Model
JavaScript decides which branch React should render.

## BillNest
```jsx
{cartCount === 0 ? <p>Cart is empty</p> : <button>Checkout</button>}
```

## Interview Questions
- What is conditional rendering in React?
- How does the ternary operator help in JSX?
- When would you use `&&` instead of a ternary?

## Common Mistake
Do not confuse `=` assignment with `===` comparison.
