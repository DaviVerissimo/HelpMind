import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaDiscentesAumentoComponente from '../../../Components/ListaDiscentesAumentoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesComAumentoAdmin() {

    return (
        <div> 
            <ToobarAdmin></ToobarAdmin>
            <ListaDiscentesAumentoComponente data={Usuario.get_ADMIN()} ></ListaDiscentesAumentoComponente>
        </div>
    )
}
