import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import GerenciaProntuariosComponente from '../../../Components/GerenciaProntuariosComponente';
import Usuario from '../../../services/Usuario';

export default function GerenciaProntuariosAdmin() {

    return (
        <div>
             <ToobarAdmin></ToobarAdmin>
             <GerenciaProntuariosComponente data={Usuario.get_ADMIN()} ></GerenciaProntuariosComponente>
        </div>
    )
}



