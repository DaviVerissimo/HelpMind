
import React from 'react';
import ToobarServidorPublica from '../ToobarServidorPublico';
import ReportesComponente from '../../../Components/ReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ServidorReportes() {

    return (
        <div>
            <ToobarServidorPublica></ToobarServidorPublica>
            <ReportesComponente data={Usuario.get_SERVIDOR()} ></ReportesComponente>
        </div>
    );
}



