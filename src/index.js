import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Home from './Home';

import { configure } from 'mobx';

configure({
  enforceActions: true,
});

ReactDOM.render(
    <div>
      <Router>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/home/" />
            <Route exact path="/home" component={Home} key="home" />

            <Route component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>,
    document.getElementById('main'),
);
