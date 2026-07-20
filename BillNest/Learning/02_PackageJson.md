# Lesson 2 - Understanding package.json

## What is package.json?

package.json is the configuration file of a JavaScript project.

It tells npm:

- Project Name
- Version
- Dependencies
- Development Dependencies
- Scripts

C# Comparison

.csproj

stores

- Target Framework
- NuGet Packages
- Build Information

package.json

stores

- npm Packages
- Project Information
- Build Scripts

-----------------------------------

## Current package.json

{
    "name": "billnest",
    "version": "1.0.0"
}

name

Project Name

-----------------------------------

version

Current Version

-----------------------------------

dependencies

Packages required by the application.

Example

React

ReactDOM

-----------------------------------

devDependencies

Packages required only while developing.

Example

Vite

React Plugin

-----------------------------------

scripts

Custom commands.

Instead of typing

node something.js

we can type

npm run dev

or

npm run build

-----------------------------------

Think Like This

NuGet

↓

Downloads Packages

npm

↓

Downloads Packages

-----------------------------------

.csproj

↓

Project Configuration

package.json

↓

Project Configuration