import { Card } from 'primereact/card';
import React, { useState, } from 'react';
import './style.css';
import axios from 'axios';
import URL from '../../../services/URL';
import { Divider } from 'primereact/divider';

export default function BarraPessoalAdmin({ idDiscente }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const headers = {
        'headers': {
            'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
            'Content-Type': 'application/json',
        }
    }
    axios.post(URL.getDominio() + "/servidor/buscarServidorPeloId", idDiscente, headers)
        .then(Response => {
            setName(Response.data.nome);
            setEmail(Response.data.email);
        })
        .catch(error => console.log(error))

    return (
        <div>
            <Card
                title={name}
            ></Card>
            <Divider></Divider>
            <Card
                className='p-mt-3'
                title={email}
            ></Card>
            <Divider></Divider>
        </div>
    );
}
