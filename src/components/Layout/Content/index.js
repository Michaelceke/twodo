import React from "react";
import "./content.scss";
import TodoPage from "../../TodoPage/TodoPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


const PageContent=()=>{
    return(
            <div className={"content"}>
                      <Router>
                          <Switch>
                                  <Route path="/" exact>
                                      <TodoPage/>
                                  </Route>
                          </Switch>
                      </Router>
            </div>
        )
};


export default PageContent;