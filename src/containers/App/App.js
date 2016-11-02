import Helmet from 'react-helmet';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect';
import {isLoaded as isInfoLoaded, load as loadInfo} from 'redux/modules/info';

import config from '../../config';

@asyncConnect([
    {
        promise: ({
            store: {
                dispatch,
                getState
            }
        }) => {
            const promises = [];

            if (!isInfoLoaded(getState())) {
                promises.push(dispatch(loadInfo()));
            }

            return Promise.all(promises);
        }
    }
])

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {}

    render() {
        const styles = require('./App.scss');

        return (
            <div className={styles.app}>
                <Helmet {...config.app.head}/>

                <div className={styles.appContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
