// Import React (Mandatory Step). 
import React from "react"; 
import Calculator from "./calculator.js";

// Functional Component. 
// Used to show Question/Answer. 
const OutputScreenRow = (props) => { 
    console.log('outputrow',props.value)
    return ( 
        <div className="screen-row"> 
            <input type="text" readOnly value={props.value} /> 
        </div> 
    ); 
}; 

// Export Output Screen Row. 
export default OutputScreenRow;
