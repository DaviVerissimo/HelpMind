import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Material/Create";
import Viewer from "./pages/Material/Viewer";
import Crud from "./pages/Material/Crud";
import Reporte from "./pages/Discente/Reporte";
import QuemSomos from "./pages/Publica/QuemSomos";
import Login from "./pages/Publica/Login";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/material/create" component = {Create} />
                <Route path = "/material/Viewer" component = {Viewer} />
                <Route path = "/material/Crud" component = {Crud} />
                <Route path = "/discente/Reporte" component = {Reporte} />
                <Route path = "/publica/QuemSomos" component = {QuemSomos} />
                <Route path = "/publica/Login" component = {Login} />
            </Switch>
        </BrowserRouter>
    );
}