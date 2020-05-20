import React from 'react';
import logo from './darth-vader.png';
import './App.css';
import Table from '../Table/Table';
import FetchData from '../FetchData/FetchData';

class App extends React.Component {

    render() {
                
        return (
            <div className="App-header">
                <a className="App-link" href="https://swapi.dev/api/films" target="_blank" rel="noopener noreferrer">
                    <h1 id="header_1">Star Wars App</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                </a>
                <Table/>
                <FetchData/>
            </div>
        );
    }
}

export default App;