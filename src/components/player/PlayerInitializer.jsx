import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebTorrent from 'webtorrent';

export default class PlayerInitializer extends Component {
    static propTypes = {
        setTorrentClient: PropTypes.func,
    }

    static defaultProps = {
        setTorrentClient: () => {},
    }

    componentDidMount() {
        const client = new WebTorrent();
        this.props.setTorrentClient(client);
    }

    render() {
        return null;
    }
}
