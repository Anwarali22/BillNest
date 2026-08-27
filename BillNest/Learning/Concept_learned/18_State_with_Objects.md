# State with Objects

## Concept

React state can contain an object instead of only a primitive value.

```jsx
const [user, setUser] = useState({
    name: "Anwar",
    age: 27,
    role: "Developer"
});
```

The state is:

```text
user
 ├── name
 ├── age
 └── role
```

Access properties using normal JavaScript syntax:

```jsx
<h2>{user.name}</h2>
<p>{user.role}</p>
```

## Replacing Object State

React does not automatically merge objects when setting state.

```jsx
setUser({
    name: "Rahul"
});
```

This replaces the previous object.

The resulting state does not automatically contain the previous `age` and `role`.

## Important Rule

When updating object state, preserve the properties you want to keep.

The spread operator is commonly used for this.

## BillNest Example

```jsx
const [cart, setCart] = useState({
    count: 0,
    totalAmount: 0
});
```

The cart state contains related information:

```text
count
totalAmount
```