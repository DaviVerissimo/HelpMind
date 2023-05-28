import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import MensagemComponente from '../MensagemComponente';
import ConversaService from '../../services/ConversaService';

export default function ConversaEnviarMensagemComponente(props) {
    var estiloModal = { width: '30%' }
    var largura = window.screen.width;
    if (largura < 640) {
        estiloModal = { width: '80%' }
    }
    const servidorStr = localStorage.getItem(props.metadata);
    const servidor = JSON.parse(servidorStr);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [novaMensagem, setNovaMensagem] = useState('');
    const [mensagens, setMensagens] = useState([]);
    const nomeUsuario = servidor.nome;
    const [profissao, setProfisao] = useState('Servidor');
    const [idConversa, setIdConversa] = useState(props.idConversa);

    useEffect(() => {
        if (idConversa == null || idConversa == undefined) {
            setIdConversa(parseInt(localStorage.getItem('idConversa')))
        }

    }, []);

    useEffect(() => {
        if (servidor.permissaoDeAcessoProfissionalDeSaude == true) {
            setProfisao('Profissional de saúde');
        }

        if (servidor.permissaoDeAcessoPsicologo == true) {
            setProfisao('Psicólogo');
        }

        if (localStorage.getItem('loginAdmin')) {
            setProfisao('Administrador');
        }

    }, [idConversa])

    function enviarMensagem() {
        setMensagens([...mensagens, novaMensagem]);
        console.log(novaMensagem);
        const mensagem = {
            "usuario": nomeUsuario,
            "urlImagemPerfil": servidor.imagemPerfilUri,
            "mensagem": novaMensagem,
            "data": null,
            "visualizadoPeloProfSaude": props.visualizadoPeloProfSaude,
            "visualizadoPeloPsicologo": props.visualizadoPeloPsicologo,
            "tipoServidor": profissao
        }

        const envelope = {
            "id": idConversa,
            "mensagem": mensagem
        }
        ConversaService.adddMensagens(envelope);
        setNovaMensagem('');
        setMostrarModal(false);
    };


    const modal = (
        <Dialog
            header="Nova mensagem"
            visible={mostrarModal}
            style={estiloModal}
            onHide={() => setMostrarModal(false)}
        >
            <div className="p-inputgroup">
                <InputTextarea
                    value={novaMensagem}
                    autoResize
                    onChange={(e) => setNovaMensagem(e.target.value)}
                />
            </div>
            <div>
                <Button
                    className='p-mt-3'
                    label="Enviar"
                    onClick={enviarMensagem}
                />
            </div>
        </Dialog>
    );

    return (
        <div>
            <Card>
                {mensagens.map((mensagem, index) => (
                    <MensagemComponente
                        key={index}
                        mensagem={mensagem}
                        data={'Agora mesmo'}
                        nomeUsuario={nomeUsuario}
                        profissao={profissao}
                    />
                ))}
                <Card>
                    <Button
                        label="RESPONDER"
                        onClick={() => setMostrarModal(true)}
                    />
                </Card>
            </Card>
            {modal}
        </div>
    );
}
