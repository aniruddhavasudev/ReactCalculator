//index.js File 
import React from "react"; 
import ReactDOM from "react-dom"; 
import { createRoot } from 'react-dom/client';
import Calculator from "./calculator.js"; 
import './index.css';


// Render the Calculator to the Web page. 
// ReactDOM.render(<Calculator />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Calculator />);
