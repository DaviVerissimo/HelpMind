import React, { useState } from 'react';
import axios from 'axios';
import URL from '../../services/URL';

export default function NomePerfil() {

    const headers = {
        'headers': {
            'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
            'Content-Type': 'application/json',
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

    return (
        <div>
            {discenteLogado()}
            {servidorLogado()}
            {(!nomePerfil) ? '' : <div className='p-component p-pr-3'>{nomePerfil}</div>}
        </div>


    );

}
