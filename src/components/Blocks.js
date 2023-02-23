/**
 * A general Block componment for god view.
 */
import React from 'react';

function Block(props){
    return(
        <div className={props.className}>
            <p><span>Block:</span>{props.block}</p>
            <p><span>Nonce:</span>{props.nonce}</p>
            <p><span>Data:</span>{props.data}</p>
            <p><span>Prev:</span>{props.prev}</p>
        </div>
   );
}

export default Block;