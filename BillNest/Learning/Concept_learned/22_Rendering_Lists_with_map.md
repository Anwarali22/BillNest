# Rendering Lists with `.map()`

## Concept

React can render multiple JSX elements from an array using JavaScript's `.map()`.

Example data:

```jsx
const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 300 },
    { id: 3, name: "Keyboard", price: 1000 }
];
```

## Rendering the List

```jsx
{
    products.map(product => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
        </div>
    ))
}
```

`.map()` processes every product and creates JSX for each one.

Conceptually:

```text
Laptop    → JSX
Mouse     → JSX
Keyboard  → JSX
```

## Why `.map()`?

Without `.map()`, we would need to manually write JSX for every product.

With `.map()`, adding another product only requires adding data to the array.

## BillNest Example

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