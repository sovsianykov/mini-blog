import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Layout/Homepage/Main/Main";
import Heading from "./Layout/Homepage/Heading/Heading";
import ViewArticle from "./Layout/ViewArticle/ViewArtice";
import NewArticle from "./Layout/NewArticle/NewArticle";
import { Provider } from "react-redux";
import { getReduxStore, getRrfProps } from "./Config/firebase-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import LoginPage from "./Layout/LoginPage]/LoginPage";

function App() {
  return (
    <div className="App">
      <Provider store={getReduxStore()}>
        <ReactReduxFirebaseProvider {...getRrfProps()}>
          <Router>
            <Heading />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/article/:id">
                <ViewArticle />
              </Route>
              <Route path="/new-article">
                <NewArticle />
              </Route>
              <Route path="/login-page">
                <LoginPage/>
              </Route>
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
}

export default App;
