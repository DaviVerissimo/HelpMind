import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaProntuariosComponente from '../../../Components/ListaProntuariosComponente';
import Usuario from '../../../services/Usuario';

export default function ListaProntuariosAdmin() {

    return (
        <div>
             <ToobarAdmin></ToobarAdmin>
             <ListaProntuariosComponente data={Usuario.get_ADMIN()} ></ListaProntuariosComponente>
        </div>
    )
}



