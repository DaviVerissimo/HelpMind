import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaConversasComponente from '../../../Components/ListarConversasComponente';
import Usuario from '../../../services/Usuario';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListaConversasAdminPrivada() {
    const  privado = true;
    console.log(privado)

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <ListaConversasComponente
                data={Usuario.get_ADMIN()}
                privado={privado}
            ></ListaConversasComponente>
        </div>
    );
}



