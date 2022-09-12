import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Admin/GerenciaMaterialCentral/Create";
import GerenciaMaterial from "./pages/Admin/GerenciaMaterialCentral/GerenciaMaterial";
import Reporte from "./pages/Discente/Reporte";
import QuemSomos from "./pages/Publica/QuemSomos";
import Login from "./pages/Publica/Login";
import ListaDeReportesProfSaude from "./pages/ProfissionalDeSaude/ListaDeReportesProfSaude";
import MateriaisOnline from "./pages/Publica/MateriaisOnline";
import QuestionarioDeDepressaoDeBeck from "./pages/Discente/QuestionarioDeDepressaoDeBeck";
import QuestionarioDeAnsiedadeDeBeck from "./pages/Discente/QuestionarioDeAnsiedadeDeBeck";
import EscolherQuestionariosDiscente from "./pages/Discente/EscolherQuestionariosDiscente";
import QuestionarioSocioeconomico from "./pages/Discente/QuestionarioSocioeconomico";
import PerfilDiscente from "./pages/Discente/PerfilDiscente";
import Reportes from "./pages/Discente/Reportes";
import PerfilProfissionalDeSaude from "./pages/ProfissionalDeSaude/PerfilProfissionalDeSaude";
import ListaQuestionarioSocioeconomicoProfSaude from "./pages/ProfissionalDeSaude/ListaQuestionarioSocioeconomicoProfSaude";
import ListaQuestionarioAnsiedadeDeBeckProfSaude from "./pages/ProfissionalDeSaude/ListaQuestionarioAnsiedadeDeBeckProfSaude";
import ListaQuestionariosDepressaoDeBeckProfSaude from "./pages/ProfissionalDeSaude/ListaQuestionariosDepressaoDeBeckProfSaude";
import PerfilDiscenteDetalhadoProfSaude from "./pages/ProfissionalDeSaude/PerfilDiscenteDetalhadoProfSaude";
import ListaDiscentesProfSaude from "./pages/ProfissionalDeSaude/ListaDiscentesProfSaude";
import Xpto from "./pages/Publica/Xpto";
import VisualizarQuestionarioDeAnsiedadeDeBeckProfSaude from "./pages/ProfissionalDeSaude/VisualizarQuestionarioDeAnsiedadeDeBeckProfSaude";
import VisualizarQuestionarioDeDepresaoDeBeckProfSaude from "./pages/ProfissionalDeSaude/VisualizarQuestionarioDeDepresaoDeBeckProfSaude";
import VisualizarReporteProfSaude from "./pages/ProfissionalDeSaude/VisualizarReporteProfSaude";
import ListaDeReportesDoDiscente from "./pages/Discente/ListaDeReportesDoDiscente";
import VisualizarReporteDiscente from "./pages/Discente/VisualizarReporteDiscente";
import ListaDiscentesComAumentoProfSaude from "./pages/ProfissionalDeSaude/ListaDiscentesAumento";
import PerfilAdmin from "./pages/Admin/PerfilAdmin";
import Configuracao from "./pages/Admin/Configuracao";
import GerenciaServidor from "./pages/Admin/GerenciaServidor";
import Prontuario from "./pages/ProfissionalDeSaude/Prontuario";
import PRONTUARIOS from "./pages/ProfissionalDeSaude/Prontuarios";
import ListarProntuariosProfSaude from "./pages/ProfissionalDeSaude/ListarProntuariosProfSaude";
import VisualizarProntuarioProfSaude from "./pages/ProfissionalDeSaude/VisualizarProntuarioProfSaude";
import GerenciaContatos from "./pages/Admin/GerenciaContatos";
import NovoContato from "./pages/Admin/NovoContato";
import UpdateContato from "./pages/Admin/UpdateContato";
import ContatosAdmin from "./pages/Admin/ContatosAdmin";
import ContatosProfissional from "./pages/ProfissionalDeSaude/ContatosProfissional";
import ContatosDiscente from "./pages/Discente/ContatosDiscente";
import ParecerPsicologico from "./pages/Psicologo/ParecerPsicologico";
import ConsultarEstatisticasProfSaude from "./pages/ProfissionalDeSaude/ConsultarEstatisticasProfSaude";
import ListarEstatisticasProfSaude from "./pages/ProfissionalDeSaude/ListarEstatisticasProfSaude";
import PerfilPsicologo from "./pages/Psicologo/PerfilPsicologo";
import ConsultarEstatisticasPsicologo from "./pages/Psicologo/ConsultarEstatisticasPsicologo";
import ContatosPsicologo from "./pages/Psicologo/ContatosPsicologo";
import ListarEstatisticasPsicologo from "./pages/Psicologo/ListarEstatisticasProfPsicologo";
import ListarEstatisticasAdmin from "./pages/Admin/ListarEstatisticasAdmin";
import PareceresPsicologico from "./pages/Psicologo/PareceresPsicologico";
import ConsultarEstatisticasAdmin from "./pages/Admin/ConsultarEstatisticasAdmin";
import ListarPareceresPsicologicorPisicologo from "./pages/Psicologo/ListarPareceresPsicologicorPisicologo";
import ListarPareceresPsicologicorProfSaude from "./pages/ProfissionalDeSaude/ListarPareceresPsicologicorProfSaude";
import ListarPareceresPsicologicoraAdmin from "./pages/Admin/ListarPareceresPsicologicoraAdmin";
import ListaProntuariosAdmin from "./pages/Admin/ListaProntuariosAdmin";
import MateriaMateriaisOnlineAdminisOnline from "./pages/Admin/MateriaisOnlineAdmin";
import MateriaisOnlineProfSaude from "./pages/ProfissionalDeSaude/MateriaisOnlineProfSaude";
import MateriaisOnlinePsicologo from "./pages/Psicologo/MateriaisOnlinePsicologo";
import MateriaisOnlineDiscente from "./pages/Discente/MateriaisOnlineDiscente";
import PsicologoHome from "./pages/Psicologo/PsicologoHome";
import ProfSaudeHome from "./pages/ProfissionalDeSaude/ProfSaudeHome";
import AdminHome from "./pages/Admin/AdminHome";
import DiscenteHome from "./pages/Discente/DiscenteHome";
import DiscenteQuemSomos from "./pages/Discente/DiscenteQuemSomos";
import AdminQuemSomos from "./pages/Admin/AdminQuemSomos";
import ProfSaudeQuemSomos from "./pages/ProfissionalDeSaude/ProfSaudeQuemSomos";
import PsicologoQuemSomos from "./pages/Psicologo/PsicologoQuemSomos";
import ListaDeReportesPsicologo from "./pages/Psicologo/ListaDeReportesPsicologo";
import ListaDeReportesAdmin from "./pages/Admin/ListaDeReportesAdmin";
import VisualizarReportePsicologo from "./pages/Psicologo/VisualizarReportePsicologo";
import VisualizarReporteAdmin from "./pages/Admin/VisualizarReporteAdmin";
import ListaDiscentesPsicologo from "./pages/Psicologo/ListaDiscentesPsicologo";
import ListaDiscentesAdmin from "./pages/Admin/ListaDiscentesAdmin";
import ListaDiscentesComAumentoPsicologo from "./pages/Psicologo/ListaDiscentesComAumentoPsicologo";
import ListaDiscentesComAumentoAdmin from "./pages/Admin/ListaDiscentesComAumentoAdmin";
import PerfilDiscenteDetalhadoPsicologo from "./pages/Psicologo/PerfilDiscenteDetalhadoPsicologo";
import PerfilDiscenteDetalhadoAdmin from "./pages/Admin/PerfilDiscenteDetalhadoAdmin";
import ListaQuestionarioAnsiedadeDeBeckPsicologo from "./pages/Psicologo/ListaQuestionarioAnsiedadeDeBeckPsicologo";
import ListaQuestionarioAnsiedadeDeBeckAdmin from "./pages/Admin/ListaQuestionarioAnsiedadeDeBeckAdmin";
import VisualizarQuestionarioDeAnsiedadeDeBeckPsicologo from "./pages/Psicologo/VisualizarQuestionarioDeAnsiedadeDeBeckPsicologo";
import VisualizarQuestionarioDeAnsiedadeDeBeckAdmin from "./pages/Admin/VisualizarQuestionarioDeAnsiedadeDeBeckAdmin";
import ListaQuestionariosDepressaoDeBeckPsicologo from "./pages/Psicologo/ListaQuestionariosDepressaoDeBeckPsicologo";
import ListaQuestionariosDepressaoDeBeckAdmin from "./pages/Admin/ListaQuestionariosDepressaoDeBeckAdmin";
import VisualizarQuestionarioDeDepresaoDeBeckPsicologo from "./pages/Psicologo/VisualizarQuestionarioDeDepresaoDeBeckPsicologo";
import VisualizarQuestionarioDeDepresaoDeBeckAdmin from "./pages/Admin/VisualizarQuestionarioDeDepresaoDeBeckAdmin";
import ListaQuestionarioSocioeconomicoPsicologo from "./pages/Psicologo/ListaQuestionarioSocioeconomicoPsicologo";
import ListaQuestionarioSocioeconomicoAdmin from "./pages/Admin/ListaQuestionarioSocioeconomicoAdmin";
import VisualizarQuestionarioSocioeconomicoProfSaude from "./pages/ProfissionalDeSaude/VisualizarQuestionarioSocioeconomicoProfSaude";
import VisualizarQuestionarioSocioeconomicoPsicologo from "./pages/Psicologo/VisualizarQuestionarioSocioeconomicoPsicologo";
import VisualizarQuestionarioSocioeconomicoAdmin from "./pages/Admin/VisualizarQuestionarioSocioeconomicoAdmin";
import PerfilSemAcesso from "./pages/Publica/ServidorPublico/PerfilSemAcesso";
import VisualizarProntuarioAdmin from "./pages/Admin/VisualizarProntuarioAdmin";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/publica/QuemSomos" component={QuemSomos} />
                <Route path="/publica/Login" component={Login} />
                <Route path="/publica/MateriaisOnline" component={MateriaisOnline} />
                <Route path="/servidor/perfil" component={PerfilSemAcesso} />

                <Route path="/discente/Perfil" component={PerfilDiscente} />
                <Route path="/discente/Reporte" component={Reporte} />
                <Route path="/discente/Reportes" component={Reportes} />
                <Route path="/discente/ListaReportes" component={ListaDeReportesDoDiscente} />
                <Route path="/discente/visualizarReporte/:id" component={VisualizarReporteDiscente} />
                <Route path="/discente/QuestionarioSocioeconomico" component={QuestionarioSocioeconomico} />
                <Route path="/discente/EscolherQuestionariosDiscente" component={EscolherQuestionariosDiscente} />
                <Route path="/Discente/QuestionarioDeBeck/Depressao" component={QuestionarioDeDepressaoDeBeck} />
                <Route path="/Discente/QuestionarioDeBeck/Ansiedade" component={QuestionarioDeAnsiedadeDeBeck} />
                <Route path="/Discente/Contatos" component={ContatosDiscente} />
                <Route path="/Discente/MateriaisOnline" component={MateriaisOnlineDiscente} />
                <Route path="/Discente/home" component={DiscenteHome} />
                <Route path="/Discente/quemSomos" component={DiscenteQuemSomos} />

                <Route path="/profissionalDeSaude/ListaDeReportes" component={ListaDeReportesProfSaude} />
                <Route path="/profissionalDeSaude/perfil" component={PerfilProfissionalDeSaude} />
                <Route path="/profissionalDeSaude/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoProfSaude} />
                <Route path="/profissionalDeSaude/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoProfSaude} />
                <Route path="/profissionalDeSaude/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckProfSaude} />
                <Route path="/profissionalDeSaude/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckProfSaude} />
                <Route path="/profissionalDeSaude/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckProfSaude} />
                <Route path="/profissionalDeSaude/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckProfSaude} />
                <Route path="/profissionalDeSaude/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoProfSaude} />
                <Route path="/profissionalDeSaude/ListaDiscentes" component={ListaDiscentesProfSaude} />
                <Route path="/profissionalDeSaude/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoProfSaude} />
                <Route path="/profissionalDeSaude/visualizarReporte/:id" component={VisualizarReporteProfSaude} />
                <Route path="/profissionalDeSaude/parescer" component={Prontuario} />
                <Route path="/profissionalDeSaude/prontuarios" component={PRONTUARIOS} />
                <Route path="/profissionalDeSaude/listaProntuarios" component={ListarProntuariosProfSaude} />
                <Route path="/profissionalDeSaude/visualizarProntuarios/:id" component={VisualizarProntuarioProfSaude} />
                <Route path="/profissionalDeSaude/consultarEstatisticas" component={ConsultarEstatisticasProfSaude} />
                <Route path="/profissionalDeSaude/listarEstatisticas" component={ListarEstatisticasProfSaude} />
                <Route path="/profissionalDeSaude/Contatos" component={ContatosProfissional} />
                <Route path="/profissionalDeSaude/listarParescerPsicologico" component={ListarPareceresPsicologicorProfSaude} />
                <Route path="/profissionalDeSaude/materiaisOnline" component={MateriaisOnlineProfSaude} />
                <Route path="/profissionalDeSaude/home" component={ProfSaudeHome} />
                <Route path="/profissionalDeSaude/quemSomos" component={ProfSaudeQuemSomos} />

                <Route path="/Admin/perfil" component={PerfilAdmin} />
                <Route path="/Admin/configuracao" component={Configuracao} />
                <Route path="/Admin/material/create" component={Create} />
                <Route path="/Admin/material/Crud" component={GerenciaMaterial} />
                <Route path="/Admin/GerenciaServidor" component={GerenciaServidor} />
                <Route path="/Admin/GerenciaContato" component={GerenciaContatos} />
                <Route path="/Admin/NovoContato" component={NovoContato} />
                <Route path="/Admin/updateContato/:id" component={UpdateContato} />
                <Route path="/Admin/Contatos" component={ContatosAdmin} />
                <Route path="/Admin/listarEstatisticas" component={ListarEstatisticasAdmin} />
                <Route path="/Admin/consultarEstatisticas" component={ConsultarEstatisticasAdmin} />
                <Route path="/Admin/listarpareceresPsicologico" component={ListarPareceresPsicologicoraAdmin} />
                <Route path="/Admin/listarProntuarios" component={ListaProntuariosAdmin} />
                <Route path="/Admin/visualizarProntuarios/:id" component={VisualizarProntuarioAdmin} />
                <Route path="/Admin/materiaisOnline" component={MateriaMateriaisOnlineAdminisOnline} />
                <Route path="/Admin/home" component={AdminHome} />
                <Route path="/Admin/quemSomos" component={AdminQuemSomos} />
                <Route path="/Admin/listaReportes" component={ListaDeReportesAdmin} />
                <Route path="/Admin/visualizarReporte/:id" component={VisualizarReporteAdmin} />
                <Route path="/Admin/ListaDiscentes" component={ListaDiscentesAdmin} />
                <Route path="/Admin/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoAdmin} />
                <Route path="/Admin/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoAdmin} />
                <Route path="/Admin/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckAdmin} />
                <Route path="/Admin/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckAdmin} />
                <Route path="/Admin/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckAdmin} />
                <Route path="/Admin/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckAdmin} />
                <Route path="/Admin/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoAdmin} />
                <Route path="/Admin/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoAdmin} />
                
                <Route path="/psicologo/perfil" component={PerfilPsicologo} />
                <Route path="/psicologo/parecer" component={ParecerPsicologico} />
                <Route path="/psicologo/parecereres" component={PareceresPsicologico} />
                <Route path="/psicologo/consultarEstatisticas" component={ConsultarEstatisticasPsicologo} />
                <Route path="/psicologo/Contatos" component={ContatosPsicologo} />
                <Route path="/psicologo/listarEstatisticas" component={ListarEstatisticasPsicologo} />
                <Route path="/psicologo/listarParecerPsicologico" component={ListarPareceresPsicologicorPisicologo} />
                <Route path="/psicologo/materiaisOnline" component={MateriaisOnlinePsicologo} />
                <Route path="/psicologo/home" component={PsicologoHome} />
                <Route path="/psicologo/quemSomos" component={PsicologoQuemSomos} />
                <Route path="/psicologo/listaReportes" component={ListaDeReportesPsicologo} />
                <Route path="/psicologo/visualizarReporte/:id" component={VisualizarReportePsicologo} />
                <Route path="/psicologo/ListaDiscentes" component={ListaDiscentesPsicologo} />
                <Route path="/psicologo/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoPsicologo} />
                <Route path="/psicologo/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoPsicologo} />
                <Route path="/psicologo/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckPsicologo} />
                <Route path="/psicologo/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckPsicologo} />
                <Route path="/psicologo/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckPsicologo} />
                <Route path="/psicologo/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckPsicologo} />
                <Route path="/psicologo/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoPsicologo} />
                <Route path="/psicologo/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoPsicologo} />
                {/* <Route path="/Xpto" component={Xpto} /> */}
            </Switch>
        </BrowserRouter>
    );
}