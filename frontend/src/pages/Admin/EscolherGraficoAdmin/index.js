import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import Usuario from '../../../services/Usuario';
import EscolheGraficoComponente from '../../../Components/EscolheGraficoComponente';


export default function EscolherGraficoAdmin() {

    return (

        <div>
            <ToobarAdmin></ToobarAdmin>
            <EscolheGraficoComponente logado={Usuario.get_ADMIN()} ></EscolheGraficoComponente>
        </div>

    );
}