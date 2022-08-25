
import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaDeReportesComponente from '../../../Components/ListaDeReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDeReportesProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaDeReportesComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaDeReportesComponente>
        </div>
    );
}



