import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import moment from 'moment';
import styles from './home.scss';


class Home extends Component {

    render() {
        const {events} = this.props;
        return (
            <div className={styles.container}>
                {events && events.map(event =>
                    <div key={event.id} className={styles.event}>
                        <Link to={event.id}>
                            {event.name.text} <br/>
                            Event Date : {moment(event.start.local).format('YYYY-MM-DD')} <br/>
                            Start Time : {moment(event.start.local).format('hh:mm')}
                        </Link>
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);