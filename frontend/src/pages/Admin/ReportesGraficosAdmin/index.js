
import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import PainelReportesGraficoComponente from '../../../Components/PainelReportesGraficoComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesGraficosAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <PainelReportesGraficoComponente data={Usuario.get_ADMIN()} ></PainelReportesGraficoComponente>
        </div>
    );
}



