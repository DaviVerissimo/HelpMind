import './styles.css'
import React from 'react';
import ToobarServidorPublica from '../ToobarServidorPublico';
import Materiais from '../../../Components/Materiais';

export default function ServidorMateriaisOnline() {

    return (

        <div> 
            <ToobarServidorPublica></ToobarServidorPublica>
            <Materiais></Materiais>
        </div>

    );
}