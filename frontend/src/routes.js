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
import PerfilDiscenteDetalhado from "./pages/ProfissionalDeSaude/PerfilDiscenteDetalhado";
import ListaDiscentes from "./pages/ProfissionalDeSaude/ListaDiscentes";
import Xpto from "./pages/Publica/Xpto";
import VisualizarQuestionarioSocioeconomico from "./pages/ProfissionalDeSaude/VisualizarQuestionarioSocioeconomico";
import VisualizarQuestionarioDeAnsiedadeDeBeck from "./pages/ProfissionalDeSaude/VisualizarQuestionarioDeAnsiedadeDeBeck";
import VisualizarQuestionarioDeDepresaoDeBeck from "./pages/ProfissionalDeSaude/VisualizarQuestionarioDeDepressaoDeBeck";
import VisualizarReporte from "./pages/ProfissionalDeSaude/VisualizarReporte";
import ListaDeReportesDoDiscente from "./pages/Discente/ListaDeReportesDoDiscente";
import VisualizarReporteDiscente from "./pages/Discente/VisualizarReporteDiscente";
import ListaDiscentesComAumento from "./pages/ProfissionalDeSaude/ListaDiscentesAumento";

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
                <Route path="/discente/ListaReportes" component={ListaDeReportesDoDiscente} />
                <Route path="/discente/visualizarReporte/:id" component={VisualizarReporteDiscente} />
                <Route path="/discente/QuestionarioSocioeconomico" component={QuestionarioSocioeconomico} />
                <Route path="/discente/EscolherQuestionariosDiscente" component={EscolherQuestionariosDiscente} />
                <Route path="/Discente/QuestionarioDeBeck/Depressao" component={QuestionarioDeDepressaoDeBeck} />
                <Route path="/Discente/QuestionarioDeBeck/Ansiedade" component={QuestionarioDeAnsiedadeDeBeck} />
                <Route path="/publica/QuemSomos" component={QuemSomos} />
                <Route path="/publica/Login" component={Login} />
                <Route path="/publica/MateriaisOnline" component={MateriaisOnline} />
                <Route path="/profissionalDeSaude/ListaDeReportes" component={ListaDeReportes} />
                <Route path="/profissionalDeSaude/perfil" component={PerfilProfissionalDeSaude} />
                <Route path="/profissionalDeSaude/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomico} />
                <Route path="/profissionalDeSaude/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomico} />
                <Route path="/profissionalDeSaude/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeck} />
                <Route path="/profissionalDeSaude/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeck} />
                <Route path="/profissionalDeSaude/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeck} />
                <Route path="/profissionalDeSaude/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeck} />
                <Route path="/profissionalDeSaude/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhado} />
                <Route path="/profissionalDeSaude/ListaDiscentes" component={ListaDiscentes} />
                <Route path="/profissionalDeSaude/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumento} />
                <Route path="/profissionalDeSaude/visualizarReporte/:id" component={VisualizarReporte} />
                <Route path="/Xpto" component={Xpto} />
            </Switch>
        </BrowserRouter>
    );
}