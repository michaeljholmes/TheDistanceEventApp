import {getEvents} from '../../actions/eventsActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    constructor() {
        super();
    }

    componentDidMount(){
        this.props.loadEvents();
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    loadEvents: () => getEvents(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);