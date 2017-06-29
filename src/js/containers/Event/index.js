import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutEvent from '../../components/AboutEvent/index';

class EventContainer extends Component {

    render() {
        const {events, params} = this.props;
        return (
            <div >
                {events && < AboutEvent event={events.find(event => event.id === params['id'])} />}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    events: state.events.events
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);