import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AboutEvent extends Component {

    render() {
        const {event} = this.props;
        const description = event.description.html
        return (
            <div>
                {event.vanity_url && <a href={event.vanity_url}>For more information, click here!</a>}
                <div dangerouslySetInnerHTML = {{__html: description}}/>
            </div>
        )
    }
}