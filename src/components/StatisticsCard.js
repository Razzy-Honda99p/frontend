/**
 * A card componment for statstics summaries in the global view.
 */
import React from 'react';
import "../css/GlobalView.css";

function StatisticsCard(props){
    return(
        <div className="card statistics-cards" id={props.id}>
            <p className="statistics-card-title">{props.title}</p>
            <p className="statistics-content">{props.content}</p>
        </div>
   );
}

export default StatisticsCard;