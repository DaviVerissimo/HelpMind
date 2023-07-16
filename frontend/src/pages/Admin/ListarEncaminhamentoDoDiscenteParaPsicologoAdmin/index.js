import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaDeEncaminhamentosDoDiscenteComponente from '../../../Components/ListaDeEncaminhamentosDoDiscenteComponente';
import Usuario from '../../../services/Usuario';

export default function ListarEncaminhamentoDoDiscenteParaPsicologoAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaDeEncaminhamentosDoDiscenteComponente data={Usuario.get_ADMIN()} ></ListaDeEncaminhamentosDoDiscenteComponente>
        </div>

    );
}



