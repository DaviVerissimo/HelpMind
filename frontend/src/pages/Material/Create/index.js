import React from 'react';
import './styles.css'
import { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import ToobarProfissionalDeSaude from '../../ProfissionalDeSaude/ToobarProfissionalDeSaude';

export default function Create() {

  const categorias = [
    { name: 'Depresão', code: 'NY' },
    { name: 'Ansiedade', code: 'RM' },
    { name: 'Suicidio', code: 'LDN' },
    { name: 'Outubro Rosa', code: 'IST' },
    { name: 'Biporalidade', code: 'PRS' }
  ];
  const [categoria, setCategoria] = useState('Ansiedade');
  const [nome, setNome] = useState('');

  var configBotaoCancel = "p-mb-3 p-col-1 p-button-secondary ";
  var configBotaoSalvar = "p-mb-3 p-mt-3 p-col-1";
  var espacamento = '10px';
  var largura = window.screen.width;
  if (largura < 640) {
      configBotaoCancel = "p-mb-3 p-button-secondary "
      configBotaoSalvar = "p-mt-3 ";
      espacamento = '0px';
  }

  return (

    <div> <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
      <div>
        <Card title='NOVO MATERIAL' >
          <Card>
            <div className=""  >
              <Button className={configBotaoCancel} style={{ right: espacamento }} label="CANCEL" />
              <Button className={configBotaoSalvar} label="SALVAR" onClick={null} />
            </div>
          </Card>
          <Card subTitle='NOME' >
            <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />
          </Card>
          <Card subTitle='CATEGORIA' >
            <Dropdown className='p-col-10 p-mr-6 ' optionLabel="name" value={categoria} options={categorias} onChange={(e) => setCategoria(e.value)} placeholder="TODAS" />
            <Button className={configBotaoSalvar} style={{ right: espacamento }} label="NOVA CATEGORIA" onClick={null} />
          </Card>
          <Card subTitle='ARQUIVO' >
            {/* <FileUpload name="file" url="/file/"  multiple accept="audio/*,video/*,image/*" maxFileSize={1024* 1024*10000000000 } ></FileUpload> */}
            <FileUpload name="file" url="/file/" ></FileUpload>
          </Card>
          <Card subTitle='CAPA' >
            <FileUpload name="file" url="/file/"  multiple accept="image/*" maxFileSize={1000000000000 } ></FileUpload>
          </Card>
        </Card>
      </div>

    </div>

  );
}