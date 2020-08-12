import React from "react";
import './card.style.css';

export const Card = (props) =>
    (
        <div className="country-card">
            <img src={`https://www.countryflags.io/${props.countryObject["CountryCode"]}/flat/64.png`} alt="flag"/>
            <h3 className="country-name">{props.countryObject["Country"]}</h3>
            <p>{"Total confirmed : " + props.countryObject["TotalConfirmed"]}</p>
            <p>{"Total recovered : " + props.countryObject["TotalRecovered"]}</p>
        </div>
    );

