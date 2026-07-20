# Lesson 3 - What Happens When I Run "npm run dev"

## Most Beginners

They type

npm run dev

without knowing what happens.

We are going to understand every step.

---------------------------------------------------

Step 1

You type

npm run dev

inside Terminal.

↓

Step 2

npm opens package.json.

↓

Step 3

npm searches for

"scripts"

↓

It finds

"dev": "vite"

↓

Step 4

npm executes

vite

↓

Step 5

Vite starts a Development Server.

Example

http://localhost:5173

↓

Step 6

Browser opens

http://localhost:5173

↓

Step 7

Browser loads

index.html

↓

Step 8

index.html executes

main.jsx

↓

Step 9

main.jsx imports

App.jsx

↓

Step 10

React renders App component

↓

Browser shows

Hello React

---------------------------------------------------

Complete Flow

Terminal

↓

npm

↓

package.json

↓

vite

↓

Development Server

↓

Browser

↓

index.html

↓

main.jsx

↓

App.jsx

↓

UI

---------------------------------------------------

C# Comparison

ASP.NET Core

dotnet run

↓

Program.cs

↓

Middleware

↓

Controller

↓

View

↓

Browser

-----------------------------------

React

npm run dev

↓

Vite

↓

index.html

↓

main.jsx

↓

App.jsx

↓

Browser

---------------------------------------------------

Important

npm DOES NOT start React.

npm simply executes the command stored in package.json.

Vite starts React.