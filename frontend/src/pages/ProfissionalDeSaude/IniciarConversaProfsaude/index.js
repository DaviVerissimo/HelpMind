import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import IniciaConversaComponente from "../../../Components/IniciaConversaComponente";
import Usuario from '../../../services/Usuario';

export default function IniciarConversaProfsaude() {

    return (
        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <IniciaConversaComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></IniciaConversaComponente>
        </div>
    );
}



