import React from 'react';
import './styles.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logoImg from './assets/favicon.ico';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ToobarDiscente() {

    var altura = window.screen.height;
    var largura = window.screen.width;
    // console.log(altura)
    // console.log(largura)

    const image = <img src={logoImg} alt="logo"></img>
    const history = useHistory();
    const createIcon = (className) => {
        return <i className={className} style={{ 'fontSize': '2em' }}></i>
    }

    const rightContents = (
        <React.Fragment>
            {/* <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" /> */}
            <div className='p-grid p-col' style={{ padding: '0em' }} >
                <Button icon={createIcon("pi pi-comments")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Contatos' />
                <Button icon={createIcon("pi pi-file-o")} className="p-button-outlined p-button-lg p-mr-3 p-col" style={{ height: '4.00em', width: 'auto' }} label='Inventario' onClick={() => { history.push('/discente/EscolherQuestionariosDiscente') }} />
                {/* <Button icon={createIcon("pi pi-users")} className="p-button-outlined p-button-lg p-mr-3 p-col" style={{ height: '4.00em', width: 'auto' }} label='Discentes' /> */}
                <Button icon={createIcon("pi pi-bell")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Reportes' onClick={() => { history.push('/discente/Reportes') }} />
                <Button icon={createIcon("pi pi-user")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Discente' onClick={() => { history.push('/discente/Perfil') }} />
            </div>
        </React.Fragment>
    );

    const leftContents = (
        <React.Fragment>
            <div className='p-grid p-col' style={{ padding: '1em' }}>
                <div style={{}} className='p-col-1 p-mr-3'  >
                    <img src={logoImg} alt="logo" style={{ height: '3.75em', width: 'auto' }} />

                </div>
                <Button icon={createIcon("pi pi-home")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Home' onClick={() => { history.push('/') }} />
                <Button icon={createIcon("pi pi-box")} className="p-button-outlined p-button-lg  p-mr-3 p-col" label='Materiais online' onClick={() => { history.push('/publica/MateriaisOnline') }} />
                {/* <Button icon={createIcon("pi pi-heart-fill")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Simular Questionario' /> */}
                <Button icon={createIcon("pi pi-info-circle")} className="p-button-outlined p-button-lg  p-mr-3 p-col" label='Quem Somos' onClick={() => { history.push('/publica/QuemSomos') }} />
            </div>
        </React.Fragment>
    );

    const leftContentsMobile = (
        <React.Fragment>
            <div className='' style={{ padding: '1em' }}>
                {/* <div style={{}} className='p-col-1 p-mr-3'  >
                    <img src={logoImg} alt="logo" style={{ height: '3.75em', width: 'auto' }} />

                </div> */}
                <Button icon={createIcon("pi pi-home")} className="p-button-outlined p-button-lg p-mr-3 p-col " label='Home' onClick={() => { history.push('/') }} />
                <Button icon={createIcon("pi pi-box")} className="p-button-outlined p-button-lg p-mr-3 p-col  " label='Materiais online' onClick={() => { history.push('/publica/MateriaisOnline') }} />
                {/* <Button icon={createIcon("pi pi-heart-fill")} className="p-button-outlined p-button-lg p-mr-3 p-col" label='Simular Questionario' /> */}
                <Button icon={createIcon("pi pi-info-circle")} className="p-button-outlined p-button-lg p-mr-3 p-col " label='Quem Somos' onClick={() => { history.push('/publica/QuemSomos') }} />
                <Button icon={createIcon("pi pi-comments")} className="p-button-outlined p-button-lg p-mr-3 p-col " label='Contatos' />
                <Button icon={createIcon("pi pi-file-o")} className="p-button-outlined p-button-lg p-mr-3 p-col " label='Inventario' onClick={() => { history.push('/discente/EscolherQuestionariosDiscente') }} />
                {/* <Button icon={createIcon("pi pi-users")} className="p-button-outlined p-button-lg p-mr-3 p-col" style={{ height: '4.00em', width: 'auto' }} label='Discentes' /> */}
                <Button icon={createIcon("pi pi-bell")} className="p-button-outlined p-button-lg p-mr-3 p-col  " label='Reportes' onClick={() => { history.push('/discente/Reportes') }} />
                <Button icon={createIcon("pi pi-user")} className="p-button-outlined p-button-lg p-mr-3 p-col  " label='Discente' onClick={() => { history.push('/discente/Perfil') }} />
            </div>
        </React.Fragment>
    );

    const rightContentsMobile = (
        <React.Fragment>
            {/* <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" /> */}
            <div style={{}} className='p-col-1 p-mr-3'  >
                <img src={logoImg} alt="logo" style={{ height: '10.75em', width: 'auto' }} />

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