# React Reusable Components

## Concept
A reusable component is designed so the same component can render different data.

```jsx
function ProductCard(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <p>₹{props.price}</p>
        </>
    );
}
```

## BillNest
```jsx
<ProductCard name="Laptop" price={60000} />
<ProductCard name="Mouse" price={300} />
<ProductCard name="Monitor" price={15000} />
```

One component, multiple products.

## C# Comparison
Conceptually similar to creating a reusable class/method instead of duplicating the same UI logic.

## Interview Questions
- Why use reusable components?
- How does a component receive different data?
- What role do props play?
