import React from 'react';
import './styles.css'
import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
//import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';

export default function Create(){

    const cities = [
        {name: 'Depresão', code: 'NY'},
        {name: 'Ansiedade', code: 'RM'},
        {name: 'Suicidio', code: 'LDN'},
        {name: 'Outubro Rosa', code: 'IST'},
        {name: 'Biporalidade', code: 'PRS'}
    ];

    const [city, setCity] = useState('Ansiedade');
    

    const [image,setImage] = useState('');

    const uploadImage = async e => {
        e.preventDefault();
        console.log("upload da imagem")
        console.log(image)
    }

    const [value,setValue] = useState('');

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

        <h5>ARQUIVO E CAPA</h5>
        <FileUpload name="Arquivo" url="./Documentos"></FileUpload>

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