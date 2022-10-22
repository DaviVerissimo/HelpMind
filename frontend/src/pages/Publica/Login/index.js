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

    var configBotaoSecumdario = "p-mb-3 p-col-4 p-button-secondary";
    var configBotaoPrimario = "p-mb-3 p-col-4";
    var sizeCard = "login p-col-6";
    var altura = window.screen.height;
    var largura = window.screen.width;
    if (largura < 640) {
        configBotaoSecumdario = "p-mb-3 p-button-secondary "
        configBotaoPrimario = "p-mt-3 ";
        sizeCard = "";
    }

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
                        axios.post(URL.getDominio() + "/servidor/salvarServidor", usuario, headers)
                            .then(Response => {
                                localStorage.setItem('idServidor', Response.data.id);
                                // history.push('/profissionalDeSaude/perfil');
                                var permissionProfSaude = false;
                                var permissionPsicolo = false;

                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.googleId, headers)
                                .then(Response => {

                                    if (Response.data) {
                                        permissionProfSaude = true;
                                        history.push('/Admin/perfil');
                                    }
                                })
                                .catch(error => console.log(error))

                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoProfSaude", usuario.googleId, headers)
                                    .then(Response => {

                                        if (Response.data) {
                                            permissionProfSaude = true;
                                            history.push('/profissionalDeSaude/perfil');
                                        }
                                    })
                                    .catch(error => console.log(error))

                                axios.post(URL.getDominio() + "/servidor/isServidorPermissaoPsicologo", usuario.googleId, headers)
                                    .then(Response => {

                                        if (Response.data) {
                                            permissionPsicolo = true;
                                            history.push('/psicologo/perfil');
                                        }
                                        else if (permissionProfSaude == false && permissionPsicolo == false) {
                                            history.push('/servidor/perfil');
                                        }
                                    })
                                    .catch(error => console.log(error))

                            })
                            .catch(error => console.log(error))
                    }
                    else {
                        localStorage.setItem('idServidor', Response.data.id);
                        history.push('/profissionalDeSaude/perfil');
                    }
                    localStorage.setItem('idServidor', Response.data.id);
                    var permissionProfSaude = false;
                    var permissionPsicolo = false;

                    axios.post(URL.getDominio() + "/servidor/isServidorPermissaoAdmin", usuario.googleId, headers)
                    .then(Response => {

                        if (Response.data) {
                            permissionProfSaude = true;
                            history.push('/Admin/perfil');
                        }
                    })
                    .catch(error => console.log(error))

                    axios.post(URL.getDominio() + "/servidor/isServidorPermissaoProfSaude", usuario.googleId, headers)
                        .then(Response => {

                            if (Response.data) {
                                permissionProfSaude = true;
                                history.push('/profissionalDeSaude/perfil');
                            }
                        })
                        .catch(error => console.log(error))

                    axios.post(URL.getDominio() + "/servidor/isServidorPermissaoPsicologo", usuario.googleId, headers)
                        .then(Response => {

                            if (Response.data) {
                                permissionPsicolo = true;
                                history.push('/psicologo/perfil');
                            }
                            else if (permissionProfSaude == false && permissionPsicolo == false) {
                                history.push('/servidor/perfil');
                            }
                        })
                        .catch(error => console.log(error))

                })
                .catch(error => console.log(error))
        }

        if (!chave) {

            axios.post(URL.getDominio() + "/discente/isDiscenteGoogleId", usuario.googleId, headers)
                .then(Response => {
                    if (Response.data.id == null) {
                        axios.post(URL.getDominio() + "/discente/salvarUserDiscente", usuario, headers)
                            .then(Response => {
                                localStorage.setItem('id', Response.data.id);
                                history.push('/discente/Perfil');
                            })
                            .catch(error => console.log(error))
                    }
                    else {
                        localStorage.setItem('id', Response.data.id);
                        history.push('/discente/Perfil');
                    }
                    localStorage.setItem('id', Response.data.id);
                })
                .catch(error => console.log(error))
        }

    }

    const errorLogin = () => {
        showError();
    }
    
    function infoEmail(){
        window.location.replace('https://www.ifpb.edu.br/ti/redes/servicos/e-mail-academico')
        
    }

    return (
        <div>
            <ToobarPublica />
            <Toast ref={toast} />
            <div className="login-container p-grid p-justify-center p-align-center p-mt-3" style={{ height: '100%' }} >

                <div className={sizeCard} >
                    <Card title="SEJA BEM VINDO ESTUDANTE E COMUNIDADE ACADÊMICA"
                        subTitle="aqui opções de ajuda ao estudante, e auxilio aos profissionais de saúde " >

                        <div  >
                            <GoogleLogin
                                clientId="1074576164125-iqmvj2ij72e3evgu6gaenjhspj3n5v46.apps.googleusercontent.com"
                                buttonText="ENTRAR COM E-MAIL ACADEMICO"
                                onSuccess={responseGoogle}
                                onFailure={errorLogin}
                            // cookiePolicy={'single_host_origin'}
                            ></GoogleLogin>
                            <h3>ou</h3>
                            <Button className={configBotaoSecumdario} label="NÂO POSSUO E-MAIL ACADEMICO" onClick={infoEmail}/>
                        </div>

                        <Card subTitle='Realize login para acessar todas as opções: ' ></Card>
                        <Card subTitle=' • Inventário de Depressão de Beck (BDI)' ></Card>
                        <Card subTitle=' • Inventário de Ansiedade de Beck (BAI)' ></Card>
                        <Card subTitle=' • Questionário socioeconômico ' ></Card>
                        <Card subTitle=' • Material de apoio a saúde mental. (disponível publicamente)' ></Card>
                    </Card>
                </div>
            </div>
        </div>
    );

}