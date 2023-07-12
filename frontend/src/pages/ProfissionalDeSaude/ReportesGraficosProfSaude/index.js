
import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import PainelReportesGraficoComponente from '../../../Components/PainelReportesGraficoComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesGraficosProfSaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <PainelReportesGraficoComponente data={Usuario.get_ADMIN()} ></PainelReportesGraficoComponente>
        </div>
    );
}



