import React from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
// import { Button } from 'antd';
import FetchDataActions from './actions';


class Table extends React.Component {

    render() {
                
        return (
            <div className="App">
                {/* <Button type="primary" onClick={() => this.props.fetchDataEventHandler()}>Update Movies</Button> */}
                {this.props.first_get_request && this.props.fetchDataEventHandler()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        first_get_request: state['myFetchData'].get('first_get_request')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataEventHandler: () => {
            dispatch(FetchDataActions.getMovies());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

