import React from 'react';
import './styles.css'
import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { CascadeSelect } from 'primereact/cascadeselect';
import { FileUpload } from 'primereact/fileupload';

export default function Create(){

    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },
    
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },
    
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ]
    
    const [selectedCity, setSelectedCity1] = useState('Canada');
    
    function mudarEstado(){
        setSelectedCity1('United States');
    }

    const [image,setImage] = useState('');

    const uploadImage = async e => {
        e.preventDefault();
        console.log("upload da imagem")
        console.log(image)
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
            <InputText className='entradaNome' ></InputText>
                                                    
            <h5>CATEGORIA</h5>
            
                <section className='categoria' >
                <CascadeSelect  value={selectedCity} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                style={{minWidth: '14rem'}} placeholder={"Selecione uma categoria"} onChange={event => setSelectedCity1(event.value)}/>
                <button className = "btnNovaCategoria" type = "submit">NOVA CATEGORIA</button>
                
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