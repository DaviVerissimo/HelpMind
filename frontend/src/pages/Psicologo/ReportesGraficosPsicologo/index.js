
import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import PainelReportesGraficoComponente from '../../../Components/PainelReportesGraficoComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesGraficosPsicologo() {

    return (
        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <PainelReportesGraficoComponente data={Usuario.get_ADMIN()} ></PainelReportesGraficoComponente>
        </div>
    );
}



