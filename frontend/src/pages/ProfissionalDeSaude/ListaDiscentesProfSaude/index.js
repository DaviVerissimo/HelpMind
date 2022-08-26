import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaDiscentesComponente from '../../../Components/ListaDiscentesComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesProfSaude() {

    return (
        <div> 
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaDiscentesComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaDiscentesComponente>

        </div>
    )
}
