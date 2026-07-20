# Lesson 1 - React Fundamentals

## What is React?

React is a JavaScript library used to build User Interfaces (UI).

Instead of refreshing the whole web page, React updates only the part of the page that changes.

---

## MVC vs React

ASP.NET MVC

Browser
↓

Controller
↓

View (.cshtml)
↓

HTML

React

Browser
↓

React Component
↓

Virtual DOM
↓

HTML

---

## Why React?

Without React

Every request usually returns a new HTML page.

With React

Only the changed part of the UI is updated.

This makes applications faster and provides a smoother user experience.

---

## Important Terms

Component

A reusable piece of UI.

Example

Header
Footer
Login Form
Dashboard
Sidebar

Everything in React is built using Components.

---

## JSX

JSX = JavaScript + HTML

Example

<h1>Hello</h1>

JSX is NOT HTML.

Vite converts JSX into JavaScript that browsers understand.

---

## C# Comparison

MVC

Controller

↓

View()

React

Component

↓

JSX

---

## Packages Installed

npm init -y

Purpose

Creates package.json

Equivalent

.csproj

------------------------------------

npm install react react-dom

Purpose

Downloads React libraries.

Equivalent

NuGet Install Package

------------------------------------

npm install -D vite @vitejs/plugin-react

Purpose

Downloads Development Tools.

Equivalent

Build Tools

---

## Files Created

package.json

Purpose

Stores project information and dependencies.

------------------------------------

node_modules

Purpose

Stores downloaded packages.

------------------------------------

package-lock.json

Purpose

Stores exact package versions.

---

## Things I Learned Today

✔ What React is

✔ Why React exists

✔ Why npm is needed

✔ Why package.json exists

✔ Difference between react and react-dom

✔ Why Vite is needed