import React, {Fragment} from 'react';

export function Operation(){
    const temperature = 25;
    const randomPicture = <img src="https://picsum.photos/200" alt="Random pictures" />;
    return (
        <Fragment>
            <h2>¿Weather hot or cold??</h2>
            <p>
                {
                    temperature > 20 ? "Hot" : "Cold"
                }
            </p>
            {randomPicture}
        </Fragment>
    );
}