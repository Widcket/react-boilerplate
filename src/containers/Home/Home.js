import Helmet from 'react-helmet';
import React, {Component} from 'react';

import config from '../../config';

export default class Home extends Component {
    render() {
        const styles = require('./Home.scss');
        // require the logo image both from client and server
        const logoImage = require('./logo.png');

        return (
            <div className={styles.home}>
                <Helmet title="Home"/>
                <p>Hola mundo</p>
            </div>
        );
    }
}
