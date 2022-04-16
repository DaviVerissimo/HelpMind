import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Material/Create";
import Viewer from "./pages/Material/Viewer";
import Crud from "./pages/Material/Crud";
import Reporte from "./pages/Discente/Reporte";
import QuemSomos from "./pages/Publica/QuemSomos";
import Login from "./pages/Publica/Login";
import ListaDeReportes from "./pages/ADM/ListaDeReportes";
import MateriaisOnline from "./pages/Publica/MateriaisOnline";
// import SimulacaoQuestionarioResultado from "./pages/Publica/SimuladorDeQuestionario/SimulacaoQuestionarioResultado";
import QuestionarioDeDepressaoDeBeck from "./pages/Discente/QuestionarioDeDepressaoDeBeck";
import InventarioDeBeckFinalizar from "./pages/Publica/ProfissionalDeSaude/InventarioDeBeckFinalizar";
import EscolherQuestionariosDiscente from "./pages/Discente/EscolherQuestionariosDiscente";
import QuestionarioSocioeconomico from "./pages/Discente/QuestionarioSocioeconomico";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/material/create" component={Create} />
                <Route path="/material/Viewer" component={Viewer} />
                <Route path="/material/Crud" component={Crud} />
                <Route path="/discente/Reporte" component={Reporte} />
                <Route path="/discente/QuestionarioSocioeconomico" component={QuestionarioSocioeconomico} />
                <Route path="/discente/EscolherQuestionariosDiscente" component={EscolherQuestionariosDiscente} />
                <Route path="/Discente/QuestionarioDeBeck/Depressao" component={QuestionarioDeDepressaoDeBeck} />
                <Route path="/publica/QuemSomos" component={QuemSomos} />
                <Route path="/publica/Login" component={Login} />
                <Route path="/publica/MateriaisOnline" component={MateriaisOnline} />
                {/* <Route path="/Discente/SimuladorDeQuestionario/SimulacaoQuestionarioResultado" component={SimulacaoQuestionarioResultado} /> */}
                <Route path="/ADM/ListaDeReportes" component={ListaDeReportes} />
                <Route path="/inventarioDeBeckFinalizar" component={InventarioDeBeckFinalizar} />
            </Switch>
        </BrowserRouter>
    );
}