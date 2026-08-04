/*
===============================================================================
FILE : Header.jsx

PURPOSE

Reusable Header Component

C# Comparison

public string GetHeader()
{
    return "BillNest Header";
}

Difference

C#

Returns Data

React

Returns UI (JSX)

===============================================================================
*/

// Component Name
// Rule:
//
// Component names ALWAYS begin with CAPITAL LETTER.
//
// Correct
//
// Header
//
// Wrong
//
// header
//
function Header() {
    // Return JSX

    return (

        <h1>BillNest Header</h1>

    );
}

// Allow other files to use this component.
export default Header;