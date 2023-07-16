import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import ConversaService from '../../services/ConversaService';
import Usuario from '../../services/Usuario';

export default function NotificacaoComponente() {

    const history = useHistory();
    const [usuario, setUsuario] = useState();
    const [mensagemNaoVista, setMensagenNaoVista] = useState(false);
    const [idMensagem, setIdMensagem] = useState();
    const ID = localStorage.getItem('idServidor');
    const botaoAcessarMensagem = () => {
        return (
            <Button
                icon='pi pi-envelope'
                label='ACESSAR MENSAGEM'
                onClick={acesssarMensagem}
            ></Button>
        );
    };
    function acesssarMensagem() {
        history.push('/' + usuario + '/conversa/' + idMensagem)
    }
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Nova mensagem recebida!',
            detail: botaoAcessarMensagem(),
            life: 15000
        });

    }

    useEffect(async () => {
        if (localStorage.getItem('loginAdmin')) {
            setUsuario(Usuario.get_ADMIN())
            ConversaService.verificaIsMensagensNaoVisualizadasProfSaude(ID).then((response) => {
                if (response.data) {
                    ConversaService.retornaIdMensagemNaoVisualizadaPeloProfSaude(ID).then((response) => {
                        setIdMensagem(response.data);
                        setMensagenNaoVista(true)
                    });
                }
            });
        }
        if (localStorage.getItem('loginProfSaude')) {
            setUsuario(Usuario.get_PROFISSIONAL_DE_SAUDE());
            ConversaService.verificaIsMensagensNaoVisualizadasProfSaude(ID).then((response) => {
                if (response.data) {
                    ConversaService.retornaIdMensagemNaoVisualizadaPeloProfSaude(ID).then((response) => {
                        setIdMensagem(response.data);
                        setMensagenNaoVista(true)
                    });
                }
            });
        }
        if (localStorage.getItem('loginPsicologo')) {
            setUsuario(Usuario.get_PSICOLOGO());
            ConversaService.verificaIsMensagensNaoVisualizadasPsicologo(ID).then((response) => {
                if (response.data) {
                    ConversaService.retornaIdMensagemNaoVisualizadaPeloPsicologo(ID).then((response) => {
                        setIdMensagem(response.data);
                        setMensagenNaoVista(true)
                    });
                }
            });
        }
        if (mensagemNaoVista) {
            showSuccess();
        }

    }, [mensagemNaoVista]);

    return (
        <div>
            <Toast ref={toast} />
        </div>

    );
}