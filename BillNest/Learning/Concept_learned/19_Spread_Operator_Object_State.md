# Spread Operator with Object State

## Concept

The JavaScript object spread operator is:

```jsx
...
```

It copies properties from an existing object into a new object.

Example:

```jsx
const user = {
    name: "Anwar",
    age: 27
};

const updatedUser = {
    ...user,
    name: "Rahul"
};
```

Result:

```text
name = Rahul
age = 27
```

## Why It Is Useful in React

React state objects should not be directly mutated.

Instead of:

```jsx
user.name = "Rahul";
```

create a new object:

```jsx
setUser({
    ...user,
    name: "Rahul"
});
```

The existing properties are copied, and the changed property is overwritten.

## Order Matters

This:

```jsx
{
    ...user,
    age: 28
}
```

sets:

```text
age = 28
```

because the new `age` appears after the spread.

But:

```jsx
{
    age: 28,
    ...user
}
```

allows the existing `user.age` to overwrite `28`.

## BillNest Example

```jsx
setCart({
    ...cart,

    // Preserve the existing properties and update count.
    count: cart.count + 1
});
```