
import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaDeReportesComponente from '../../../Components/ListaDeReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDeReportesPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ListaDeReportesComponente data={Usuario.get_PSICOLOGO()} ></ListaDeReportesComponente>
        </div>
    );
}



