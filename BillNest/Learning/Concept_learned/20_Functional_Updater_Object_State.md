# Functional State Updater with Object State

## Concept

The functional updater can be combined with object state.

```jsx
setCart(previousCart => ({
    ...previousCart,
    count: previousCart.count + 1
}));
```

There are two concepts here:

```text
Functional updater
        +
Spread operator
```

## `previousCart`

React supplies the previous state to the updater function.

```jsx
previousCart => ...
```

This is useful when the next state depends on the previous state.

## BillNest Example

```jsx
function addLaptop() {
    setCart(previousCart => ({
        // Copy the existing cart properties.
        ...previousCart,

        // Calculate the new count from the previous count.
        count: previousCart.count + 1,

        // Calculate the new total from the previous total.
        totalAmount: previousCart.totalAmount + 60000
    }));
}
```

If:

```text
count = 5
totalAmount = 100000
```

then after adding the laptop:

```text
count = 6
totalAmount = 160000
```

## Important Rule

When the new object state depends on the previous state, the functional updater is the safer pattern.

```jsx
setCart(previousCart => ({
    ...previousCart,
    count: previousCart.count + 1
}));
```