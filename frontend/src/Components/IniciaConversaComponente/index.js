import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import axios from "axios";
import { Button } from 'primereact/button';
import BotaoVoltar from '../BotaoVoltar';
import PsicologoNomeComponente from '../PsicologoNomeComponente';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import ConversaService from '../../services/ConversaService';
import ServidorService from '../../services/ServidorService';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function IniciaConversaComponente(props) {
  const history = useHistory();
  const toast = useRef(null);
  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Não foi possível enviar!',
      detail: 'Verifique se todos os campos foram preenchidos.',
      life: 5000
    });
  };

  const showInfo = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Aguarde!',
      detail: 'Processando....',
      life: 5000
    });
  };

  const discenteStr = localStorage.getItem('discente');
  const discente = JSON.parse(discenteStr);
  const [psicologoNomeObrigatorio, setPsicologoNomeObrigatorio] = useState(false);
  const [invalid, setInvalid] = useState('p-invalid block');
  const [psicologoNome, setPsicologoNome] = useState('');
  const [discenteNome, setDiscenteNome] = useState(discente.nome);
  const [idDiscente, setIdDiscente] = useState(JSON.stringify(discente.id));
  const [idProfissionalSaude, setIdProfissionalSaude] = useState(localStorage.getItem('idServidor'));

  const retornaNomeDoPsicologo = (nome) => {
    setPsicologoNome(nome);
  };

  function validar() {
    var valido = true;
    if (psicologoNome == null || psicologoNome === '') {
      setPsicologoNomeObrigatorio(invalid);
      valido = false;
    }
    return valido;
  }

  async function carregarConversa(IDs) {
    try {
      const response = await ConversaService.retornaIDconversa(IDs);
      var idConversa = response.data;
      localStorage.setItem("idConversa", idConversa);

      const responseConversa = await ConversaService.getConversaById(idConversa);
      var conversa = responseConversa.data;
      var conversaStr = JSON.stringify(conversa);
      localStorage.setItem("conversa", conversaStr);
      var mensagens = conversa.mensagens;
      var mensagensStr = JSON.stringify(mensagens);
      localStorage.setItem("mensagens", mensagensStr);

      conversarComPsicologoSobreDiscente();
    } catch (error) {
      console.log('Ocorreu um erro:', error);
    }
  };

  async function submeter() {
    if (validar()) {
      try {
        const responseServidor = await ServidorService.getIdByNome(psicologoNome);
        var idPsicologo = JSON.stringify(responseServidor.data);
        const IDs = {
          "idDiscente": idDiscente,
          "idProfissionalSaude": idProfissionalSaude,
          "idPsicologo": idPsicologo
        };
        showInfo();
        carregarConversa(IDs);
      } catch (error) {
        showError();
      }
    } else {
      showError();
    }
  }

  const conversarComPsicologoSobreDiscente = () => {
    const usuario = props.data;
    history.push('/' + usuario + '/conversa/');
  }

  return (
    <div>
      <Toast ref={toast} />
      <div>
        <Card title="COMUNICAÇÃO PARA PSICÓLOGO"></Card>
        <Card>
          <div>
            <BotaoVoltar></BotaoVoltar>
            <Button className={'p-ml-3'} label="AVANÇAR" onClick={submeter} />
          </div>
        </Card>
        <Card>
          <Card subTitle='PSICÓLOGO'>
            <PsicologoNomeComponente
              nomePsicologo={retornaNomeDoPsicologo}
              preenchimentoObrigatorio={psicologoNomeObrigatorio}
            ></PsicologoNomeComponente>
          </Card>
          <Card subTitle='DISCENTE'>
            <InputText
              value={discenteNome}
              style={{ width: '100%' }}
              disabled
            ></InputText>
          </Card>
        </Card>
      </div>
    </div>
  );
}
