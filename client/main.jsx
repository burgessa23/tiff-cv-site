import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router-dom';
import Index from 'components/Index/';
import Detail from 'components/detail/';

require('smoothscroll-polyfill').polyfill();

const history = createHistory();

history.listen((location, action) => {
  if (location.hash) {
    setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  } else {
    window.scrollTo(0, 0);
  }
});

render((
  <Router history={ history } >
    <Switch>
      <Route exact path='/detail/:category/:item' component={ Detail }/>
      <Route path='/' component={ Index } />
    </Switch>
  </Router>
), document.getElementById('js-main'));
