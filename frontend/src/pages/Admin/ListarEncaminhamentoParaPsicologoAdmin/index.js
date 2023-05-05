import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaDeEncaminhamentosComponente from '../../../Components/ListaDeEncaminhamentosComponente';
import Usuario from '../../../services/Usuario';

export default function ListarEncaminhamentoParaPsicologoAdmin() {

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaDeEncaminhamentosComponente data={Usuario.get_ADMIN()} ></ListaDeEncaminhamentosComponente>
        </div>

    );
}



