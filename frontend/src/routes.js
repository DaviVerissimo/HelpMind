import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Material/Create";
import Crud from "./pages/Material/Crud";
import Reporte from "./pages/Discente/Reporte";
import QuemSomos from "./pages/Publica/QuemSomos";
import Login from "./pages/Publica/Login";
import ListaDeReportes from "./pages/ProfissionalDeSaude/ListaDeReportes";
import MateriaisOnline from "./pages/Publica/MateriaisOnline";
// import SimulacaoQuestionarioResultado from "./pages/Publica/SimuladorDeQuestionario/SimulacaoQuestionarioResultado";
import QuestionarioDeDepressaoDeBeck from "./pages/Discente/QuestionarioDeDepressaoDeBeck";
import QuestionarioDeAnsiedadeDeBeck from "./pages/Discente/QuestionarioDeAnsiedadeDeBeck";
import EscolherQuestionariosDiscente from "./pages/Discente/EscolherQuestionariosDiscente";
import QuestionarioSocioeconomico from "./pages/Discente/QuestionarioSocioeconomico";
import PerfilDiscente from "./pages/Discente/PerfilDiscente";
import Reportes from "./pages/Discente/Reportes";
import PerfilProfissionalDeSaude from "./pages/ProfissionalDeSaude/PerfilProfissionalDeSaude";
import ListaQuestionarioSocioeconomico from "./pages/ProfissionalDeSaude/ListaQuestionarioSocioeconomico";
import ListaQuestionarioAnsiedadeDeBeck from "./pages/ProfissionalDeSaude/ListaQuestionariosAnsiedadeDeBeck";
import ListaQuestionariosDepressaoDeBeck from "./pages/ProfissionalDeSaude/ListaQuestionariosDepressaoDeBeck";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/material/create" component={Create} />
                <Route path="/material/Crud" component={Crud} />
                <Route path="/discente/Perfil" component={PerfilDiscente} />
                <Route path="/discente/Reporte" component={Reporte} />
                <Route path="/discente/Reportes" component={Reportes} />
                <Route path="/discente/QuestionarioSocioeconomico" component={QuestionarioSocioeconomico} />
                <Route path="/discente/EscolherQuestionariosDiscente" component={EscolherQuestionariosDiscente} />
                <Route path="/Discente/QuestionarioDeBeck/Depressao" component={QuestionarioDeDepressaoDeBeck} />
                <Route path="/Discente/QuestionarioDeBeck/Ansiedade" component={QuestionarioDeAnsiedadeDeBeck} />
                <Route path="/publica/QuemSomos" component={QuemSomos} />
                <Route path="/publica/Login" component={Login} />
                <Route path="/publica/MateriaisOnline" component={MateriaisOnline} />
                <Route path="/profissionalDeSaude/ListaDeReportes" component={ListaDeReportes} />
                <Route path="/profissionalDeSaude/perfil" component={PerfilProfissionalDeSaude} />
                <Route path="/profissionalDeSaude/QuestionarioSocioeconomico" component={ListaQuestionarioSocioeconomico} />
                <Route path="/profissionalDeSaude/QuestionarioAnsiedadeDeBeck" component={ListaQuestionarioAnsiedadeDeBeck} />
                <Route path="/profissionalDeSaude/QuestionarioDepressaoDeBeck" component={ListaQuestionariosDepressaoDeBeck} />
            </Switch>
        </BrowserRouter>
    );
}