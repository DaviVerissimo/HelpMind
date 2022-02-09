import React from 'react';
import './styles.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logoImg from './assets/favicon.ico';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ToobarPublica() {

    //<Button icon= {image} className="p-mr-2" />
    const image = <img src={logoImg} alt="logo"></img>
    const history = useHistory();

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    const createIcon = (className) => {
        return <i className={className} style={{ 'fontSize': '2em' }}></i>
    }
    const leftContents = (
        <React.Fragment>

            <div className='p-grid ' style={{ padding: '1em' }}>
                <div style={{}} className='p-col-1 p-mr-3'  >
                    <img src={logoImg} alt="logo" style={{ height: '3.75em', width: 'auto' }} />

                </div>
                <Button icon={createIcon("pi pi-home")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Home' onClick={() => { history.push('/') }}/>
                <Button icon={createIcon("pi pi-box")} className="p-button-outlined p-button-lg  p-mr-3 p-col" label='Materiais online' onClick={() => { history.push('/publica/MateriaisOnline') }} />
                <Button icon={createIcon("pi pi-heart-fill")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Simular Questionario' onClick={() => { history.push('/Publica/SimuladorDeQuestionario/SimulacaoQuestionario') }} />
                <Button icon={createIcon("pi pi-sign-in")} className="p-button-outlined p-button-lg  p-mr-3 p-col" label='Entrar' onClick={() => { history.push('/publica/Login') }} />
            </div>
        </React.Fragment>
    );

    return (
        <div>
            <Toolbar left={leftContents} />
        </div>


    );

}