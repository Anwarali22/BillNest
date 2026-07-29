# React Learning Notes
Author: Anwar
Project: BillNest (ASP.NET Core MVC + React + Vite)

===============================================================================
PURPOSE
===============================================================================

This document contains everything I learned while building React from scratch.

The goal is NOT to memorize commands.

The goal is to understand WHY every file, command and package exists.

Whenever I come back after weeks or months, reading this document should help me
quickly understand the project again.

===============================================================================
PROJECT STRUCTURE
===============================================================================

BillNest
│
├── Controllers
├── Models
├── Views
├── wwwroot
│
├── src
│   ├── main.jsx
│   ├── App.jsx
│   └── Components
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
└── BillNest.csproj

===============================================================================
HOW REACT APPLICATION STARTS
===============================================================================

User

↓

npm run dev

↓

npm reads package.json

↓

Finds

"dev": "vite"

↓

Runs Vite

↓

Vite starts Development Server

↓

Browser opens

http://localhost:5173

↓

Browser receives index.html

↓

index.html loads

main.jsx

↓

main.jsx imports

App.jsx

↓

ReactDOM.createRoot()

↓

App Component

↓

Browser displays UI

===============================================================================
FILES UNDERSTANDING
===============================================================================

1. package.json

Purpose

Stores

• Project Information
• Dependencies
• Scripts

C# Comparison

BillNest.csproj

------------------------------------------------

2. package-lock.json

Purpose

Stores exact package versions.

Reason

Every developer gets exactly the same versions.

------------------------------------------------

3. node_modules

Purpose

Stores downloaded packages.

Never edit manually.

Can always be recreated using

npm install

------------------------------------------------

4. vite.config.js

Purpose

Configures Vite.

Tells Vite

• Use React Plugin

• Process JSX

------------------------------------------------

5. index.html

Purpose

First page loaded by browser.

Contains

<div id="root"></div>

React renders inside this div.

------------------------------------------------

6. main.jsx

Purpose

Entry Point of React.

Responsibilities

Import React

Import ReactDOM

Import App

Create Root

Render App

------------------------------------------------

7. App.jsx

Purpose

Root React Component.

Returns JSX.

Can import other Components.

===============================================================================
COMMANDS I LEARNED
===============================================================================

Check Node Version

node -v

-----------------------------------

Check npm Version

npm -v

-----------------------------------

Initialize npm

npm init -y

Purpose

Creates package.json

-----------------------------------

Install React

npm install react react-dom

Purpose

Downloads React Libraries.

-----------------------------------

Install Vite

npm install -D vite @vitejs/plugin-react

Purpose

Downloads Development Tools.

-----------------------------------

Run Project

npm run dev

Purpose

Starts Vite Development Server.

===============================================================================
IMPORTANT DIFFERENCE
===============================================================================

React

Builds User Interface.

-----------------------------------

ReactDOM

Displays React inside Browser.

-----------------------------------

Vite

Development Tool.

Starts Server.

Converts JSX.

Reloads Browser.

===============================================================================
IMPORTS
===============================================================================

"./"

Means

Current Folder

Example

import App from "./App";

-----------------------------------

No "./"

Means

Package from node_modules

Example

import React from "react";

===============================================================================
C# COMPARISON
===============================================================================

C#

using

↓

JavaScript

import

-----------------------------------

public class

↓

export default

-----------------------------------

View()

↓

JSX

-----------------------------------

Program.cs

↓

main.jsx

-----------------------------------

.csproj

↓

package.json

-----------------------------------

NuGet

↓

npm

-----------------------------------

dotnet run

↓

npm run dev

-----------------------------------

Kestrel

↓

Vite Development Server

===============================================================================
COMMON DEBUGGING
===============================================================================

Problem

npm.ps1 cannot be loaded

Reason

PowerShell Execution Policy.

Not a React Problem.

Solution

Use CMD

OR

Change PowerShell Execution Policy.

===============================================================================
WHAT I LEARNED TODAY
===============================================================================

Date

09 June 2026

Topics

✔ What React is

✔ Why React exists

✔ npm

✔ package.json

✔ package-lock.json

✔ node_modules

✔ React

✔ ReactDOM

✔ Vite

✔ Vite Plugin

✔ Development Server

✔ index.html

✔ main.jsx

✔ App.jsx

✔ React Project Flow

✔ npm run dev

✔ Import

✔ Export

✔ JSX

✔ Root Component

✔ PowerShell Debugging

===============================================================================
NEXT LESSON
===============================================================================

Topic

React Components

We'll learn

• Why Components exist

• Component Reusability

• Folder Structure

• React Fragment

• Why React Components return a single parent element