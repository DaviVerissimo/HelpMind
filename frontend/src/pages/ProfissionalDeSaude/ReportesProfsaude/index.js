
import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ReportesComponente from '../../../Components/ReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesProfsaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ReportesComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ReportesComponente>
        </div>
    );
}



