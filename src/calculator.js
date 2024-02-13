// calculator.js File 
// Imports. 
import React from "react"; 
import CalculatorTitle from "./calculatorTitle.js"; 
import OutputScreen from "./outputScreen.js"; 
import Button from "./button.js"; 
import { evaluate, round } from "mathjs";

class Calculator extends React.Component {

    
    constructor() { 
        super(); 
        // set our default state 
        this.state = { 
        question: '', 
        answer: ''
        } 
        // Bind our handleClick method (sets 'this' explicitly 
        // to refer to this component) We did this because 'this' 
        // would refer to the source of the click events 
        this.handleClick = this.handleClick.bind(this); 
    }

    componentDidMount(){
        console.log('here')
        console.log(this.state.question)
    }

    handleClick = (event) =>{ 
        // get the value from the target element (button) 
        const value = event.target.value; 
        console.log("********")
        console.log(value)
        
        switch (value) { 
            case "=": { 
                // if it's an equal sign, use the eval module 
                // to evaluate the question ,convert the answer 
                // (in number) to String 
                if (this.state.question !== "") { 
                    var ans = ""; 
                    try { 
                        ans = evaluate(this.state.question); 
                        
                    } catch (err) { 
                        this.setState({ answer: "Math Error" }); 
                    } 
                    if (ans === undefined) {this.setState({ answer: "Math Error" }); }
                    // update answer in our state. 
                    else {this.setState({ answer: ans, question: "" });
                          this.answer = ans;}
                    console.log(this.answer)
                    break; 
                } 
                
            } 
            case "Clear": { 
                // if it's the Clears sign, just clean our 
                // question and answer in the state 
                this.setState({ question: "", answer: "" }); 
                break; 
            } 
    
            case "Delete": { 
                var str = this.state.question; 
                str = str.substr(0, str.length - 1); 
                this.setState({ question: str }); 
                break; 
            } 
    
            default: { 
                // for every other command, update the answer in the state 
                this.setState({ question: (this.state.question += value) }); 
                break; 
            } 
            
        } 
    }
    
  
	render() { 
		return ( 
			<div className="frame"> 
				<CalculatorTitle value="Ani Calculator" /> 
				<div className="mainCalc"> 
                        <OutputScreen question={this.state.question} answer={this.state.answer} />
					<div className="button-row"> 
						<Button value="Clear" handleClick ={this.handleClick}  /> 
						<Button  value="Delete" handleClick = {this.handleClick}/> 
						<Button  value="." handleClick={this.handleClick} /> 
						<Button value="/" handleClick={this.handleClick} /> 
					</div> 
					<div className="button-row"> 
						<Button  value="7" handleClick={this.handleClick} /> 
						<Button  value="8" handleClick={this.handleClick} /> 
						<Button  value="9" handleClick={this.handleClick} /> 
						<Button value="*" handleClick={this.handleClick}  /> 
					</div> 
					<div className="button-row"> 
						<Button value="4" handleClick={this.handleClick}  /> 
						<Button value="5" handleClick={this.handleClick} /> 
						<Button  value="6" handleClick={this.handleClick} /> 
						<Button  value="-" handleClick={this.handleClick}  /> 
					</div> 
					<div className="button-row"> 
						<Button value="1" handleClick={this.handleClick} /> 
						<Button value="2" handleClick={this.handleClick} /> 
						<Button value="3" handleClick={this.handleClick}  /> 
						<Button value="+" handleClick={this.handleClick}  /> 
					</div> 
					<div className="button-row"> 
						<Button  value="0" handleClick={this.handleClick}  /> 
						<Button value="=" handleClick={this.handleClick} /> 
					</div> 
				</div> 
			</div> 
		); 
	} 


      // our method to handle all click events from our buttons 

} 
export default Calculator; // Export Calculator Component

