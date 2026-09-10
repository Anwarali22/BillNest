# JavaScript Array map() in React

## Concept
`.map()` loops through an array and returns a new result for every item.

```jsx
products.map(product => (
    <div key={product.id}>
        <h2>{product.name}</h2>
    </div>
))
```

`products` is the complete array. `product` is one item.

## BillNest
```jsx
{products.map(product => (
    <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
    />
))}
```

## Interview Questions
- Why is `map()` commonly used to render lists?
- What is the difference between `products` and `product`?
- Does `map()` modify the original array?

## Common Mistake
Use a singular name for one item: `product`, not `products`.
