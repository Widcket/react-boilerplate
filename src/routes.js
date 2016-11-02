import React from 'react';
import { App, Home, NotFound } from 'containers';
import { IndexRoute, Route } from 'react-router';

export default(store) => {
  /**
   * Please keep routes in alphabetical order
   */
    return (
      <Route path="/" component={App}>
          {/* Home (main) route */}
          <IndexRoute component={Home}/> {/* Catch all route */}
          <Route path="*" component={NotFound} status={404}/>
      </Route>
  );
};
