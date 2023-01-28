import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import NovoReporteComponente from '../../../Components/NovoReporteComponente';
import Usuario from '../../../services/Usuario';

export default function NovoReporteAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <NovoReporteComponente data={Usuario.get_ADMIN()} ></NovoReporteComponente>
        </div>
    
    );
}



