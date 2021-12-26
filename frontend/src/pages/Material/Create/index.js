import React from 'react';
import './styles.css'
import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
//import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import api from '../../../config/configApi';

export default function Create(){

    /**
     *             <section disabled>
            <h5>ARQUIVO E CAPA</h5>
                <FileUpload name="Arquivo" url="./Documentos"></FileUpload>
            </section>
     */

    const cities = [
        {name: 'Depresão', code: 'NY'},
        {name: 'Ansiedade', code: 'RM'},
        {name: 'Suicidio', code: 'LDN'},
        {name: 'Outubro Rosa', code: 'IST'},
        {name: 'Biporalidade', code: 'PRS'}
    ];

    const [city, setCity] = useState('Ansiedade');
    const [value,setValue] = useState('');

    //2ª parte upload de imagem

    const [image, setImage] = useState('');  
    const [endImg] = useState('./icone_usuario.png');
    const [status, setStatus] = useState({
      type: '',
      mensagem: ''
    });
  
    const uploadImage = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
  
      const headers = {
        'headers': {
          'Content-Type': 'application/json'
        }
      }
  
      await api.post("/upload-image", formData, headers)
      .then((response) => {
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem
        });
      }).catch((err) => {
        if(err.response){
          setStatus({
            type: 'error',
            mensagem: err.response.data.mensagem
          });
        }else{
          setStatus({
            type: 'error',
            mensagem: "Erro: Tente mais tarde!"
          });
        }
      });

    }

    return (
        //<InputText className='ccc' value={value} onChange={(e) => setValue(e.target.value)} />
        
        <div>
            <section className='coluna1' >
            <h1 className='titulo1' >NOVO MATERIAL</h1>
                <section className='botao'>
                    <button className = "btnCancel" type = "submit">CANCEL</button>
                    <button className = "btnSalvar" type = "submit">SALVAR</button>
                </section>
            <h5>NOME</h5>
            <InputText className='entradaNome' value={value} onChange={(e) => setValue(e.target.value)} />
            {console.log(value)}
                                                    
            <h5>CATEGORIA</h5>
            
                <section className='categoria' >
                <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="TODAS"/>
                {console.log(city)}
                
                </section>



        <div>
            <form onSubmit={uploadImage} >
            <h5>ARQUIVO</h5>
                <input type = "file" name='file'>
                    
                </input>
                <h5>CAPA</h5>
                <input type = "file" name='image' onChange={e => setImage(e.target.files[0])}>
                    
                </input>
                <button className = "btnSalvar" type = "submit">SALVAR</button>
            </form>
        </div>
            
            </section>
            
        <section className='' >


         </section>
        </div>
        
    );
}