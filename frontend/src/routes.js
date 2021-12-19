import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Material/Create";
import Viewer from "./pages/Material/Viewer";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/material/create" component = {Create} />
                <Route path = "/material/Viewer" component = {Viewer} />
            </Switch>
        </BrowserRouter>
    );
}