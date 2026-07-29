# Lesson 5 - React Components

## What is a Component?

A Component is a reusable piece of UI.

Think of it as a function that returns User Interface.

------------------------------------------------

C# Comparison

public string GetMessage()
{
    return "Hello";
}

React

function App()
{
    return (
        <h1>Hello</h1>
    );
}

Both return something.

C#

returns Data

React

returns UI

------------------------------------------------

Example

Website

Header

Menu

Sidebar

Dashboard

Footer

Every one of these is usually a separate Component.

------------------------------------------------

Example

Header.jsx

function Header()
{
    return (
        <h1>BillNest</h1>
    );
}

export default Header;

------------------------------------------------

App.jsx

import Header from "./Header";

function App()
{
    return (
        <>
            <Header />

            <h2>Dashboard</h2>
        </>
    );
}

------------------------------------------------

Why Components?

Without Components

One file

5000 lines

Very difficult to maintain.

With Components

Header

Footer

Sidebar

Dashboard

Each has its own file.

Easy to maintain.

Easy to reuse.

------------------------------------------------

Interview Question

What is a React Component?

Answer

A React Component is a reusable JavaScript function that returns JSX to describe part of the user interface.

------------------------------------------------

Things Learned

✔ Component

✔ Reusability

✔ JSX returned from a function

✔ Component hierarchy