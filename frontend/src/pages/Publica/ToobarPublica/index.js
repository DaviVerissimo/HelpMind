import React from 'react';
import './styles.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logoImg from '../../../assets/favicon.ico';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import FotoPerfil from '../../../Components/FotoPerfil';
import NomePerfil from '../../../Components/NomePerfil';

export default function ToobarPublica() {

    var largura = window.screen.width;
    const history = useHistory();

    const createIcon = (className) => {
        return <i className={className} style={{ 'fontSize': '2em' }}></i>
    }

    const rightContents = (
        <React.Fragment className='p-col-2' >
            <div className='espaço-perfil' ></div>
            <NomePerfil></NomePerfil>
            <FotoPerfil></FotoPerfil>
        </React.Fragment>
    );

    const leftContents = (
        <React.Fragment>
            <div className='p-grid ' style={{ padding: '1em' }}>
                <div style={{}} className='p-col-1 p-mr-3'  >
                    <img src={logoImg} alt="logo" style={{ height: '3.75em', width: 'auto' }} />

                </div>
                <Button
                    icon={createIcon("pi pi-home")}
                    className="p-button-outlined p-button-lg p-mr-3 p-col"
                    label='Home'
                    onClick={() => { history.push('/') }}
                />
                <Button
                    icon={createIcon("pi pi-box")}
                    className="p-button-outlined p-button-lg  p-mr-3 p-col"
                    label='Materiais online'
                    onClick={() => { history.push('/publica/MateriaisOnline') }}
                />
                <Button
                    icon={createIcon("pi pi-info-circle")}
                    className="p-button-outlined p-button-lg  p-mr-3 p-col"
                    label='Quem Somos'
                    onClick={() => { history.push('/publica/QuemSomos') }}
                />
            </div>
        </React.Fragment>
    );

    const leftContentsMobile = (
        <React.Fragment>
            <div
                style={{ padding: '1em' }}
            >
                <Button
                    icon={createIcon("pi pi-home")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg p-mr-3 p-col p-mt-3"
                    label='Home'
                    onClick={() => { history.push('/') }}
                />
                <Button
                    icon={createIcon("pi pi-box")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg  p-mr-3 p-col p-mt-3"
                    label='Materiais online'
                    onClick={() => { history.push('/publica/MateriaisOnline') }}
                />
                <Button
                    icon={createIcon("pi pi-info-circle")}
                    style={{ width: '100%' }}
                    className="p-button-outlined p-button-lg  p-mr-3 p-col p-mt-3 p-mb-3"
                    label='Quem Somos'
                    onClick={() => { history.push('/publica/QuemSomos') }}
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