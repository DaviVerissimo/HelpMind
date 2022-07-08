import React, { useState } from 'react';
import axios from 'axios';

export default function FotoPerfil() {

    const headers = {
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const [fotoPerfil, setFotoPerfil] = useState("");

    function buscarFotoDiscente(id) {
        axios.post("http://localhost:8080/discente/buscaDiscentePorID", id, headers)
            .then(Response => {
                setFotoPerfil(Response.data.imagemPerfilUri);
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
            <img src={fotoPerfil} alt='' ></img>
        </div>
        
        
    );

}