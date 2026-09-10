# React Named vs Default Exports

## Default Export

```jsx
export default ProductCard;
```

Import:
```jsx
import ProductCard from "./ProductCard";
```

## Named Export

```jsx
export { Products, ProductCard };
```

Import:
```jsx
import { Products, ProductCard } from "./ProductCard";
```

## Key Difference
Default exports are imported without braces. Named exports are imported using braces and the exported name.

## Common Mistake
Do not write:
```jsx
import { ProductCard } from "./ProductCard";
```
if the file only has a default export.
