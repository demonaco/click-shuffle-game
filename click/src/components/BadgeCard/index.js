import React, { Component } from "react";


function BadgeCard(props) {
    return (
<React.Fragment>
<main className="imgContainer">
  <div className="card">
<img src={props.image} className="card-img-top" alt="Pokemon Badge" id={props.id} onClick={props.shuffleFun} onClick={props.onClick}>
    </img>
    </div>
    </main>
    </React.Fragment>
    );
}

export default BadgeCard;