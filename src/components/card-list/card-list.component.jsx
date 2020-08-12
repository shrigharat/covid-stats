import React from "react";
import './card-list.style.css'
import {Card} from "../card/card.component";


export const CardList = (props) => (
    <div>
        <div className="card-list">
            {
                props.data.map(
                    country => (
                        <Card countryObject={country} onClick={
                            () => {
                                document.querySelector(".card-list").classList.toggle("col-lg-12");
                                document.querySelector(".card-list").classList.toggle("col-lg-6");
                                document.querySelector(".info-pane").classList.toggle("col-lg-6");
                            }}/>
                    )
                )
            }
        </div>

        <div className="info-pane">

        </div>
    </div>
);