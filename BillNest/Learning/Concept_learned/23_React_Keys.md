# React Keys

## Concept

When React renders a list, each item should have a stable `key`.

Example:

```jsx
{products.map(product => (
    <div key={product.id}>
        {product.name}
    </div>
))}
```

## Why Does React Need a Key?

The key gives each list item an identity.

For example:

```text
Laptop   → ID 101
Mouse    → ID 102
Keyboard → ID 103
```

If the list changes, React can use these identities to understand which items were added, removed, or changed.

## ID vs Index

Prefer:

```jsx
key={product.id}
```

instead of:

```jsx
key={index}
```

when the list is dynamic.

### ID

Represents the actual item's identity.

```text
Keyboard → ID 103
```

### Index

Represents the item's current position.

```text
Keyboard → index 2
```

If Mouse is removed:

```text
Keyboard
index 2 → index 1
```

The product's position changed, but its identity did not.

Therefore:

```jsx
key={product.id}
```

is preferable when a stable unique ID exists.

## Important Rule

Use a stable, unique identifier for `key` whenever possible.

```jsx
key={product.id}
```

is the normal choice for BillNest products.