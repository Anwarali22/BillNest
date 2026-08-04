===============================================================================
DAY 03
Date : 04 August 2026

Topic
Why React was Created
Real DOM vs Virtual DOM

===============================================================================
1. OBJECTIVE
===============================================================================

Today's goal was to understand WHY React was created.

Instead of memorizing "React uses Virtual DOM", the objective was to understand
the problem React solves.

===============================================================================
2. WHY WAS REACT CREATED?
===============================================================================

JavaScript can already update HTML.

Example

document.getElementById("amount").innerText = "₹100";

Question

If JavaScript can already update the UI,

Why do we need React?

Answer

For small applications, JavaScript DOM manipulation is simple.

For large applications with hundreds or thousands of UI elements,
manual DOM manipulation becomes difficult to maintain and more expensive.

React provides a structured way to manage UI updates.

===============================================================================
3. REAL DOM
===============================================================================

Definition

The Real DOM is the actual HTML tree created and managed by the browser.

Example

<body>

    <div>

        <h1>BillNest</h1>

        <button>Save</button>

    </div>

</body>

DOM Tree

body

↓

div

↓

h1

↓

button

The browser renders the Real DOM on the screen.

===============================================================================
4. PROBLEM WITH DIRECT DOM MANIPULATION
===============================================================================

Example Dashboard

Header

Navigation

Profile

Notifications

Footer

Only the Profile section changes.

Without React

Developer must manually

✔ Find the element

✔ Update the element

✔ Manage related updates

As the application grows, this becomes difficult to maintain.

===============================================================================
5. VIRTUAL DOM
===============================================================================

Definition

The Virtual DOM is React's in-memory representation of the UI.

It is NOT the actual webpage.

It exists only inside React.

===============================================================================
6. HOW REACT UPDATES THE UI
===============================================================================

Step 1

State changes

↓

Step 2

React creates a NEW Virtual DOM representation

↓

Step 3

React compares

Old Virtual DOM

VS

New Virtual DOM

↓

Step 4

React finds the differences

↓

Step 5

React updates ONLY the necessary parts of the Real DOM

↓

Browser updates the screen

===============================================================================
7. IMPORTANT UNDERSTANDING
===============================================================================

Wrong Understanding

React edits the Virtual DOM.

Correct Understanding

React creates a NEW Virtual DOM representation.

Then compares it with the previous Virtual DOM.

After comparison,

React updates only the changed parts of the Real DOM.

===============================================================================
8. REAL DOM vs VIRTUAL DOM
===============================================================================

Real DOM

Created by the Browser

Displayed to the User

Actual HTML

Can be manipulated using JavaScript

------------------------------------------------

Virtual DOM

Created by React

Lives in Memory

Represents the UI

Used only for comparison

Never displayed directly

===============================================================================
9. WHY REACT IS FASTER
===============================================================================

React is NOT faster because the Virtual DOM replaces the Real DOM.

React is faster because it minimizes unnecessary DOM manipulations.

Instead of manually updating many elements,

React determines what actually changed and updates only those parts.

===============================================================================
10. BILLNEST EXAMPLE
===============================================================================

Dashboard

--------------------------------

Header

Menu

Pending Bills : 8

Recent Bills

Footer

--------------------------------

User pays one bill.

Pending Bills

8

↓

7

React Process

Create New Virtual DOM

↓

Compare with Previous Virtual DOM

↓

Difference Found

↓

Update only

Pending Bills

Header

Footer

Menu

Recent Bills

remain unchanged.

===============================================================================
11. C# COMPARISON
===============================================================================

Employee employee = new Employee()
{
    Name = "Anwar",
    Salary = 50000,
    Department = "Development"
};

Only Salary changes

employee.Salary = 55000;

Instead of creating a completely new Employee object.

React follows a similar idea.

Only update what changed.

===============================================================================
12. INTERVIEW QUESTIONS
===============================================================================

Q1

What is the Real DOM?

Answer

The Real DOM is the browser's actual representation of the HTML document that is
rendered on the screen.

------------------------------------------------

Q2

What is the Virtual DOM?

Answer

The Virtual DOM is React's in-memory representation of the UI used to determine
what changed before updating the Real DOM.

------------------------------------------------

Q3

Why was React created?

Answer

React was created to simplify UI development for large applications by reducing
manual DOM manipulation and efficiently updating only the changed parts of the
UI.

------------------------------------------------

Q4

Why is React faster?

Answer

React compares the previous and new Virtual DOM representations, identifies the
differences, and updates only the necessary parts of the Real DOM, reducing
unnecessary DOM manipulations.

------------------------------------------------

Q5

Does React replace the Real DOM?

Answer

No.

The browser always renders the Real DOM.

React only decides how and when to update it.

===============================================================================
13. COMMON MISCONCEPTIONS
===============================================================================

Wrong

React directly edits the Virtual DOM.

Correct

React creates a new Virtual DOM representation and compares it with the
previous one.

------------------------------------------------

Wrong

The browser displays the Virtual DOM.

Correct

The browser only displays the Real DOM.

------------------------------------------------

Wrong

React rebuilds the entire webpage every time.

Correct

React updates only the parts of the Real DOM that actually changed.

===============================================================================
14. MINI CHALLENGES
===============================================================================

Challenge 1

Question

Who updates the browser without React?

Answer

JavaScript

✔ Correct

------------------------------------------------

Challenge 2

Question

What happens before React updates the browser?

Answer

React creates a new Virtual DOM representation, compares it with the previous
Virtual DOM, finds the differences, then updates only the necessary parts of
the Real DOM.

✔ Correct

------------------------------------------------

Challenge 3

Question

Why doesn't React immediately update the Real DOM?

Answer

To minimize unnecessary DOM manipulations by determining exactly what changed
before updating the browser.

✔ Correct

===============================================================================
15. KEYWORDS LEARNED
===============================================================================

Real DOM

Virtual DOM

DOM Manipulation

Comparison

Difference

Reconciliation (Introduction)

Browser

Memory Representation

===============================================================================
16. BEST PRACTICES
===============================================================================

✔ Think of the Virtual DOM as React's working copy.

✔ Remember that the browser only renders the Real DOM.

✔ React minimizes DOM manipulations rather than replacing the DOM.

✔ Focus on understanding WHY React works this way instead of memorizing
definitions.

===============================================================================
17. SUMMARY
===============================================================================

Today I learned

✔ Why React was created

✔ What the Real DOM is

✔ What the Virtual DOM is

✔ Difference between Real DOM and Virtual DOM

✔ How React updates only the changed parts of the UI

✔ Why React applications are easier to maintain than manual DOM manipulation

This knowledge prepares me for learning React State, because State is what
triggers React to create a new Virtual DOM representation.

===============================================================================
18. NEXT LESSON
===============================================================================

Topic

React State

We will learn

✔ What State is

✔ Why State exists

✔ Why normal variables do not update the UI

✔ useState()

✔ State update cycle

✔ First interactive React application

===============================================================================