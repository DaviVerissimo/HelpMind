import React from 'react';
import { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import axios from 'axios';
import ToobarAdmin from '../../ToobarAdmin';
import { Toast } from 'primereact/toast';
import BotaoVoltar from '../../../../Components/BotaoVoltar';
import URL from '../../../../services/URL';

export default function Create() {

  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Enviado com Sucesso!',
      detail: 'Obrigado',
      life: 5000
    });
  }
  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Não foi possivel Enviar!',
      detail: 'Verifique  se todos os campos foram preenchidos.',
      life: 5000
    });
  }

  const showErrorUpload = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Tipo de arquivo não suportado!',
      detail: 'Apenas arquivos de Vídeo, Audio, Imagem ou com as seguintes extensões são suportados: ' + arquivosAceitos + '.',
      life: 500000
    });
  }

  const categorias = [
    { name: 'Ansiedade' },
    { name: 'Depressão' },
    { name: 'Adolescência' },
    { name: 'Suicídio' },

  ];
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [invalid, setInvalid] = useState('p-invalid block');
  const [nomeObrigatorio, setNomeObrigatorio] = useState();
  const [categoriaObrigatorio, setCategoriaObrigatorio] = useState();
  const [file, setFile] = useState(null);
  const upload = URL.getDominio() + '/file/';
  const arquivosAceitos =
    "video/*, audio/*, image/*, .pdf, .doc, .docx, .xls, .ppt, .mdb, .docx, .xlsx, .pptx, .accdb, .one, .pub, .rtf, .txt, .odt, .ods, .odp, .odg, .svg, .odf";
  const handleUpload = async (event) => {
    try {
      const formData = new FormData();
      formData.append('file', event.files[0]);
      setFile(formData.get('file'));
    } catch (error) {
      console.error(error);
    }
  }


  function handleSelect(event) {
    let extensao = event.files[0].name.split(".").pop();
    if (!arquivosAceitos.includes(extensao) && !event.files[0].type.match('video.*') && !event.files[0].type.match('audio.*') && !event.files[0].type.match('image.*')) {
      showErrorUpload();
    }
  }

  function validar() {
    var valido = true;

    if (nome == null || nome == '') {
      setNomeObrigatorio(invalid);
      valido = false;
    }

    if (categoria == null || categoria == '') {
      setCategoriaObrigatorio(invalid);
      valido = false;
    }

    return valido;
  }

  async function submeter() {

    if (validar()) {
      const novoMaterial =
      {
        "nome": nome,
        "categoria": categoria.name,
        "nomeDoArquivo": file.name
      }
      const headers = {
        'headers': {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }

      axios.post(URL.getDominio() + "/material/salvarMaterial", novoMaterial, headers)
        .then(Response => { })
        .catch(error => console.log(error))
      showSuccess();
    }
    else {
      showError();
    }

  }

  return (

    <div>
      <ToobarAdmin></ToobarAdmin>
      <Toast ref={toast} />
      <Card title='NOVO MATERIAL' >
        <Card>
          <BotaoVoltar></BotaoVoltar>
          <Button
            className={'p-ml-3'}
            label="SALVAR"
            onClick={submeter}
          />
        </Card>
        <Card subTitle='NOME' >
          <InputText
            className={nomeObrigatorio}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: '100%' }}
          />
        </Card>
        <Card subTitle='CATEGORIA' >
          <Dropdown
            className={categoriaObrigatorio}
            filter
            optionLabel="name"
            value={categoria}
            options={categorias}
            onChange={(e) => setCategoria(e.value)}
            placeholder="escolha uma categoria"
            style={{ width: '100%' }}
          />
        </Card>
        <Card subTitle='ARQUIVO' >
          <FileUpload
            name='file'
            url={upload}
            onUpload={handleUpload}
            chooseLabel='PROCURAR'
            uploadLabel='ENVIAR'
            cancelLabel='CANCELAR'
            accept={arquivosAceitos}
            onSelect={handleSelect}
          ></FileUpload>
        </Card>
      </Card>
    </div>

  );
}