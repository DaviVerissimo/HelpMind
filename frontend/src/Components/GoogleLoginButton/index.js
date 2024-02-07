import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { FaGoogle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import URL from '../../services/URL';
import axios from 'axios';

const GoogleLoginButton = () => {
    const history = useHistory();
    const toast = useRef(null);

    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possível realizar login!',
            detail: 'Deve-se utilizar uma conta acadêmica/institucional do IFPB.',
            life: 5000
        });
    };

    useEffect(() => {
        const fragmentString = window.location.hash.substring(1);

        // Parse query string to see if page request is coming from OAuth 2.0 server.
        const params = new URLSearchParams(fragmentString);
        const accessToken = params.get('access_token');
        console.log('Access Token:', accessToken);
        if (accessToken) {
            // Aqui você pode salvar o token de acesso em localStorage ou em algum estado do componente, se desejar.
            // Depois, você pode enviar este token para o backend para autenticação.
            localStorage.setItem("token", accessToken);

            // Após obter o token de acesso, você pode redirecionar o usuário para a página desejada.
            history.push('/pagina-desejada');
        } else {
            console.log('Token de acesso não encontrado na URL.');
        }
    }, [history]);

    const handleLoginClick = () => {
        // Configurações para autenticação OAuth com o Google
        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        const clientID = URL.getClientId();// defini em uri
        const redirectURI = URL.getRedirectUri();
        const scope = 'profile email';
        const state = 'oauth2_state';

        // Construção da URL de autenticação
        const authUrl = `${oauth2Endpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope}&state=${state}&response_type=token`;

        // Redirecionar o usuário para a página de login do Google
        window.location.href = authUrl;
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button
                onClick={handleLoginClick}
                className="p-button-outlined p-button-rounded p-button-text"
                style={{ background: '#4285F4', color: '#FFFFFF', borderColor: '#4285F4', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
                <FaGoogle style={{ fontSize: '1.2em' }} />
                <span>Fazer login com o Google</span>
            </Button>
        </div>
    );
};

export default GoogleLoginButton;
