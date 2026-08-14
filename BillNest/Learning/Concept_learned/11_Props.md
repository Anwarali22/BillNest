# React Props

## Definition

Props are inputs passed from a parent component to a child component.

```text
Parent
   |
   | Props
   v
Child
```

---

## Why Props Exist

Suppose BillNest needs:

```text
Laptop
Mouse
Keyboard
```

Creating separate components for every product duplicates UI code.

Instead:

```text
ProductCard
```

can be reused with different data.

---

## Basic Example

Parent:

```jsx
function App() {
    return (
        <ProductCard
            name="Laptop"
            price={60000}
        />
    );
}
```

Child:

```jsx
function ProductCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>₹{props.price}</p>
        </div>
    );
}
```

---

## Internal Mental Model

Conceptually:

```javascript
const props = {
    name: "Laptop",
    price: 60000
};

ProductCard(props);
```

React performs the actual component invocation as part of its rendering system.

---

## Parent-to-Child Flow

```text
Parent
  |
  | name, price
  ↓
Props object
  |
  ↓
Child
```

The child receives the values through its `props` parameter.

---

## Props Are Read-Only

The child should not modify incoming Props.

```jsx
props.name = "Mouse"; // ❌
```

The child should read and use the data.

---

## Props vs State

| Props | State |
|---|---|
| Supplied by parent | Managed by component |
| Component input | Component-owned data |
| Read-only from child perspective | Updated through state setter |
| Supports parent → child data flow | Supports changing component data |

---

## C# Comparison

React:

```jsx
<ProductCard name="Laptop" price={60000} />
```

Conceptually resembles:

```csharp
PrintProduct("Laptop", 60000);
```

Props are similar to input parameters/arguments.

---

## BillNest Example

A reusable BillNest component could receive:

```jsx
<ProductCard
    name="Laptop"
    price={60000}
    category="Electronics"
/>
```

The component doesn't need a separate implementation for each product.

---

## Common Mistakes

1. Thinking Props are State.
2. Thinking the child owns the parent's data.
3. Trying to modify Props.
4. Creating product-specific components instead of reusable components.
5. Thinking Props flow from child to parent.

---

## Key Takeaways

- Props are component inputs.
- Props flow from parent to child.
- The child receives Props through its function parameter.
- Props are treated as read-only by the child.
- Props make components reusable.
