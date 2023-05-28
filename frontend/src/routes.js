import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Publica/Home";
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
import PerfilServidor from "./pages/Servidor/PerfilServidor";
import VisualizarProntuarioAdmin from "./pages/Admin/VisualizarProntuarioAdmin";
import VisualizarParescerAdmin from "./pages/Admin/VisualizarParescerAdmin";
import VisualizarParescerProfsaude from "./pages/ProfissionalDeSaude/VisualizarParescerProfsaude";
import VisualizarParescerPsicologo from "./pages/Psicologo/VisualizarParescerPsicologo";
import NovoProntuarioAdmin from "./pages/Admin/NovoProntuarioAdmin";
import GerenciaProntuariosAdmin from "./pages/Admin/GerenciaProntuariosAdmin";
import GerenciaPareceresAdmin from "./pages/Admin/GerenciaPareceresAdmin";
import ExemploGraficos from "./pages/Admin/ExemploGraficos";
import AnsiedadeDepressaoGraficoAdmin from "./pages/Admin/AnsiedadeDepressaoGraficoAdmin";
import AnsiedadeDepressaoGraficoProfSaude from "./pages/ProfissionalDeSaude/AnsiedadeDepressaoGraficoProfSaude";
import AnsiedadeDepressaoGraficoPsicologo from "./pages/Psicologo/AnsiedadeDepressaoGraficoPsicologo";
import EscolherGraficoAdmin from "./pages/Admin/EscolherGraficoAdmin";
import EscolherGraficoProfSaude from "./pages/ProfissionalDeSaude/EscolherGraficoProfSaude";
import EscolherGraficoPsicologo from "./pages/Psicologo/EscolherGraficoPsicologo";
import ServidorHome from "./pages/Servidor/ServidorHome";
import ServidorQuemSomos from "./pages/Servidor/ServidorQuemSomos";
import ServidorMateriaisOnline from "./pages/Servidor/ServidorMateriaisOnline";
import ListaDeReportesServidor from "./pages/Servidor/ListaDeReportesServidor";
import VisualizarReporteServidor from "./pages/Servidor/VisualizarReporteServidor";
import ServidorReportes from "./pages/Servidor/ServidorReportes";
import ReportesAdmin from "./pages/Admin/ReportesAdmin";
import ReportesProfsaude from "./pages/ProfissionalDeSaude/ReportesProfsaude";
import ReportesPsicologo from "./pages/Psicologo/ReportesPsicologo";
import NovoReporteAdmin from "./pages/Admin/NovoReporteAdmin";
import NovoReporteProfSaude from "./pages/ProfissionalDeSaude/NovoReporteProfSaude";
import NovoReportePsicologo from "./pages/Psicologo/NovoReportePsicologo";
import NovoReporteServidor from "./pages/Servidor/NovoReporteServidor";
import NovoEncaminhamentoParaPsicologoProfsaude from "./pages/ProfissionalDeSaude/NovoEncaminhamentoParaPsicologoProfsaude";
import VisualizarEncaminhamentoParaPsicologoAdmin from "./pages/Admin/VisualizarEncaminhamentoParaPsicologoAdmin";
import NovoEncaminhamentoParaPsicologoAdmin from "./pages/Admin/NovoEncaminhamentoParaPsicologoAdmin";
import ConversaAdmin from "./pages/Admin/ConversaAdmin";
import ListarEncaminhamentoParaPsicologoProfsaude from "./pages/ProfissionalDeSaude/ListarEncaminhamentoParaPsicologoProfsaude";
import ListarEncaminhamentoParaPsicologoAdmin from "./pages/Admin/ListarEncaminhamentoParaPsicologoAdmin";
import ListarEncaminhamentoDoDiscenteParaPsicologoAdmin from "./pages/Admin/ListarEncaminhamentoDoDiscenteParaPsicologoAdmin";
import ListarEncaminhamentoDoDiscenteParaPsicologoprofSaude from "./pages/ProfissionalDeSaude/ListarEncaminhamentoDoDiscenteParaPsicologoprofSaude";
import ListaProntuariosDoDiscenteAdmin from "./pages/Admin/ListaProntuariosDoDiscenteAdmin";
import ListarProntuariosDoDiscenteProfSaude from "./pages/ProfissionalDeSaude/ListarProntuariosDoDiscenteProfSaude";
import VisualizarEncaminhamentoParaPsicologoProfSaude from "./pages/ProfissionalDeSaude/VisualizarEncaminhamentoParaPsicologoProfSaude";
import ListarEncaminhamentoDoDiscenteParaPsicologoPsicologo from "./pages/Psicologo/ListarEncaminhamentoDoDiscenteParaPsicologoPsicologo";
import VisualizarEncaminhamentoParaPsicologoPsicologo from "./pages/Psicologo/VisualizarEncaminhamentoParaPsicologoPsicologo";
import IniciarConversaAdmin from "./pages/Admin/IniciarConversaAdmin";
import IniciarConversaProfsaude from "./pages/ProfissionalDeSaude/IniciarConversaProfsaude";
import ConversaProfsaude from "./pages/ProfissionalDeSaude/ConversaProfsaude";
import ListaConversasAdmin from "./pages/Admin/ListaConversasAdmin";
import ListaConversasProfSaude from "./pages/ProfissionalDeSaude/ListaConversasProfSaude";
import ListaConversasPsicologo from "./pages/Psicologo/ListaConversasPsicologo";
import ConversaPsicologo from "./pages/Psicologo/ConversaPsicologo";
import ListaConversasAdminPrivada from "./pages/Admin/ListaConversasAdminPrivada";

