import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import NovoReporteComponente from '../../../Components/NovoReporteComponente';
import Usuario from '../../../services/Usuario';

export default function NovoReportePsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <NovoReporteComponente data={Usuario.get_PSICOLOGO()} ></NovoReporteComponente>
        </div>
    
    );
}



