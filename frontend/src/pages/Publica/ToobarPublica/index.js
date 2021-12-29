import React from 'react';
import './styles.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logoImg from './assets/favicon.ico';

export default function ToobarPublica(){

    //<Button icon= {image} className="p-mr-2" />
    const image = <img src={logoImg} alt="logo"></img>

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );


    const leftContents = (
        <React.Fragment>
        
         <Button icon="pi pi-home" className="p-mr-2" />
        <Button icon="pi pi-file pi-file" className="p-mr-2" />
        <Button icon="pi pi-users" className="p-button-success p-mr-2" />
        <Button icon="pi pi-question" className="p-button-danger" />
    </React.Fragment>
    );
    
    return(
        <div>
            <Toolbar left={leftContents} />
        </div>
        
        
    );
    
}