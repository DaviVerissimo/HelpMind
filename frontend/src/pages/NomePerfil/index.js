import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';

export default function NomePerfil() {

    const headers = {
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const [nomePerfil, setNomePerfil] = useState("");
    
    function buscarFotoDiscente(id) {
        axios.post("http://localhost:8080/discente/buscaDiscentePorID", id, headers)
            .then(Response => {
                setNomePerfil(Response.data.nome);
            })
            .catch(error => console.log(error))
    }

    function buscarFotoServidor() {

        // axios.post("http://localhost:8080/discente/buscaDiscentePorID", idDiscente, headers)
        //     .then(Response => {
        //         setFotoPerfil(Response.data.imagemPerfilUri);
        //     })
        //     .catch(error => console.log(error))
    }

    function discenteLogado() {
        var autenticado = false;
        const id = localStorage.getItem('id');
        if (id != null && id != undefined) {
            buscarFotoDiscente(id)
            autenticado = true;
        }
        return autenticado;
    }

    function servidorLogado() {
        var autenticado = false;
        const id = localStorage.getItem('idServidor');
        if (id != null && id != undefined) {
            buscarFotoServidor()
            autenticado = true;
        }
        return autenticado;
    }

    // if (discenteLogado()) {
    //     console.log(1)
    //     return <img src={fotoPerfil} alt='Foto do Perfil' ></img>

    // }
    // if (servidorLogado()) {
    //     console.log(2)
    //     return <img src={fotoPerfil} alt='Foto do Perfil' ></img>

    // }
    // if(!discenteLogado && !servidorLogado){
    //     console.log(3)
    //     return null;
    // }

    return (
        <div>
            {discenteLogado()}
            
            
            
            <Card  className='p-mr-3' subTitle={nomePerfil} ></Card>
        </div>
        
        
    );

}