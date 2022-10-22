import { Card } from 'primereact/card';
import React, { useState,} from 'react';
import './style.css';
import axios from 'axios';
import URL from '../../../services/URL';

export default function BarraPessoalAdmin({ idDiscente }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const headers = {
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
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
            <Card title={name} ></Card>
            <Card className='p-mt-3' title={email} ></Card>
        </div>
    );
}