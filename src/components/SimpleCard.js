/**
 * A general card componment.
 */
import React from 'react';

function SimpleCard(props){
    return(
        <div className="card" id={props.id}>
            <p className="title">{props.title}</p>
            {props.childComponent}
        </div>
   );
}

export default SimpleCard;