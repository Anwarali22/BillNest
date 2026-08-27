# Conditional Rendering

## Concept

Conditional rendering means displaying different JSX depending on a condition.

React uses normal JavaScript conditions to decide what should be rendered.

## Using `if`

```jsx
function CartMessage() {
    const cartCount = 0;

    if (cartCount === 0) {
        return <h1>Your cart is empty</h1>;
    }

    return <h1>Your cart has items</h1>;
}
```

The `return` is important.

Once `return` executes, the function ends.

## Ternary Operator

Syntax:

```jsx
condition ? valueIfTrue : valueIfFalse
```

Example:

```jsx
{
    cartCount > 0
        ? <p>You have items in your cart.</p>
        : <p>Your cart is empty.</p>
}
```

Use the ternary when there are two alternatives.

## `&&`

Syntax:

```jsx
condition && JSX
```

Example:

```jsx
{cartCount > 0 && <button>Checkout</button>}
```

If the condition is false, the JSX is not rendered.

## BillNest Example

```jsx
function Cart() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
            <h2>Cart: {cartCount} items</h2>

            {cartCount === 0
                ? <p>Your cart is empty.</p>
                : <p>You have items in your cart.</p>
            }

            {cartCount > 0 && (
                <button>Checkout</button>
            )}
        </>
    );
}
```

## Quick Rules

```text
if       → multiple or complex conditions

? :      → choose between two alternatives

&&       → render something only when true
```