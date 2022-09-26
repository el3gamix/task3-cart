import React, { useState, useEffect } from 'react'
import './cStyling.css';

export default function C001() {

    const [num01, setNum01] = useState(100);
    const [num02, setNum02] = useState(50);
    const [result, setResult] = useState(0);

    useEffect(() => {
        //setResult(result + 1);
        setResult(num01 + num02);
    });

    return (
        <div className='cStyle'>
            <h4>Hi from C001 component</h4>

            <h1>{num01} + {num02} = {result}</h1>

            <div>
                <button onClick={() => setNum01(num01 + 1)}>
                    +1
                </button>
                <button onClick={() => setNum01(num01 - 1)}>
                    -1
                </button>
                &nbsp; , &nbsp;
                <button onClick={() => setNum02(num02 + 1)}>
                    +1
                </button>
                <button onClick={() => setNum02(num02 - 1)}>
                    -1
                </button>
            </div>
        </div>
    )
}
