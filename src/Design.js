/* eslint-disable no-eval */
import { useState } from "react";
   
function Design(){
    let operations=[]
    let [display, setDisplay] = useState("")

    function buttonClick (props) {
        let sign = props.target.value
        setDisplay(display.concat(sign)) 
    } 
    function numberClick (props) {
        let number = props.target.value
        setDisplay(display.concat(number))
        
    }
    function clearDisplay(){
        setDisplay("")
    }
    function deleteLastChar(){
        setDisplay(display.slice(0,display.length-1))
    }
    function resolveClick(){
        try {
            setDisplay(eval(display).toString())
        } catch (error) {
            clearDisplay()
        }
       }
       
       
    return(
        <div className="calculadora">
            <div className="display">
               <input type="text" disabled className="display-number" value={display}></input>
            </div>
            <hr className="borderline"></hr>
            <table className="table">
                <tr className="row">
                    <th><button value="AC" onClick={clearDisplay} className="special-btn">AC</button></th>
                    <th><button value="DEL" onClick={deleteLastChar} className="special-btn">DEL</button></th>
                    <th><button value="/" onClick={buttonClick} className="special-btn">/</button></th>
                    <th><button value="*" onClick={buttonClick} className="special-btn">*</button></th>
                </tr>
                <tr className="row">
                    <th><button value="7" onClick={numberClick} className="number-btn">7</button></th>
                    <th><button value="8" onClick={numberClick} className="number-btn">8</button></th>
                    <th><button value="9" onClick={numberClick} className="number-btn">9</button></th>
                    <th><button value="-" onClick={buttonClick} className="special-btn">-</button></th>
                </tr>
                <tr className="row">
                    <th><button value="4" onClick={numberClick} className="number-btn">4</button></th>
                    <th><button value="5" onClick={numberClick} className="number-btn">5</button></th>
                    <th><button value="6" onClick={numberClick} className="number-btn">6</button></th>
                    <th><button value="+" onClick={buttonClick} className="special-btn">+</button></th>
                </tr>
                <tr className="row">
                    <th><button value="1" onClick={numberClick} className="number-btn">1</button></th>
                    <th><button value="2" onClick={numberClick} className="number-btn">2</button></th>
                    <th><button value="3" onClick={numberClick} className="number-btn">3</button></th>
                    <th><button value="=" onClick={resolveClick} className="special-btn">=</button></th>
                </tr>
                <tr className="row">
                    <th><button value="0" onClick={numberClick} className="number-btn">0</button></th>
                    <th><button value="." onClick={numberClick} className="number-btn">.</button></th>
                    
                </tr>
            </table>
            <div className="history">
            </div>            
        </div>
    )
}

export default Design;