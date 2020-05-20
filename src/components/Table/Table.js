import React from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import './Table.css';

class Table extends React.Component {

    render() {
        function getMoviesFromInitialState(movies) {
            let to_return = [];
            for(let i = 0; i < movies.length; i++){
                to_return[i] =
                <tr>
                    <td>{movies[i]}</td>
                    <input type="checkbox" id={movies[i]}
                    onChange={(e)=> {e.target.checked ? localStorage.setItem(movies[i], e.target.checked) : localStorage.removeItem(movies[i])}}
                    defaultChecked={localStorage.getItem(movies[i])}></input>
                </tr>
            }
            return to_return;
        }
            
        return (
            <div className="App">
                {!this.props.failed &&
                    <table>
                    <tr>
                        <th>Movie</th>
                        <th>Favorite</th>
                    </tr>
                    {getMoviesFromInitialState(this.props.movies)}
                    </table>
                }
                {this.props.failed && 
                    <h1 id="header_1">ACTION FAILED</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state['myFetchData'].get('movies'),
        failed: state['myFetchData'].get('failed')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

