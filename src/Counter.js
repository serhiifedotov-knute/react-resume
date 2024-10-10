import { useState } from "react";

// Component Counter
export default function Counter(){
    const [count, changeCount] = useState(0);

    function decrease(){
        changeCount(count-1);
    }
    function increase(){
        changeCount(count+1);
    }

    return (
        <div>
            <button className="sf-example" onClick={decrease} >Decrease</button> Value: {count} <button onClick={increase}>Increase</button>
        </div>
    )
}