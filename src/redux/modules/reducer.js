import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as form} from 'redux-form';

import info from './info';
import widgets from './widgets';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  multireducer: multireducer({

  }),
  info,
  widgets
});
