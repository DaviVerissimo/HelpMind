import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import URL from '../../services/URL';

export default function NomePerfil() {

    const headers = {
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const [nomePerfil, setNomePerfil] = useState("");
    
    function buscarNomeDiscente(id) {
        axios.post(URL.getDominio() + "/discente/buscaDiscentePorID", id, headers)
            .then(Response => {
                setNomePerfil(Response.data.nome);
            })
            .catch(error => console.log(error))
    }

    function buscarNomeServidor(id) {
        axios.post(URL.getDominio() + "/servidor/buscarServidorPeloId", id, headers)
        .then(Response => {
            setNomePerfil(Response.data.nome);
        })
        .catch(error => console.log(error))

    }

    function discenteLogado() {
        var autenticado = false;
        const id = localStorage.getItem('id');
        if (id != null && id != undefined) {
            buscarNomeDiscente(id)
            autenticado = true;
        }
        return autenticado;
    }

    function servidorLogado() {
        var autenticado = false;
        const id = localStorage.getItem('idServidor');
        if (id != null && id != undefined) {
            buscarNomeServidor(id)
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
            {servidorLogado()}
            
            <Card  className='p-mr-3' subTitle={nomePerfil} ></Card>
        </div>
        
        
    );

}