# Day 7 — React Learning Notes

## Topics Covered

1. State with Objects
2. Spread Operator with Object State
3. Functional State Updater with Object State
4. Conditional Rendering
5. Conditional Rendering with `if`
6. Ternary Operator
7. `&&` Conditional Rendering
8. Rendering Lists with `.map()`
9. React `key`

---

# 1. State with Objects

React state does not have to be a primitive value.

It can contain an object:

```jsx
const [user, setUser] = useState({
    name: "Anwar",
    age: 27
});
```

The state contains:

```text
user
 ├── name → "Anwar"
 └── age  → 27
```

Properties can be accessed normally:

```jsx
<h2>{user.name}</h2>
<p>{user.age}</p>
```

---

# 2. Updating Object State

React does not automatically merge a new object with the previous state.

This:

```jsx
setUser({
    name: "Rahul"
});
```

replaces the previous object.

The new state only contains:

```text
name → Rahul
```

The previous `age` property is not automatically preserved.

---

# 3. Spread Operator

The JavaScript object spread operator is:

```jsx
...
```

It copies properties from an existing object into a new object.

Example:

```jsx
const user = {
    name: "Anwar",
    age: 27
};

const updatedUser = {
    ...user,
    name: "Rahul"
};
```

Result:

```text
name → Rahul
age  → 27
```

The existing properties are copied first, then `name` is overwritten.

---

# 4. Spread Operator Order

Order matters.

This:

```jsx
{
    ...user,
    age: 28
}
```

results in:

```text
age = 28
```

because `age: 28` comes after the spread.

But:

```jsx
{
    age: 28,
    ...user
}
```

can result in:

```text
age = 27
```

because the spread comes afterward and overwrites the earlier value.

---

# 5. Functional State Updater with Object State

Object state can also use the functional updater.

```jsx
setCart(previousCart => ({
    ...previousCart,
    count: previousCart.count + 1
}));
```

Two concepts are combined here:

```text
Functional updater
        +
Spread operator
```

`previousCart` represents the previous state supplied by React.

`...previousCart` copies the existing properties.

---

# 6. BillNest Object State

Instead of separate state variables:

```jsx
const [cartCount, setCartCount] = useState(0);
const [totalAmount, setTotalAmount] = useState(0);
```

we can represent related cart data as one object:

```jsx
const [cart, setCart] = useState({
    count: 0,
    totalAmount: 0
});
```

Adding a laptop:

```jsx
function addLaptop() {
    setCart(previousCart => ({
        // Preserve the existing cart properties.
        ...previousCart,

        // Increase the number of items.
        count: previousCart.count + 1,

        // Add the laptop price to the existing total.
        totalAmount: previousCart.totalAmount + 60000
    }));
}
```

---

# 7. Conditional Rendering

Conditional rendering means rendering different JSX depending on a condition.

Example:

```jsx
const isLoggedIn = true;

if (isLoggedIn) {
    return <h1>Welcome</h1>;
}

return <h1>Please Login</h1>;
```

---

# 8. Ternary Conditional Rendering

The ternary operator is useful when there are two alternatives.

Syntax:

```jsx
condition ? valueIfTrue : valueIfFalse
```

Example:

```jsx
{cartCount > 0
    ? <p>You have items in your cart.</p>
    : <p>Your cart is empty.</p>
}
```

---

# 9. `&&` Conditional Rendering

Use `&&` when something should be rendered only when a condition is true.

```jsx
{cartCount > 0 && <button>Checkout</button>}
```

If:

```text
cartCount = 0
```

the button is not rendered.

If:

```text
cartCount = 3
```

the button is rendered.

### Rule

```text
condition && JSX
```

means:

> Render JSX only when the condition is true.

---

# 10. Conditional Rendering with `if`

`if` is useful for multiple or more complex conditions.

Example:

```jsx
function CartMessage() {
    const cartCount = 2;

    if (cartCount === 0) {
        return <h1>Your cart is empty</h1>;
    }

    if (cartCount === 1) {
        return <h1>You have 1 item</h1>;
    }

    return <h1>You have multiple items</h1>;
}
```

The `return` is important.

Once a `return` executes, the function ends.

Therefore, React does not reach the later conditions.

---

# 11. Rendering Lists with `.map()`

React can render multiple elements from an array using JavaScript's `.map()`.

Example:

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

`.map()` processes every product:

```text
Product 1 → JSX
Product 2 → JSX
Product 3 → JSX
...
```

This is much better than manually writing JSX for every product.

---

# 12. React `key`

Each element rendered from a list should have a stable `key`.

Example:

```jsx
<div key={product.id}>
```

The key gives React an identity for each list item.

For example:

```text
Laptop   → ID 101
Mouse    → ID 102
Keyboard → ID 103
```

React can use these identities to track items when the list changes.

---

# 13. `id` vs `index`

Prefer:

```jsx
key={product.id}
```

over:

```jsx
key={index}
```

when the list can change.

The important distinction is:

```text
id    → identity of the item
index → current position of the item
```

Example:

```text
Initial:

Index   ID     Product
0       101    Laptop
1       102    Mouse
2       103    Keyboard
```

After deleting Mouse:

```text
Index   ID     Product
0       101    Laptop
1       103    Keyboard
```

Keyboard's index changed:

```text
2 → 1
```

but its actual identity remained:

```text
ID = 103
```

Therefore a stable product ID is preferable.

---

# BillNest Example

```jsx
function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: 60000 },
        { id: 2, name: "Mouse", price: 300 },
        { id: 3, name: "Keyboard", price: 1000 },
        { id: 4, name: "Monitor", price: 15000 }
    ];

    return (
        <>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>₹{product.price}</p>
                    <button>Add</button>
                </div>
            ))}
        </>
    );
}
```

This gives BillNest a dynamic product list instead of hard-coded product elements.

---

# Interview Questions

## 1. How do you update an object stored in React state?

Use the spread operator to preserve existing properties:

```jsx
setUser({
    ...user,
    name: "Rahul"
});
```

---

## 2. Why use the functional updater with object state?

When the new object depends on the previous state:

```jsx
setCart(previousCart => ({
    ...previousCart,
    count: previousCart.count + 1
}));
```

---

## 3. What is conditional rendering?

Rendering different JSX based on a condition.

---

## 4. Difference between `&&` and ternary?

`&&`:

```jsx
condition && JSX
```

renders JSX only when the condition is true.

Ternary:

```jsx
condition ? A : B
```

chooses between two alternatives.

---

## 5. Why is `key` required when rendering lists?

It gives React a stable identity for each list item so React can efficiently track changes to the list.

---

## 6. Why prefer `product.id` over `index`?

Because the ID identifies the actual item, while the index identifies only its current position.

---

# Day 7 Key Takeaways

```text
Object State
    ↓
Spread Operator
    ↓
Functional Updater + Object State
    ↓
Conditional Rendering
    ↓
if / ternary / &&
    ↓
.map()
    ↓
React key
```

## Next Lesson

**Component-based Product List**

We will extract each BillNest product into a reusable `ProductCard` component and then connect it with the existing product list.