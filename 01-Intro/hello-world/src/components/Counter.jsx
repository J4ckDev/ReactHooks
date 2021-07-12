import React, {useState, Fragment} from 'react';

export function Counter() {

    const [number, setNumber] = useState(0);

    const increase = () => {
        console.log('Increased')
        setNumber(number+1)
    }

    return ( 
        <Fragment>
            <h2>My first component {number}</h2>
            <button onClick={increase}>Increase</button>
        </Fragment>
     );
}