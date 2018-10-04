import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store, { history } from "./Redux/Store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import HomePage from "./Components/HomePage";
import MainPage from "./Components/MainPage";
import ProfilePage from "./Components/ProfilePage.jsx";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <HomePage location={props.location.pathname} />}
        />
        <Route exact path="/home" render={props => <HomePage />} />
        <Route exact path="/main" render={props => <MainPage />} />
        <Route
          exact
          path="/profile"
          render={props => <ProfilePage location={props.location.pathname} />}
        />
        <Route render={props => <ErrorPage />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
