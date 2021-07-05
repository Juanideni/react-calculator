import { useEffect, useState } from "react";

function Design(props){

    let[number, setNumber] = useState(props.initial || 0)

    useEffect(function(){
        setNumber(props.initial)
    }, [props])




    return(
        <div className="calculadora">
            <div className="display">
                <p> {number}</p>
            </div>
            <table className="numbers">
                <tr className="row">
                    <th><button>AC</button></th>
                    <th><button >DEL</button></th>
                    <th><button >/</button></th>
                    <th><button >X</button></th>
                </tr>
                <tr className="row">
                    <th><button >7</button></th>
                    <th><button>8</button></th>
                    <th><button >9</button></th>
                    <th><button >-</button></th>
                </tr>
                <tr className="row">
                    <th><button >4</button></th>
                    <th><button >5</button></th>
                    <th><button >6</button></th>
                    <th><button >+</button></th>
                </tr>
                <tr className="row">
                    <th><button>1</button></th>
                    <th><button >2</button></th>
                    <th><button >3</button></th>
                    <th><button>=</button></th>
                </tr>
                <tr className="row">
                    <th><button>0</button></th>
                </tr>
            </table>
        </div>
    )
}

export default Design;