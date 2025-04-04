// Task 1: Creating a New Component
import React from 'react'; // Importing React library

// Defining a functional React component named Greeting
function Greeting() {
    // The component returns a JSX block containing a heading and paragraph
  return (
    <div>
        <h2>Hello from the Greeting Component!</h2>
        <p>This is your first custom component in React.</p>
    </div>
  );
}
// Exporting the Greeting component so it can be used in other files
export default Greeting;