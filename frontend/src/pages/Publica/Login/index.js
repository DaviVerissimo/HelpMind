import { Card } from 'primereact/card';
import React, { useRef } from 'react';
import './styles.css'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarPublica from '../ToobarPublica';
import GoogleLogin from 'react-google-login';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import URL from '../../../services/URL';

export default function Login() {

    var configBotaoPrimario = "p-mb-3 p-col-4";
    var sizeCard = "login p-col-6";
    var altura = window.screen.height;
    var largura = window.screen.width;

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
    const responseGoogle = (response) => {

        const { profileObj: { name, email, imageUrl, googleId } } = response;
        const usuario =
        {
            "nome": name,
            "email": email,
            "imagemPerfilUri": imageUrl,
            "googleId": googleId

        }
        const headers = {
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        var chave = true;

        var currentUrl = usuario.email;
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
                        axios.post(URL.getDominio() + "/servidor/salvarServidor", usuario, headers)
                            .then(Response => {
                                localStorage.setItem('idServidor', Response.data.id);
                                var permissionProfSaude = false;
                                var permissionPsicolo = false;

                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.email, headers)
                                    .then(Response => {

                                        if (Response.data) {
                                            permissionProfSaude = true;
                                            localStorage.setItem('loginAdmin', true);
                                            history.push('/Admin/perfil');
                                        }
                                        else {
                                            axios.post(URL.getDominio() + "/servidor/isServidorPermissaoProfSaude", usuario.googleId, headers)
                                                .then(Response => {

                                                    if (Response.data) {
                                                        permissionProfSaude = true;
                                                        localStorage.setItem('loginProfSaude', true);
                                                        history.push('/profissionalDeSaude/perfil');
                                                    }
                                                })
                                                .catch(error => console.error(error))

                                            axios.post(URL.getDominio() + "/servidor/isServidorPermissaoPsicologo", usuario.googleId, headers)
                                                .then(Response => {

                                                    if (Response.data) {
                                                        permissionPsicolo = true;
                                                        localStorage.setItem('loginPsicologo', true);
                                                        history.push('/psicologo/perfil');
                                                    }
                                                    else if (permissionProfSaude == false && permissionPsicolo == false) {
                                                        history.push('/servidor/perfil');
                                                    }
                                                })
                                                .catch(error => console.error(error))
                                        }
                                    })
                                    .catch(error => console.error(error))

                            })
                            .catch(error => console.error(error))
                    }

                    localStorage.setItem('idServidor', Response.data.id);
                    var permissionProfSaude = false;
                    var permissionPsicolo = false;

                    axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.email, headers)
                        .then(Response => {

                            if (Response.data) {
                                permissionProfSaude = true;
                                localStorage.setItem('loginAdmin', true);
                                history.push('/Admin/perfil');
                            }
                            else {
                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoProfSaude", usuario.googleId, headers)
                                    .then(Response => {

                                        if (Response.data) {
                                            permissionProfSaude = true;
                                            localStorage.setItem('loginProfSaude', true);
                                            history.push('/profissionalDeSaude/perfil');
                                        }
                                    })
                                    .catch(error => console.error(error))

                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoPsicologo", usuario.googleId, headers)
                                    .then(Response => {

                                        if (Response.data) {
                                            permissionPsicolo = true;
                                            localStorage.setItem('loginPsicologo', true);
                                            history.push('/psicologo/perfil');
                                        }
                                        else if (permissionProfSaude == false && permissionPsicolo == false) {
                                            history.push('/servidor/perfil');
                                        }
                                    })
                                    .catch(error => console.error(error))
                            }
                        })
                        .catch(error => console.error(error))

                })
                .catch(error => console.error(error))
        }

        if (!chave) {

            axios.post(URL.getDominio() + "/discente/isDiscenteGoogleId", usuario.googleId, headers)
                .then(Response => {
                    if (Response.data.id == null) {
                        axios.post(URL.getDominio() + "/discente/salvarUserDiscente", usuario, headers)
                            .then(Response => {
                                localStorage.setItem('id', Response.data.id);
                                localStorage.setItem('loginDiscente', true);
                                history.push('/discente/Perfil');
                            })
                            .catch(error => console.error(error))
                    }
                    else {
                        localStorage.setItem('id', Response.data.id);
                        localStorage.setItem('loginDiscente', true);
                        history.push('/discente/Perfil');
                    }
                    localStorage.setItem('id', Response.data.id);
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

    console.log("---------------------------------------->")

    return (
        <div>
            <ToobarPublica />
            <Toast ref={toast} />
            <Card
                title="AUTENTIQUE-SE!"
                subTitle={<div><b>Estudante ou profissional de saúde</b>, para ter acesso a todas as opções da plataforma HelpMind você deve entrar com a sua conta do IFPB.</div>} >
                <div className="login-container p-d-flex p-grid p-flex-wrap p-justify-center p-align-center p-mt-6" style={{ height: '100%' }} >
                    <div className="p-col-4 p-component">
                        <ul>
                            <li>Inventário de Depressão de Beck (BDI)</li>
                            <li>Inventário de Ansiedade de Beck (BAI)</li>
                            <li>Questionário socioeconômico</li>
                            <li>Material de apoio a saúde mental</li>
                        </ul>
                    </div>
                    <div className="=p-col-9 p-flex p-grid p-flex-column p-p-3">
                        <GoogleLogin
                            clientId="1074576164125-iqmvj2ij72e3evgu6gaenjhspj3n5v46.apps.googleusercontent.com"
                            buttonText={<div><b>ENTRAR COM E-MAIL</b> @ifpb.edu.br ou @academico.ifpb.edu.br</div>}
                            onSuccess={responseGoogle}
                            onFailure={errorLogin}
                        // cookiePolicy={'single_host_origin'}
                        ></GoogleLogin>
                        <Button className="p-mt-4" label={<div><b>NÃO POSSUO E-MAIL</b><br />ACADÊMICO OU INSTITUCIONAL</div>} onClick={infoEmail} />
                    </div>
                </div>
            </Card>
        </div>
    );

}