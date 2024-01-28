import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import URL from '../../services/URL';


const GoogleLoginButton = () => {

    const history = useHistory();
    const toast = useRef(null);
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel realizar login!',
            detail: 'Deve-se utilizar uma conta acadêmica/institucional do IFPB.',
            life: 5000
        });
    }
    const errorLogin = (e) => {
        showError();
        console.error(e);
    }
    const [redirectUri, setRedirectUri] = useState('');

    const buttonStyles = {
        background: '#4285F4',
        color: '#FFFFFF',
        borderColor: '#4285F4',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    };

    const iconStyles = {
        fontSize: '1.2em',
    };

    // const headers = {
    //     'headers': {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }

    const headers = {
        'headers': {
            'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
            'Content-Type': 'application/json'
        }
    }

    const handleGoogleLoginClick = async () => {
        //window.location.href = 'http://localhost:8080/authetication/login';                
        try {
            // const response = await axios.get('http://localhost:8080/authetication/login', { withCredentials: true });
            const response = await axios.get('http://localhost:8080/authetication/login', headers);
    
            if (response.status === 200) {
                const uri = response.data;
                console.log(uri)

                // const headers2 = {
                //     'headers': {
                //         'Authorization': 'Bearer ' + accessToken, // Substitua 'accessToken' pelo seu token real
                //         'Content-Type': 'application/json'
                //     }
                // }

                // const autenticado = await axios.get('http://localhost:8080/authetication/perfil', headers2);
                // if (autenticado.status === 200 && autenticado.data !== "error") {
                //     setRedirectUri(URL.getDominio() + uri);
                //     console.log("uri" + redirectUri)
                //     permitirAcessoComo(uri);
                //     history.push(uri);
                // }
            } else {
                errorLogin();
            }
        } catch (error) {
            console.error('Erro durante a solicitação:', error);
            errorLogin();
        }
    };

    function permitirAcessoComo(uri) {
        if (uri.includes("Admin")) {
            localStorage.setItem('loginAdmin', true);
        }
        if (uri.includes("profissionalDeSaude")) {
            localStorage.setItem('loginProfSaude', true);
        }
        if (uri.includes("psicologo")) {
            localStorage.setItem('loginPsicologo', true);
        }
        if (uri.includes("servidor")) {
            localStorage.setItem('loginServidor', true);
        }
        if (uri.includes("Admin")) {
            console.log("A variável contém a string 'exemplo'");
            //resolver discente
            // falta ver o idservidor
        }
    }

    return (
        <div>
            <Toast ref={toast} />
            <Button
                onClick={handleGoogleLoginClick}
                className="p-button-outlined p-button-rounded p-button-text"
                style={buttonStyles}
            >
                <FaGoogle style={iconStyles} />
                <span>Fazer login com o Google</span>
            </Button>
        </div>

    );
};

export default GoogleLoginButton;
