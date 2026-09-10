# event.preventDefault() in React

## Concept
`event.preventDefault()` stops the browser's default action for an event.

For a normal HTML form, the browser may submit and reload/navigate the page.

```jsx
function addProduct(event) {
    event.preventDefault();

    // React form logic
}
```

## Important
`preventDefault()` does NOT clear React state.

To clear fields explicitly:
```jsx
setName("");
setPrice("");
```

## BillNest
Prevent the browser reload so React can add the product while staying on the current page.
