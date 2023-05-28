import React from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import ConversaEnviarMensagemComponente from '../ConversaEnviarMensagemComponente';
import ConversaExibirMensagens from '../ConversaExibirMensagens';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ConversaComponente(props) {

  const { id } = useParams();
  const visualizadoPeloProfSaude = props.visualizadoPeloProfSaude;
  const visualizadoPeloPsicologo = props.visualizadoPeloPsicologo;
  const metadata = props.metadata;
  const isPsicologo = props.isPsicologo;

  return (
    <div>
      <Card title="CONVERSA">
        <Card>
          <BotaoVoltar />
        </Card>
        <ConversaExibirMensagens idConversa={id} ></ConversaExibirMensagens>
        <ConversaEnviarMensagemComponente
          idConversa={id}
          visualizadoPeloProfSaude={visualizadoPeloProfSaude}
          visualizadoPeloPsicologo={visualizadoPeloPsicologo}
          metadata={metadata}
          isPsicologo={isPsicologo}
        ></ConversaEnviarMensagemComponente>
      </Card>
    </div>
  );
}
