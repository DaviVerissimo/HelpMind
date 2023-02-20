import { Card } from 'primereact/card';
import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ToobarDiscente from '../ToobarDiscente';

export default function Reportes() {

    const history = useHistory();

    return (
        <div>
            <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='REPORTES ' >
                    <Card className='p-col-16' >
                            <Button label="NOVO REPORTE" onClick={() => { history.push('/discente/Reporte') }} />
                            <Button className={'p-ml-3'} label="REPORTES REALIZADOS" onClick={() => { history.push('/discente/ListaReportes') }} />
                    </Card>
                </Card>
            </div>
        </div>
    );
}