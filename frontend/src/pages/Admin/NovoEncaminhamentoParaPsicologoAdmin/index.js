import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import NovoEncaminhamentoParaPsicologoComponente from '../../../Components/NovoEncaminhamentoParaPsicologoComponente'
import Usuario from '../../../services/Usuario';

export default function NovoEncaminhamentoParaPsicologoAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <NovoEncaminhamentoParaPsicologoComponente data={Usuario.get_ADMIN()} ></NovoEncaminhamentoParaPsicologoComponente>
        </div>

    );
}



