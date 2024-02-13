// button.js File 
import React from "react"; // Import React (Mandatory Step) 

// Create our Button component as a functional component. 
const Button = ({ value, handleClick}) => { 

   
	return ( 
	<input onClick={handleClick} type="button" value={value} /> 
	); 
}; 
export default Button; // Export our button component
