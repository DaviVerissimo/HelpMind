
import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ReportesComponente from '../../../Components/ReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ReportesAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ReportesComponente data={Usuario.get_ADMIN()} ></ReportesComponente>
        </div>
    );
}



