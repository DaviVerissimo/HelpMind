import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import ListaDiscentesComponente from '../../../Components/ListaDiscentesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesAdmin() {

    return (
        <div> 
            <ToobarAdmin></ToobarAdmin>
            <ListaDiscentesComponente data={Usuario.get_ADMIN()} ></ListaDiscentesComponente>
        </div>
    )
}
