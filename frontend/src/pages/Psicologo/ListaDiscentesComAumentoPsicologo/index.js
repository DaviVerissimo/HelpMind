import React from 'react';
import ToobarPsicologo from '../ToobarPsicologo';
import ListaDiscentesAumentoComponente from '../../../Components/ListaDiscentesAumentoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesComAumentoPsicologo() {

    return (
        <div> 
            <ToobarPsicologo></ToobarPsicologo>
            <ListaDiscentesAumentoComponente data={Usuario.get_PSICOLOGO()} ></ListaDiscentesAumentoComponente>
        </div>
    )
}
