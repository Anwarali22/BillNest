/*
===============================================================================
FILE : App.jsx

PURPOSE

Root Component

This component uses another component.

Header Component

===============================================================================
*/

// Import our Header Component.
//
// "./Components/Header"
//
// Means
//
// Current Folder
//
// ↓
//
// Components Folder
//
// ↓
//
// Header.jsx
//
import Header from "./Components/Header";

function App() {
    return (

        <>
            <Header />
            <Header />
            <Header />
            <h2>Hello React</h2>
            <p>Learning components</p>
            </>
    );
}

export default App;