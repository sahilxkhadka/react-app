import React from "react";

function Card(props) {
    return (
        <div className="term">
          <dt>
            <img src= {props.emoji} alt="" className="emoji"/>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
    )
}
export default Card