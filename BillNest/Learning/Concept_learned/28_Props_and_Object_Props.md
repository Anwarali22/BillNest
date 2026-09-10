# React Props and Object Props

## Concept
Props allow a parent component to pass data to a child.

Individual props:
```jsx
<ProductCard name="Laptop" price={60000} />
```

Object prop:
```jsx
<Products product={product} />
```

## Child Components

```jsx
function ProductCard(props) {
    return <h3>{props.name}</h3>;
}
```

```jsx
function Products({ product }) {
    return <h3>{product.name}</h3>;
}
```

The shape of the props must match how the child reads them.

## Common Mistake
If the child expects `product.name`, the parent must provide a `product` prop.
