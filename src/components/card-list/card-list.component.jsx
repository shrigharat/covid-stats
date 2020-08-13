import React, {Component} from "react";
import './card-list.style.css'
import {Card} from "../card/card.component";


export class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoPaneVisible: false,
            infoObject: {}
        }
    }

    render() {
        return (
            <div className="row">
                <div className={this.state.infoPaneVisible ? "card-list col-lg-8" : "card-list col-lg-12"}>
                    {
                        this.props.data.map(
                            country => (
                                <Card
                                    countryObject={country}
                                    onClick={() => {
                                        this.setState(
                                            state => {
                                                return {
                                                    infoPaneVisible: state.infoPaneVisible ? state.infoObject === country ? !state.infoPaneVisible : state.infoPaneVisible : !state.infoPaneVisible,
                                                    infoObject: country
                                                };
                                            }
                                        )
                                    }}
                                />
                            )
                        )
                    }
                </div>

                {
                    this.state.infoPaneVisible ? <div className={this.state.infoPaneVisible ? "col-lg-4 info-pane" : "info-pane"}>
                        <div className="info-pane-header">
                            <h2 className="info-pane-country">
                                {this.state.infoObject["Country"]}
                            </h2>
                            <img src={`https://www.countryflags.io/${this.state.infoObject["CountryCode"]}/flat/64.png`}
                                 alt="country flag"/>

                            <button
                                className="close-btn"
                                onClick={() => {
                                    this.setState(state => {
                                        return {
                                            infoPaneVisible: !state.infoPaneVisible
                                        }
                                    })
                                }}
                            >
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                </svg>
                            </button>
                        </div>
                        <table className="table table-success">
                            <tbody>
                            <tr>
                                <td>New Confirmed</td>
                                <td>{this.state.infoObject["NewConfirmed"]}</td>
                            </tr>
                            <tr>
                                <td>Total Confirmed</td>
                                <td>{this.state.infoObject["TotalConfirmed"]}</td>
                            </tr>
                            <tr>
                                <td>New Deaths</td>
                                <td>{this.state.infoObject["NewDeaths"]}</td>
                            </tr>
                            <tr>
                                <td>Total Deaths</td>
                                <td>{this.state.infoObject["TotalDeaths"]}</td>
                            </tr>
                            <tr>
                                <td>New Recovered</td>
                                <td>{this.state.infoObject["NewRecovered"]}</td>
                            </tr>
                            <tr>
                                <td>Total Recovered</td>
                                <td>{this.state.infoObject["TotalRecovered"]}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div> : null
                }
            </div>
        );
    }

}