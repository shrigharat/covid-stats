import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {GlobalCase} from "./components/head/global-case";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            global: {},
            countries: [],
            searchField: '',
            lastUpdated: ''
        }
    }

    async componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then(data => data.json())
            .then(data => this.setState({countries: data["Countries"], global: data["Global"], lastUpdated: data["Date"]}))
    }

    render() {
        let {countries, searchField} = this.state;
        let filteredCountries = countries.filter(
            country => country["Country"].toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <GlobalCase data={this.state.global}/>
                <div className="last-updated-date">
                    <h6>Last Updated : {this.state.lastUpdated}</h6>
                </div>
                <SearchBox
                    placeholder="search country"
                    handleChange={(e) => {this.setState({searchField: e.target.value})}}
                />
                <CardList data={filteredCountries}/>
            </div>
        );
    }
}

export default App;