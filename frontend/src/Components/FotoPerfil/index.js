import React, { useState } from 'react';
import axios from 'axios';
import URL from '../../services/URL';

export default function FotoPerfil() {

    const headers = {
        'headers': {
            'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
            'Content-Type': 'application/json',
        }
    }
    const headers2 = {
        'headers': {
        'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
            'Accept': 'image/avif,image/webp,*/*',
            'Content-Type': 'image/jpeg',
        }
    }

    const [fotoPerfil, setFotoPerfil] = useState("");

    function buscarFotoDiscente(id) {
        axios.post(URL.getDominio() + "/discente/buscaDiscentePorID", id, headers)
            .then(Response => {
                setFotoPerfil(Response.data.imagemPerfilUri);
            })
            .catch(error => console.log(error))

        axios.get(fotoPerfil, id, headers2)
            .then(Response => {

            })
            .catch(error => console.log(error))
    }

    function buscarFotoServidor(idServidor) {
        axios.post(URL.getDominio() + "/servidor/buscarServidorPeloId", idServidor, headers)
            .then(Response => {
                setFotoPerfil(Response.data.imagemPerfilUri);
            })
            .catch(error => console.log(error))

        axios.get(fotoPerfil, idServidor, headers2)
            .then(Response => {

            })
            .catch(error => console.log(error))

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
            buscarFotoServidor(id)
            autenticado = true;
        }
        return autenticado;
    }

    return (
        <div>
            {discenteLogado()}
            {servidorLogado()}
            <img src={fotoPerfil} alt='' ></img>
        </div>

    );

}
