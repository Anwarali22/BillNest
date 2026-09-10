# React Form Handling

## Concept
React can handle a form by attaching an `onSubmit` handler.

```jsx
<form onSubmit={addProduct}>
    <input value={name} onChange={e => setName(e.target.value)} />
    <input value={price} onChange={e => setPrice(e.target.value)} />
    <button type="submit">Add Product</button>
</form>
```

## BillNest Flow
```text
User enters product
→ submits form
→ addProduct()
→ validate/create product
→ update state
```

## Interview Questions
- How do you handle form submission in React?
- What is a controlled form?
- Why use `onSubmit` instead of putting logic only on the button?