import { isAuthenticatedAdmin, isAuthenticatedDiscente, isAuthenticatedProfSaude, isAuthenticatedPsicologo, isAuthenticatedServidor } from "./auth";

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

const PrivateRouteServidor = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticatedServidor() ? (
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

        <PrivateRouteServidor path="/servidor/perfil" component={PerfilServidor} />
        <PrivateRouteServidor path="/servidor/home" component={ServidorHome} />
        <PrivateRouteServidor path="/servidor/quemSomos" component={ServidorQuemSomos} />
        <PrivateRouteServidor path="/servidor/MateriaisOnline" component={ServidorMateriaisOnline} />
        <PrivateRouteServidor path="/servidor/listaReportes" component={ListaDeReportesServidor} />
        <PrivateRouteServidor path="/servidor/visualizarReporte/:id" component={VisualizarReporteServidor} />
        <PrivateRouteServidor path="/servidor/Reportes" component={ServidorReportes} />
        <PrivateRouteServidor path="/servidor/novoReporte" component={NovoReporteServidor} />

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

        <PrivateRouteProfSaude path="/profissionalDeSaude/listaReportes" component={ListaDeReportesProfSaude} />
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
        <PrivateRouteProfSaude path="/profissionalDeSaude/listaProntuarios" component={ListarProntuariosProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listarProntuariosDoDiscente" component={ListarProntuariosDoDiscenteProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarProntuarios/:id" component={VisualizarProntuarioProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/consultarEstatisticas" component={ConsultarEstatisticasProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listarEstatisticas" component={ListarEstatisticasProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/Contatos" component={ContatosProfissional} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listarRelatoriosPsicologico" component={ListarPareceresPsicologicorProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/materiaisOnline" component={MateriaisOnlineProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/home" component={ProfSaudeHome} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/quemSomos" component={ProfSaudeQuemSomos} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarParescer/:id" component={VisualizarParescerProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/ansiedadeDepressaoGrafico" component={AnsiedadeDepressaoGraficoProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/escolherGrafico" component={EscolherGraficoProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/Reportes" component={ReportesProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/novoReporte" component={NovoReporteProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/novoEncaminhamentoParaPsicologo" component={NovoEncaminhamentoParaPsicologoProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listarEncaminhamentos" component={ListarEncaminhamentoParaPsicologoProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listarEncaminhamentosDoDiscente" component={ListarEncaminhamentoDoDiscenteParaPsicologoprofSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/visualizarEncaminhamento/:id" component={VisualizarEncaminhamentoParaPsicologoProfSaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/iniciarConversaComPsicologo" component={IniciarConversaProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/conversa/:id" component={ConversaProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/conversa/" component={ConversaProfsaude} />
        <PrivateRouteProfSaude path="/profissionalDeSaude/listaConversas" component={ListaConversasProfSaude} />

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
        <PrivateRouteAdmin path="/Admin/listarRelatoriosPsicologico" component={ListarPareceresPsicologicoraAdmin} />
        <PrivateRouteAdmin path="/Admin/listarProntuarios" component={ListaProntuariosAdmin} />
        <PrivateRouteAdmin path="/Admin/listarProntuariosDoDiscente" component={ListaProntuariosDoDiscenteAdmin} />
        <PrivateRouteAdmin path="/Admin/visualizarProntuarios/:id" component={VisualizarProntuarioAdmin} />
        <PrivateRouteAdmin path="/Admin/materiaisOnline" component={MateriaMateriaisOnlineAdminisOnline} />
        <PrivateRouteAdmin path="/Admin/home" component={AdminHome} />
        {/* <PrivateRouteAdmin path="/Admin/home2" component={AdminHome2} /> */}
        <PrivateRouteAdmin path="/Admin/ansiedadeDepressaoGrafico" component={AnsiedadeDepressaoGraficoAdmin} />
        <PrivateRouteAdmin path="/Admin/escolherGrafico" component={EscolherGraficoAdmin} />
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
        <PrivateRouteAdmin path="/Admin/Reportes" component={ReportesAdmin} />
        <PrivateRouteAdmin path="/Admin/novoReporte" component={NovoReporteAdmin} />
        <PrivateRouteAdmin path="/Admin/novoEncaminhamentoParaPsicologo" component={NovoEncaminhamentoParaPsicologoAdmin} />
        <PrivateRouteAdmin path="/Admin/conversa/:id" component={ConversaAdmin} />
        <PrivateRouteAdmin path="/Admin/conversa/" component={ConversaAdmin} />
        <PrivateRouteAdmin path="/Admin/listarEncaminhamentos" component={ListarEncaminhamentoParaPsicologoAdmin} />
        <PrivateRouteAdmin path="/Admin/listarEncaminhamentosDoDiscente" component={ListarEncaminhamentoDoDiscenteParaPsicologoAdmin} />
        <PrivateRouteAdmin path="/Admin/visualizarEncaminhamento/:id" component={VisualizarEncaminhamentoParaPsicologoAdmin} />
        <PrivateRouteAdmin path="/Admin/iniciarConversaComPsicologo" component={IniciarConversaAdmin} />
        <PrivateRouteAdmin path="/Admin/listaConversas" component={ListaConversasAdmin} />
        <PrivateRouteAdmin path="/Admin/listaConversasPrivadas" component={ListaConversasAdminPrivada} />

        <PrivateRoutePsicologo path="/psicologo/perfil" component={PerfilPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/novoRelatorio/:id" component={ParecerPsicologico} />
        <PrivateRoutePsicologo path="/psicologo/consultarEstatisticas" component={ConsultarEstatisticasPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/Contatos" component={ContatosPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/listarEstatisticas" component={ListarEstatisticasPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/listarRelatoriosPsicologico" component={ListarPareceresPsicologicorPisicologo} />
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
        <PrivateRoutePsicologo path="/psicologo/ansiedadeDepressaoGrafico" component={AnsiedadeDepressaoGraficoPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/escolherGrafico" component={EscolherGraficoPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/Reportes" component={ReportesPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/novoReporte" component={NovoReportePsicologo} />
        <PrivateRoutePsicologo path="/psicologo/listarEncaminhamentosDoDiscente" component={ListarEncaminhamentoDoDiscenteParaPsicologoPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/visualizarEncaminhamento/:id" component={VisualizarEncaminhamentoParaPsicologoPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/listaConversas" component={ListaConversasPsicologo} />
        <PrivateRoutePsicologo path="/psicologo/conversa/:id" component={ConversaPsicologo} />
        {/* <Route path="/Xpto" component={Xpto} /> */}
      </Switch>
    </BrowserRouter>
  );
}