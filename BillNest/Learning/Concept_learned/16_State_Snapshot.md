
---

## 16_State_Snapshot.md

```markdown
# React Concept: State as a Snapshot

**Project:** BillNest  
**Day:** 5

===============================================================================
PURPOSE
===============================================================================

Understand the mental model that each React render sees a particular snapshot
of State.

This explains why State does not appear to change immediately after calling
a State setter.

===============================================================================
WHAT IS A SNAPSHOT?
===============================================================================

Suppose React renders the component with:

```text
count = 5

For that render, the component sees:

count = 5

Even if you call:

setCount(6);

the current execution still sees:

count = 5

A later render sees:

count = 6
===============================================================================
FLOW
Render #1
    ↓
count = 5
    ↓
User clicks button
    ↓
setCount(6)
    ↓
Current function still sees count = 5
    ↓
Function finishes
    ↓
React re-renders
    ↓
Render #2
    ↓
count = 6
===============================================================================
IMPORTANT EXAMPLE
function Counter() {


    const [count, setCount] = useState(5);


    function increase() {


        // Current render's value.
        console.log(count);


        // Request the next State value.
        setCount(count + 1);


        // Still the current render's value.
        console.log(count);
    }


    return (
        <>
            <h1>{count}</h1>


            <button onClick={increase}>
                Increase
            </button>
        </>
    );
}

When clicked once:

Console:


5
5

After the function finishes:

React re-renders

New State:

count = 6

UI:

6
===============================================================================
WHY?

Because:

count

represents the State value for the current render.

Calling:

setCount(6);

does not rewrite the current render's value.

It requests a new render.

===============================================================================
C# MENTAL MODEL

Think of a render approximately like a method receiving a value:

Render(5);

Inside that execution:

count = 5

Later React performs another render:

Render(6);

Now:

count = 6

This is only a learning mental model, not React's actual internal
implementation.

===============================================================================
MULTIPLE setCount() CALLS

Consider:

setCount(count + 1);


setCount(count + 1);


setCount(count + 1);

Suppose the current render has:

count = 0

All three lines use the same current render value:

count = 0

Therefore they effectively request:

setCount(1)


setCount(1)


setCount(1)

The final result is:

count = 1

NOT:

count = 3
===============================================================================
IMPORTANT CONNECTION

This concept explains why:

setCount(count + 1);

does not mean:

Change count immediately.

Instead:

Current snapshot
      ↓
count = 0
      ↓
setCount(1)
      ↓
Current snapshot remains 0
      ↓
Render finishes
      ↓
New render
      ↓
count = 1
===============================================================================
NEXT CONCEPT

The solution for sequential State updates is the functional State updater:

setCount(previousCount => previousCount + 1);

For example:

setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);

This can correctly produce:

0 → 1 → 2 → 3

We will learn exactly why this works in the next lesson.

===============================================================================
INTERVIEW QUESTION

Q: What does it mean to say React State behaves like a snapshot?

A:

Each render sees a fixed State value for that render. Calling a State setter
requests a new State value, which becomes available when React performs the
next render.

===============================================================================
KEY POINT TO REMEMBER
One render
    ↓
One State snapshot
    ↓
State setter requests an update
    ↓
Current snapshot does not change
    ↓
React re-renders
    ↓
New snapshot