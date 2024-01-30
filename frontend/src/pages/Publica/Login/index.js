import { Card } from 'primereact/card';
import React, { useRef, useState, useEffect } from 'react';
import './styles.css'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarPublica from '../ToobarPublica';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import URL from '../../../services/URL';
import jwt_decode from "jwt-decode";
import RotinaQuestionarioSocioeconomicoService from '../../../services/RotinaQuestionarioSocioeconomicoService';
import GoogleLoginButton from '../../../Components/GoogleLoginButton';

export default function Login() {

    const [accessToken, setAccessToken] = useState();
    const toast = useRef(null);
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel realizar login!',
            detail: 'Deve-se utilizar uma conta acadêmica/institucional do IFPB.',
            life: 5000
        });
    }
    const history = useHistory();
    const [permissionProfSaude, setPermissionProfSaude] = useState(false);
    const [permissionPsicologo, setpermissionPsicologo] = useState(false);

    useEffect(async () => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "1074576164125-iqmvj2ij72e3evgu6gaenjhspj3n5v46.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("singnInDiv"),
            {
                theme: "outline",
                size: "large"
            }
        )
    }, []);

    function handleCallbackResponse(response) {

        if (response == null || response == undefined) {
            errorLogin();
        }
        var token = response.credential;
        localStorage.setItem('token', token);
        var decoded = jwt_decode(token);
        const name = decoded.name;
        const email = decoded.email;
        const imageUrl = decoded.picture;
        const googleId = decoded.sub;
        const usuario =
        {
            "nome": name,
            "email": email,
            "imagemPerfilUri": imageUrl,
            "googleId": googleId

        }
        const headers = {
            'headers': {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }

        var chave = true;

        // var currentUrl = usuario.email;
        // if (!currentUrl.includes("academico.ifpb.edu.br")) {
        //     chave = true;
        // }
        // else {
        //     chave = false;
        // }

        if (chave) {
            axios.post(URL.getDominio() + "/servidor/isServidorGoogleId", usuario.googleId, headers)
                .then(Response => {
                    if (Response.data.id == null) {
                        salvarServidor();
                    }
                    localStorage.setItem('idServidor', Response.data.id);
                    loginServidor();
                })
                .catch(error => console.error(error))
        }

        if (!chave) {
            axios.post(URL.getDominio() + "/discente/isDiscenteGoogleId", usuario.googleId, headers)
                .then(Response => {
                    var isPrimeiroAcesso = false;
                    if (Response.data.id == null) {
                        isPrimeiroAcesso = true;
                        salvarDiscente();
                    }
                    loginDiscente(isPrimeiroAcesso);
                })
                .catch(error => console.error(error))
        }

        function salvarServidor() {
            axios.post(URL.getDominio() + "/servidor/salvarServidor", usuario, headers)
                .then(Response => {
                    localStorage.setItem('idServidor', Response.data.id);
                    axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.email, headers)
                        .then(Response => { })
                        .catch(error => console.error(error))
                })
                .catch(error => console.error(error))
        }

        function loginServidor() {
            var trava = false;
            axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.email, headers)
                .then(Response => {
                    if (Response.data) {
                        loginAdmin();
                    }

                    // var x = false;
                    // if (x) { }
                    else {
                        axios.post(URL.getDominio() + "/servidor/isServidorPermissaoProfSaude", usuario.googleId, headers)
                            .then(Response => {
                                if (Response.data) {
                                    trava = true;
                                    loginProfSaude();
                                }
                            })
                            .catch(error => console.error(error))

                        axios.post(URL.getDominio() + "/servidor/isServidorPermissaoPsicologo", usuario.googleId, headers)
                            .then(Response => {
                                if (Response.data) {
                                    trava = true;
                                    loginPsicologo();
                                }
                                else if (permissionProfSaude == false && permissionPsicologo == false && trava == false) {
                                    loginServidorDefault();
                                }
                            })
                            .catch(error => console.error(error))
                    }
                })
                .catch(error => console.error(error))
        }

        function loginAdmin() {
            setPermissionProfSaude(true);
            localStorage.setItem('loginAdmin', true);
            history.push('/Admin/perfil');
        }

        function loginProfSaude() {
            setPermissionProfSaude(true);
            localStorage.setItem('loginProfSaude', true);
            history.push('/profissionalDeSaude/perfil');
        }

        function loginPsicologo() {
            setpermissionPsicologo(true)
            localStorage.setItem('loginPsicologo', true);
            history.push('/psicologo/perfil');
        }

        function loginServidorDefault() {
            localStorage.setItem('loginServidor', true);
            history.push('/servidor/perfil');
        }

        function salvarDiscente() {
            axios.post(URL.getDominio() + "/discente/salvarUserDiscente", usuario, headers)
                .then(Response => {
                    const idDiscente = Response.data.id;
                    // fazer requisição para criar rotina pelo id do discente
                    const rotina = {
                        'idDiscente': idDiscente,
                        'primeiroAcesso': true

                    }
                    RotinaQuestionarioSocioeconomicoService.salvarRotina(rotina);
                })
                .catch(error => console.error(error))
        }

        function loginDiscente(isPrimeiroAcesso) {
            axios.post(URL.getDominio() + "/discente/isDiscenteGoogleId", usuario.googleId, headers)
                .then(Response => {
                    localStorage.setItem('id', Response.data.id);
                    localStorage.setItem('loginDiscente', true);
                    if (isPrimeiroAcesso) {
                        history.push('/discente/QuestionarioSocioeconomico')
                    }
                    else {
                        history.push('/discente/Perfil');
                    }

                })
                .catch(error => console.error(error))
        }

    }

    const errorLogin = (e) => {
        showError();
        console.error(e);
    }

    function infoEmail() {
        window.location.replace('https://www.ifpb.edu.br/ti/redes/servicos/e-mail-academico')

    }

    return (
        <div>
            <ToobarPublica />
            <Toast ref={toast} />
            <Card
                title="AUTENTIQUE-SE!"
                subTitle={<div><b>Estudante ou profissional de saúde</b>, para ter acesso a todas as opções da plataforma HelpMind você deve entrar com a sua conta do IFPB.</div>} >
                <div className="login-container p-d-flex p-grid p-flex-wrap p-justify-center p-align-center p-mt-6" style={{ height: '100%' }} >
                    <div className="p-col-5 p-component">
                        <ul>
                            <li>Inventário de Depressão de Beck (BDI)</li>
                            <li>Inventário de Ansiedade de Beck (BAI)</li>
                            <li>Questionário socioeconômico</li>
                            <li>Material de apoio a saúde mental</li>
                        </ul>
                    </div>
                    <div className="=p-col-9 p-flex p-grid p-flex-column p-p-3">
                        <div className="p-mb-5 p-component" id="singnInDiv"></div>
                        {/* <GoogleLoginButton></GoogleLoginButton> */}
                        <Button className="p-mt-4 p-mb-6" label={<div><b>NÃO POSSUO E-MAIL</b><br />ACADÊMICO OU INSTITUCIONAL</div>} onClick={infoEmail} />
                    </div>
                </div>
            </Card>
        </div>
    );

}