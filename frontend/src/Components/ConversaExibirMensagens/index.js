import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import MensagemComponente from '../MensagemComponente';
import ConversaService from '../../services/ConversaService';

export default function ConversaExibirMensagens(props) {
  var estiloModal = { width: '30%' };
  var largura = window.screen.width;
  if (largura < 640) {
    estiloModal = { width: '80%' };
  }

  const [mensagens, setMensagens] = useState([]);
  // const idConversa = localStorage.getItem('idConversa');
  const [idConversa, setIdConversa] = useState(props.idConversa);

  useEffect(() => {
    if (idConversa == null || idConversa == undefined) {
      setIdConversa(localStorage.getItem('idConversa'));
    }

  }, []);

  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const response = await ConversaService.getConversaById(idConversa);
        setMensagens(response.data.mensagens);
        if (props.isPsicologo) {
          ConversaService.marcaConversaComoLidaPsicologo(idConversa);
        }
        else {
          if (!response.data.visualizadoPeloProfSaude) {
            ConversaService.marcaConversaComoLidaProfSaude(idConversa);
          }
        }
      } catch (error) {
        console.log('Ocorreu um erro:', error);
      }
    };

    fetchMensagens();
  }, [idConversa]);

  return (
    <div>
      <Card>
        {Array.isArray(mensagens) ? (
          mensagens.map((mensagemObj, index) => (
            <MensagemComponente
              key={index}
              mensagem={mensagemObj.mensagem}
              data={mensagemObj.data}
              nomeUsuario={mensagemObj.usuario}
              profissao={mensagemObj.tipoServidor}
            />
          ))
        ) : (
          <p>Nenhuma mensagem encontrada.</p>
        )}
      </Card>
    </div>
  );
}
