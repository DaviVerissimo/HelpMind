import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
import ListarEstatisticasPsicologo from "./pages/Psicologo/ListarEstatisticasPsicologo";
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
import VisualizarParescerAdmin from "./pages/Admin/VisualizarParescerAdmin";
import VisualizarParescerProfsaude from "./pages/ProfissionalDeSaude/VisualizarParescerProfsaude";
import VisualizarParescerPsicologo from "./pages/Psicologo/VisualizarParescerPsicologo";
import NovoProntuarioAdmin from "./pages/Admin/NovoProntuarioAdmin";
import GerenciaProntuariosAdmin from "./pages/Admin/GerenciaProntuariosAdmin";
import GerenciaPareceresAdmin from "./pages/Admin/GerenciaPareceresAdmin";
import { isAuthenticatedAdmin, isAuthenticatedDiscente, isAuthenticatedProfSaude, isAuthenticatedPsicologo } from "./auth";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticatedAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const PrivateRouteProfSaude = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticatedProfSaude() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const PrivateRoutePsicologo = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticatedPsicologo() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const PrivateRouteDiscente = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticatedDiscente() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/publica/QuemSomos" component={QuemSomos} />
                <Route path="/publica/Login" component={Login} />
                <Route path="/publica/MateriaisOnline" component={MateriaisOnline} />
                <Route path="/servidor/perfil" component={PerfilSemAcesso} />

                <PrivateRouteDiscente path="/discente/Perfil" component={PerfilDiscente} />
                <PrivateRouteDiscente path="/discente/Reporte" component={Reporte} />
                <PrivateRouteDiscente path="/discente/Reportes" component={Reportes} />
                <PrivateRouteDiscente path="/discente/ListaReportes" component={ListaDeReportesDoDiscente} />
                <PrivateRouteDiscente path="/discente/visualizarReporte/:id" component={VisualizarReporteDiscente} />
                <PrivateRouteDiscente path="/discente/QuestionarioSocioeconomico" component={QuestionarioSocioeconomico} />
                <PrivateRouteDiscente path="/discente/EscolherQuestionariosDiscente" component={EscolherQuestionariosDiscente} />
                <PrivateRouteDiscente path="/Discente/QuestionarioDeBeck/Depressao" component={QuestionarioDeDepressaoDeBeck} />
                <PrivateRouteDiscente path="/Discente/QuestionarioDeBeck/Ansiedade" component={QuestionarioDeAnsiedadeDeBeck} />
                <PrivateRouteDiscente path="/Discente/Contatos" component={ContatosDiscente} />
                <PrivateRouteDiscente path="/Discente/MateriaisOnline" component={MateriaisOnlineDiscente} />
                <PrivateRouteDiscente path="/Discente/home" component={DiscenteHome} />
                <PrivateRouteDiscente path="/Discente/quemSomos" component={DiscenteQuemSomos} />

                <PrivateRouteProfSaude path="/profissionalDeSaude/ListaDeReportes" component={ListaDeReportesProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/perfil" component={PerfilProfissionalDeSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/ListaDiscentes" component={ListaDiscentesProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarReporte/:id" component={VisualizarReporteProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/parescer" component={Prontuario} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/prontuarios" component={PRONTUARIOS} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/listaProntuarios" component={ListarProntuariosProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarProntuarios/:id" component={VisualizarProntuarioProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/consultarEstatisticas" component={ConsultarEstatisticasProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/listarEstatisticas" component={ListarEstatisticasProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/Contatos" component={ContatosProfissional} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/listarParescerPsicologico" component={ListarPareceresPsicologicorProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/materiaisOnline" component={MateriaisOnlineProfSaude} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/home" component={ProfSaudeHome} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/quemSomos" component={ProfSaudeQuemSomos} />
                <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarParescer/:id" component={VisualizarParescerProfsaude} />

                <PrivateRouteAdmin path="/Admin/perfil" component={PerfilAdmin} />
                <PrivateRouteAdmin path="/Admin/configuracao" component={Configuracao} />
                <PrivateRouteAdmin path="/Admin/material/create" component={Create} />
                <PrivateRouteAdmin path="/Admin/material/Crud" component={GerenciaMaterial} />
                <PrivateRouteAdmin path="/Admin/GerenciaServidor" component={GerenciaServidor} />
                <PrivateRouteAdmin path="/Admin/GerenciaContato" component={GerenciaContatos} />
                <PrivateRouteAdmin path="/Admin/NovoContato" component={NovoContato} />
                <PrivateRouteAdmin path="/Admin/updateContato/:id" component={UpdateContato} />
                <PrivateRouteAdmin path="/Admin/Contatos" component={ContatosAdmin} />
                <PrivateRouteAdmin path="/Admin/listarEstatisticas" component={ListarEstatisticasAdmin} />
                <PrivateRouteAdmin path="/Admin/consultarEstatisticas" component={ConsultarEstatisticasAdmin} />
                <PrivateRouteAdmin path="/Admin/listarpareceresPsicologico" component={ListarPareceresPsicologicoraAdmin} />
                <PrivateRouteAdmin path="/Admin/listarProntuarios" component={ListaProntuariosAdmin} />
                <PrivateRouteAdmin path="/Admin/visualizarProntuarios/:id" component={VisualizarProntuarioAdmin} />
                <PrivateRouteAdmin path="/Admin/materiaisOnline" component={MateriaMateriaisOnlineAdminisOnline} />
                <PrivateRouteAdmin path="/Admin/home" component={AdminHome} />
                <PrivateRouteAdmin path="/Admin/quemSomos" component={AdminQuemSomos} />
                <PrivateRouteAdmin path="/Admin/listaReportes" component={ListaDeReportesAdmin} />
                <PrivateRouteAdmin path="/Admin/visualizarReporte/:id" component={VisualizarReporteAdmin} />
                <PrivateRouteAdmin path="/Admin/ListaDiscentes" component={ListaDiscentesAdmin} />
                <PrivateRouteAdmin path="/Admin/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoAdmin} />
                <PrivateRouteAdmin path="/Admin/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoAdmin} />
                <PrivateRouteAdmin path="/Admin/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckAdmin} />
                <PrivateRouteAdmin path="/Admin/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckAdmin} />
                <PrivateRouteAdmin path="/Admin/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckAdmin} />
                <PrivateRouteAdmin path="/Admin/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckAdmin} />
                <PrivateRouteAdmin path="/Admin/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoAdmin} />
                <PrivateRouteAdmin path="/Admin/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoAdmin} />
                <PrivateRouteAdmin path="/Admin/visualizarParescer/:id" component={VisualizarParescerAdmin} />
                <PrivateRouteAdmin path="/Admin/novoProntuario" component={NovoProntuarioAdmin} />
                <PrivateRouteAdmin path="/Admin/gerenciaProntuario" component={GerenciaProntuariosAdmin} />
                <PrivateRouteAdmin path="/Admin/gerenciaParescerPsicologico" component={GerenciaPareceresAdmin} />
                
                <PrivateRoutePsicologo path="/psicologo/perfil" component={PerfilPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/parecer" component={ParecerPsicologico} />
                <PrivateRoutePsicologo path="/psicologo/parecereres" component={PareceresPsicologico} />
                <PrivateRoutePsicologo path="/psicologo/consultarEstatisticas" component={ConsultarEstatisticasPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/Contatos" component={ContatosPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/listarEstatisticas" component={ListarEstatisticasPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/listarParecerPsicologico" component={ListarPareceresPsicologicorPisicologo} />
                <PrivateRoutePsicologo path="/psicologo/materiaisOnline" component={MateriaisOnlinePsicologo} />
                <PrivateRoutePsicologo path="/psicologo/home" component={PsicologoHome} />
                <PrivateRoutePsicologo path="/psicologo/quemSomos" component={PsicologoQuemSomos} />
                <PrivateRoutePsicologo path="/psicologo/listaReportes" component={ListaDeReportesPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/visualizarReporte/:id" component={VisualizarReportePsicologo} />
                <PrivateRoutePsicologo path="/psicologo/ListaDiscentes" component={ListaDiscentesPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/ListaDiscentesComAumentoVulnerabilidade" component={ListaDiscentesComAumentoPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/PerfilDiscenteDetalhado/:id" component={PerfilDiscenteDetalhadoPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/QuestionarioAnsiedadeDeBeck/:id" component={ListaQuestionarioAnsiedadeDeBeckPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/VisualizarQuestionarioDeAnsiedadeDeBeck/:id" component={VisualizarQuestionarioDeAnsiedadeDeBeckPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/QuestionarioDepressaoDeBeck/:id" component={ListaQuestionariosDepressaoDeBeckPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/VisualizarQuestionarioDeDepresaoDeBeck/:id" component={VisualizarQuestionarioDeDepresaoDeBeckPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/QuestionarioSocioeconomico/:id" component={ListaQuestionarioSocioeconomicoPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/VisualizarSocioeconomico/:id" component={VisualizarQuestionarioSocioeconomicoPsicologo} />
                <PrivateRoutePsicologo path="/psicologo/visualizarParescer/:id" component={VisualizarParescerPsicologo} />
                {/* <Route path="/Xpto" component={Xpto} /> */}
            </Switch>
        </BrowserRouter>
    );
}