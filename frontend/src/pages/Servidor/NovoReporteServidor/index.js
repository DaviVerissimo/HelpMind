import React from 'react';
import ToobarServidorPublica from '../ToobarServidorPublico';
import NovoReporteComponente from '../../../Components/NovoReporteComponente';
import Usuario from '../../../services/Usuario';

export default function NovoReporteServidor() {

    return (
        <div>
            <ToobarServidorPublica></ToobarServidorPublica>
            <NovoReporteComponente data={Usuario.get_SERVIDOR()} ></NovoReporteComponente>
        </div>
    
    );
}



