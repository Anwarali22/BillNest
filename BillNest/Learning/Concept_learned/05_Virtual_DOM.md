# React Virtual DOM

## What Problem Does It Address?

Directly managing many DOM changes manually becomes difficult as UI complexity grows.

React provides a declarative rendering model where the UI is described from current application data.

A simplified mental model is:

```text
State/Props change
       ↓
Component renders
       ↓
New UI representation
       ↓
React compares/reconciles
       ↓
Required DOM updates
```

---

## What Is the Virtual DOM?

The Virtual DOM is an in-memory representation of UI used during React's rendering/reconciliation process.

It is not the browser's actual DOM.

```text
Virtual representation
        ↓
React rendering system
        ↓
Real browser DOM
```

---

## Important Clarification

Do not memorize:

> "Virtual DOM makes React automatically faster."

That is too simplistic.

The important idea is:

> React can calculate UI changes through its rendering/reconciliation process rather than requiring the developer to manually update every DOM node.

---

## State Change Example

Suppose:

```jsx
const [count, setCount] = useState(0);
```

After:

```jsx
setCount(count + 1);
```

React schedules another render.

The component executes again and produces new UI output.

React then determines the necessary DOM changes.

---

## Key Takeaways

- Virtual DOM is not the real browser DOM.
- It is used as part of React's UI rendering/reconciliation process.
- State/Props changes can cause a component to render again.
- React compares the previous and new UI representations and applies required DOM changes.
