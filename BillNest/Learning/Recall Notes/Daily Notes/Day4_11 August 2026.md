# Day 4 — React Props

## Status
Completed

## Starting Point
Continuation from `useState()` and React component execution/rendering.

## Today's Goal

Understand how React components communicate by passing data from a parent component to a child component using Props.

---

# 1. Problem We Were Solving

Suppose BillNest needs to display many products:

- Laptop — ₹60,000
- Mouse — ₹800
- Keyboard — ₹2,000

A poor approach would be creating separate components:

```text
LaptopCard
MouseCard
KeyboardCard
```

The UI structure would be duplicated even though only the product data changes.

This creates a maintenance problem.

If the common product-card design changes, every duplicated component may need to be changed.

---

# 2. Reusable Component Idea

Instead, create one component:

```text
ProductCard
```

and give it different product information.

Conceptually:

```text
ProductCard(Laptop)
ProductCard(Mouse)
ProductCard(Keyboard)
```

This is similar to C# methods receiving different arguments.

```csharp
void PrintProduct(string name, decimal price)
{
    Console.WriteLine($"{name} - ₹{price}");
}
```

The same method can process different products.

React uses Props to provide this input data to components.

---

# 3. What Are Props?

Props are inputs passed from a parent React component to a child component.

The basic direction is:

```text
Parent
   |
   | Props
   v
Child
```

Example:

```jsx
<ProductCard name="Laptop" price={60000} />
```

Here:

```text
name  → "Laptop"
price → 60000
```

are Props.

---

# 4. How the Child Receives Props

The child component receives Props through its function parameter.

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

The `props` parameter represents the data supplied to the component.

Conceptually, React provides an object:

```javascript
{
    name: "Laptop",
    price: 60000
}
```

and the component can access:

```javascript
props.name
props.price
```

---

# 5. Internal Mental Model

When React encounters:

```jsx
<ProductCard name="Laptop" price={60000} />
```

a useful conceptual model is:

```javascript
const props = {
    name: "Laptop",
    price: 60000
};

ProductCard(props);
```

This is a mental model for understanding the relationship between JSX and the component function.

React performs the actual component invocation as part of its rendering system.

---

# 6. Parent Owns the Data

Example:

```jsx
function App() {
    const productName = "Laptop";

    return <ProductCard name={productName} />;
}
```

Here:

```text
App
 └── owns productName
          |
          | Props
          v
ProductCard
 └── receives the value
```

The child does not directly access the parent's local variable.

It receives the value through Props.

---

# 7. Props Are Read-Only

A child should treat received Props as read-only.

For example:

```jsx
props.name = "Mouse"; // ❌
```

The child should read and use the data.

If the child needs to request a change to data owned by the parent, React uses another communication mechanism, which is a later topic.

---

# 8. Why Props Are an Object

Imagine a component needed:

- name
- price
- category
- stock
- rating
- image
- description

Passing many separate parameters would become difficult to manage.

Instead, the component receives one Props object:

```javascript
{
    name: "Laptop",
    price: 60000,
    category: "Electronics",
    stock: 15,
    rating: 4.8
}
```

The component has one input object containing related values.

---

# 9. C# Comparison

C#:

```csharp
void PrintProduct(string name, decimal price)
{
    Console.WriteLine($"{name} - {price}");
}

PrintProduct("Laptop", 60000);
```

React:

```jsx
<ProductCard name="Laptop" price={60000} />
```

The comparison is:

```text
C# method parameters
        ≈
React component Props
```

It is a conceptual comparison, not an exact implementation equivalence.

---

# 10. Props vs State

Props:

```text
Parent
   ↓
Child
```

State:

```text
Component
   ↓
Owns and manages its changing data
```

### Props

- Supplied by a parent.
- Used as component input.
- Read-only from the child's perspective.

### State

- Managed by the component.
- Can change using a state setter.
- A state update causes React to schedule another render.

---

# 11. BillNest Application

A future BillNest product card could be:

```jsx
<ProductCard
    name="Laptop"
    price={60000}
    category="Electronics"
/>
```

The same `ProductCard` can display many products.

The component should focus on displaying the supplied data rather than containing product-specific logic for every product.

---

# 12. What Was Learned Today

1. Why duplicated UI components are difficult to maintain.
2. Why reusable components need input data.
3. Why C# method parameters are a useful analogy.
4. What Props are.
5. Parent → child data flow.
6. The Props object mental model.
7. Props are read-only from the child perspective.
8. Props and State have different ownership models.
9. Props make components reusable.

---

# 13. Important Mental Model

Remember:

```text
Parent owns data
       ↓
Parent passes Props
       ↓
Child receives Props
       ↓
Child reads/uses Props
```

And:

```text
State  = component-owned changing data

Props  = parent-provided component input
```

---

# 14. Interview Questions

### Basic

1. What are Props in React?
2. Why are Props used?
3. Which direction do Props flow?
4. Can a child modify its Props?

### Intermediate

1. How are Props related to JavaScript function parameters?
2. How are Props different from State?
3. Why do Props make components reusable?
4. Why should a child treat Props as read-only?

### Project

1. How would you use Props in a BillNest product card?
2. Why is one reusable `ProductCard` better than product-specific components?
3. How would a parent provide product information to a child component?

---

# 15. Day 4 Conclusion

The main concept learned today is:

> **Props allow a parent component to provide data to a child component, making the child reusable without hard-coding the data.**

The most important flow is:

```text
Parent
   ↓
Props
   ↓
Child
```

The next React topic should continue from this foundation rather than treating Props as isolated syntax.
