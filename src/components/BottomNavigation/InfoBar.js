import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {load} from 'redux/modules/info';

@connect(state => ({info: state.info.data}), dispatch => bindActionCreators({
    load
}, dispatch))

export default class InfoBar extends Component {
    static propTypes = {
        info: PropTypes.object,
        load: PropTypes.func.isRequired
    }

    render() {
        const {info, load} = this.props; // eslint-disable-line no-shadow
        const styles = require('./InfoBar.scss');
        return (
            <div className={styles.infoBar + ' well'}></div>
        );
    }
}
