import React from 'react';
import ToobarAdmin from '../ToobarAdmin';
import PerfilDiscenteDetalhadoComponente from '../../../Components/PerfilDiscenteDetalhadoComponente';
import Usuario from '../../../services/Usuario';

export default function PerfilDiscenteDetalhadoAdmin() {
    
    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <PerfilDiscenteDetalhadoComponente data={Usuario.get_ADMIN()} ></PerfilDiscenteDetalhadoComponente>
        </div>
    );
}