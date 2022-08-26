import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaDiscentesComponente from '../../../Components/ListaDiscentesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesPsicologo() {

    return (
        <div> 
            <ToobarPsicologo></ToobarPsicologo>
            <ListaDiscentesComponente data={Usuario.get_PSICOLOGO()} ></ListaDiscentesComponente>
        </div>
    )
}
