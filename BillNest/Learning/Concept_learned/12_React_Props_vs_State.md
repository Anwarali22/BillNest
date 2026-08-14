# React Props vs State

Props and State are both data used by React components, but their ownership and purpose are different.

---

# Props

Props are supplied by a parent.

```text
Parent
   ↓
Props
   ↓
Child
```

Example:

```jsx
<ProductCard name="Laptop" price={60000} />
```

The child receives:

```jsx
function ProductCard(props) {
    return <h2>{props.name}</h2>;
}
```

The child treats Props as read-only.

---

# State

State belongs to the component that manages it.

```jsx
function Counter() {
    const [count, setCount] = useState(0);
}
```

Here:

```text
Counter
   ↓
owns count
```

The state can be updated using:

```jsx
setCount(count + 1);
```

---

# Side-by-Side

| Question | Props | State |
|---|---|---|
| Who supplies it? | Parent | Component |
| Who owns it? | Parent | Component managing it |
| Purpose | Component input | Changing component data |
| Can child directly modify it? | No | Uses setter for its own state |
| Can changes cause render? | New Props can cause rendering | State updates schedule rendering |
| Direction | Parent → child | Managed within component |

---

# C# Mental Model

Props are similar to method input parameters:

```csharp
PrintProduct(product);
```

State is closer conceptually to data stored inside an object/component that changes over time.

These are analogies, not exact implementation matches.

---

# Example Together

```jsx
function ProductCard(props) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h2>{props.name}</h2>
            <p>₹{props.price}</p>
            <p>Quantity: {quantity}</p>

            <button onClick={() => setQuantity(quantity + 1)}>
                Add
            </button>
        </div>
    );
}
```

Here:

```text
props.name
props.price
    ↓
Provided by parent

quantity
    ↓
Managed by ProductCard
```

This is the distinction to remember.

---

# Key Mental Model

```text
Props
Parent owns
     ↓
Child receives


State
Component owns
     ↓
Component updates
```
