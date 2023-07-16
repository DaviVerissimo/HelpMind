import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import NovoEncaminhamentoParaPsicologoComponente from '../../../Components/NovoEncaminhamentoParaPsicologoComponente'
import Usuario from '../../../services/Usuario';

export default function NovoEncaminhamentoParaPsicologoProfsaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <NovoEncaminhamentoParaPsicologoComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></NovoEncaminhamentoParaPsicologoComponente>
        </div>

    );
}



