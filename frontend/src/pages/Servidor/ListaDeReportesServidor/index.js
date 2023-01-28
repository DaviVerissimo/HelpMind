
import React from 'react';
import ToobarServidorPublica from '../ToobarServidorPublico';
import ListaDeReportesComponente from '../../../Components/ListaDeReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDeReportesServidor() {

    return (
        <div>
            <ToobarServidorPublica></ToobarServidorPublica>
            <ListaDeReportesComponente data={Usuario.get_SERVIDOR()} ></ListaDeReportesComponente>
        </div>
    );
}



