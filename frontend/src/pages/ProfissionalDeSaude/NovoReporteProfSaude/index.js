import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import NovoReporteComponente from '../../../Components/NovoReporteComponente';
import Usuario from '../../../services/Usuario';

export default function NovoReporteProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <NovoReporteComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></NovoReporteComponente>
        </div>
    
    );
}



