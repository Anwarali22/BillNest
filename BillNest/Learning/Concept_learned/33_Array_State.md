# React Array State

## Concept
Arrays can be stored in React state.

```jsx
const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 300 }
]);
```

Do not directly mutate the state array.

```jsx
products.push(newProduct); // ❌
```

Create a new array instead.
