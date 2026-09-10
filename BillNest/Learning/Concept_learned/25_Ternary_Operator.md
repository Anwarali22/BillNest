# React Ternary Operator

## Concept
The ternary operator is a compact way to choose between two expressions.

```jsx
condition ? valueIfTrue : valueIfFalse
```

## React Example
```jsx
{cartCount === 0 ? (
    <p>Cart is empty</p>
) : (
    <button>Checkout</button>
)}
```

## BillNest
If the cart has items, show Checkout; otherwise show Cart is empty.

## Interview Question
What is the syntax of the ternary operator?

## Common Mistake
A ternary needs both `?` and `:` branches.
