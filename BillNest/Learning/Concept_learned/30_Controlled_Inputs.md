# React Controlled Inputs

## Concept
A controlled input gets its value from React state.

```jsx
const [price, setPrice] = useState("");

<input
    type="number"
    value={price}
    onChange={(event) => setPrice(event.target.value)}
/>
```

## Flow
```text
User types
→ onChange
→ setPrice()
→ state changes
→ component re-renders
→ value updates
```

## Important
`event.target.value` is normally a string, even for `type="number"`.

Convert when numeric state is required:
```jsx
setPrice(Number(event.target.value));
```

## BillNest
Product name and price fields can be controlled by React state.
