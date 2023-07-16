import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaProntuariosDoDiscenteComponente from '../../../Components/ListaProntuariosDoDiscenteComponente';
import Usuario from '../../../services/Usuario';

export default function ListaProntuariosDoDiscenteAdmin() {

    return (
        <div>
             <ToobarAdmin></ToobarAdmin>
             <ListaProntuariosDoDiscenteComponente data={Usuario.get_ADMIN()} ></ListaProntuariosDoDiscenteComponente>
        </div>
    )
}



