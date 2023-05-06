import React from 'react';
import './styles.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logoImg from '../../../assets/favicon.ico';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import FotoPerfil from '../../../Components/FotoPerfil';
import NomePerfil from '../../../Components/NomePerfil';

export default function ToobarPsicologo() {

    var altura = window.screen.height;
    var largura = window.screen.width;
    const history = useHistory();
    const createIcon = (className) => {
        return <i className={className} style={{ 'fontSize': '2em' }}></i>
    }

    const rightContents = (
        <React.Fragment>
            <div className='p-grid p-col' style={{ padding: 'em' }} >
                <NomePerfil></NomePerfil>
                <FotoPerfil></FotoPerfil>
            </div>
        </React.Fragment>
    );

    const leftContents = (
        <React.Fragment>

            <div className='p-grid p-col' style={{ padding: '1em' }}>
                <div style={{}} className='p-col-1 p-mr-3'  >
                    <img src={logoImg} alt="logo" style={{ height: '3.75em', width: 'auto' }} />

                </div>
                {/* <Button icon={createIcon("pi pi-home")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Home' onClick={() => { history.push('/psicologo/home') }} /> */}
                <Button
                    icon={createIcon("pi pi-box")}
                    className="p-button-outlined p-button-lg  p-mr-3 p-col"
                    label='Materiais'
                    onClick={() => { history.push('/psicologo/materiaisOnline') }}
                />
                {/* <Button icon={createIcon("pi pi-heart-fill")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Simular Questionario' /> */}
                <Button
                    icon={createIcon("pi pi-comments")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Contatos'
                    onClick={() => { history.push('/psicologo/Contatos') }}
                />
                <Button
                    icon={createIcon("pi pi-users")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    style={{ height: '4.00em', width: 'auto' }}
                    label='Discentes'
                    onClick={() => { history.push('/psicologo/ListaDiscentes') }}
                />
                <Button
                    icon={createIcon("pi pi-file")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Parescer psicológico'
                    onClick={() => { history.push('/psicologo/parecereres') }}
                />
                <Button
                    icon={createIcon("pi pi-bell")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Reportes'
                    onClick={() => { history.push('/psicologo/Reportes') }}
                />
                <Button
                    icon={createIcon("pi pi-chart-line")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Estatísticas'
                    onClick={() => { history.push('/psicologo/consultarEstatisticas') }}
                />
                <Button
                    icon={createIcon("pi pi-user")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Psicólogo'
                    onClick={() => { history.push('/psicologo/perfil') }}
                />
            </div>
        </React.Fragment>
    );

    const leftContentsMobile = (
        <React.Fragment>
            <div className='' style={{ padding: '1em' }}>
                <Button
                    icon={createIcon("pi pi-home")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Home'
                    onClick={() => { history.push('/psicologo/home') }}
                />
                <Button
                    icon={createIcon("pi pi-box")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg  p-mr-3 p-mt-3 p-col"
                    label='Materiais online'
                    onClick={() => { history.push('/psicologo/materiaisOnline') }}
                />
                {/* <Button icon={createIcon("pi pi-heart-fill")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Simular Questionario' /> */}
                <Button
                    icon={createIcon("pi pi-info-circle")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg  p-mr-3 p-mt-3 p-col"
                    label='Quem Somos'
                    onClick={() => { history.push('/psicologo/quemSomos') }}
                />
                <Button
                    icon={createIcon("pi pi-comments")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3  p-mt-3 p-col"
                    label='Contatos'
                    onClick={() => { history.push('/psicologo/Contatos') }}
                />
                <Button
                    icon={createIcon("pi pi-users")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Discentes'
                    onClick={() => { history.push('/psicologo/ListaDiscentes') }}
                />
                <Button
                    icon={createIcon("pi pi-file")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Parescer psicológico'
                    onClick={() => { history.push('/psicologo/parecereres') }}
                />
                <Button
                    icon={createIcon("pi pi-bell")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Reportes'
                    onClick={() => { history.push('/psicologo/Reportes') }}
                />
                <Button
                    icon={createIcon("pi pi-chart-line")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Estatísticas'
                    onClick={() => { history.push('/psicologo/consultarEstatisticas') }}
                />
                <Button
                    icon={createIcon("pi pi-user")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-mt-3 p-col"
                    label='Psicólogo'
                    onClick={() => { history.push('/psicologo/perfil') }}
                />
                <FotoPerfil></FotoPerfil>
                <NomePerfil></NomePerfil>
            </div>
        </React.Fragment>
    );

    const rightContentsMobile = (
        <React.Fragment>
            <div style={{}} className='p-col-1 p-mr-3'  >
                <img src={logoImg} alt="logo" style={{ height: '8.05em', width: 'auto' }} />
            </div>
        </React.Fragment>
    );

    if (largura < 640) {
        return (
            <div className=''>
                <Toolbar right={leftContentsMobile} left={rightContentsMobile} />
            </div>
        );
    }
    else {
        return (
            <div className='p-flex'>
                <Toolbar left={leftContents} right={rightContents} />
            </div>
        );
    }

}