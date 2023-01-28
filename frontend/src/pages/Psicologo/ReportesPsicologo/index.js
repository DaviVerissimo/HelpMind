
import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ReportesComponente from '../../../Components/ReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ReportesComponente data={Usuario.get_PSICOLOGO()} ></ReportesComponente>
        </div>
    );
}



