
import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaDeReportesComponente from '../../../Components/ListaDeReportesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDeReportesAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaDeReportesComponente data={Usuario.get_ADMIN()} ></ListaDeReportesComponente>
        </div>
    );
}



