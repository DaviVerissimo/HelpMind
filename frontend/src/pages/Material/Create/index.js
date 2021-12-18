import React from 'react';
import './styles.css'

import { InputText } from 'primereact/inputtext';
//import { CascadeSelect } from 'primereact/cascadeselect';


export default function Create(){
    return (
        //<InputText className='ccc' value={value} onChange={(e) => setValue(e.target.value)} />
        
        <div>
            <section className='coluna1' >
            <h1 className='titulo1' >NOVO MATERIAL</h1>
                                                        <button className = "btnCancel" type = "submit">CANCEL</button>
                                                        <button className = "btnSalvar" type = "submit">SALVAR</button>
            <h5>NOME</h5>
            <InputText className='entradaNome' ></InputText>
                                                    
            <h5>CATEGORIA</h5>
            
            <InputText className='entradaeSPAÇOCATEGORIA' ></InputText>
                                <button className = "btnNovaCategoria" type = "submit">NOVA CATEGORIA</button>

        <h5>ARQUIVO</h5>
        <button className = "btnNome" type = "submit">ESCOLHER ARQUIVO</button>
                                <h10 className = "caminhoArquivo"  >caminho do arquivo</h10>
                                                    <h10 className = "tamArquivo"  >tamanho do arquivo</h10>
        <h5>CAPA</h5>
        <button className = "btnCapa" type = "submit">ESCOLHER CAPA</button>
                                <h10 className = "caminhoCapa"  >caminho da capa</h10>
                                                    <h10 className = "tamCapa"  >tamanho da capa</h10>
            </section>
            
        <section className='' >
          
         </section>
        </div>
        
    );
}