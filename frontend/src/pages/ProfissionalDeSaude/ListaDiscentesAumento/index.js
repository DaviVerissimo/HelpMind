import React from 'react';
import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';
import ListaDiscentesAumentoComponente from '../../../Components/ListaDiscentesAumentoComponente';
import Usuario from '../../../services/Usuario';

export default function ListaDiscentesComAumentoProfSaude() {

    return (
        <div> 
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ListaDiscentesAumentoComponente data={Usuario.get_PROFISSIONAL_DE_SAUDE()} ></ListaDiscentesAumentoComponente>
        </div>
    )
}
