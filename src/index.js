import React from 'react';
import ReactDOM from 'react-dom';
import './Agit pp.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store, { history } from './Redux/Store'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import HomePage from './Components/HomePage'



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}>
            <Switch>
                <Route exact path="/" render={(props) => (<HomePage location={props.location.pathname} />)} />


            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
