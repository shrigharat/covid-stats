import React from "react";

import './global-case.style.css';

export const GlobalCase = props => (
    <div className="global-case">
        <img className="globe-image" src="https://i.pinimg.com/originals/f3/7e/bb/f37ebbea1f4318dec775a4d705bd7cca.gif" alt="Globe gif"/>
        <div className="head">
            <h1>World Covid Data</h1>
        </div>
        <div className="info">
            <p>{"New Confirmed : " + props.data["NewConfirmed"]}</p>
            <p>{"Total Confirmed : " + props.data["TotalConfirmed"]}</p>
        </div>
        <div className="info">
            <p>{"New Deaths : " + props.data["NewDeaths"]}</p>
            <p>{"Total Deaths : " + props.data["TotalDeaths"]}</p>
        </div>
        <div className="info">
            <p>{"New Recovered : " + props.data["NewRecovered"]}</p>
            <p>{"Total Recovered : " + props.data["TotalRecovered"]}</p>
        </div>
    </div>
)