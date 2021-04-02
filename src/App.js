import React from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";


import Main from "./Layout/Homepage/Main/Main";
import Heading from "./Layout/Homepage/Heading/Heading";
import ViewArticle from "./Layout/ViewArticle/ViewArtice";
import NewArticle from "./Layout/NewArticle/NewArticle";

function App() {
  return (
    <div className="App">
        <Router>
            <Heading/>
            <Switch>
                <Route exact path='/'   >
                    <Main/>
                </Route>
                <Route  path='/article/:id'   >
                   <ViewArticle/>
                </Route>
                <Route  path='/new-article'   >
                  <NewArticle/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
