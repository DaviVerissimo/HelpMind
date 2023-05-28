import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import IniciaConversaComponente from "../../../Components/IniciaConversaComponente";
import Usuario from '../../../services/Usuario';

export default function IniciarConversaAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <IniciaConversaComponente data={Usuario.get_ADMIN()} ></IniciaConversaComponente>
        </div>
    );
}



