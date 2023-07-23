import { Card } from 'primereact/card';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import ToobarAdmin from '../ToobarAdmin';
import { Toast } from 'primereact/toast';
import BotaoVoltar from '../../../Components/BotaoVoltar';
import ServidorService from '../../../services/ServidorService';

export default function PerfilServidorConfig() {

    var servidorStr = localStorage.getItem('servidorPerfilEdit');
    const [servidor, setServidor] = useState('');
    const [nome, setNome] = useState('carregando');
    const [email, setEmail] = useState('carregando');
    const textoAddProfsaude = 'ADCIONAR PERMISSÃO COMO PROFISSIONAL DE SAÚDE';
    const textoAddPsicologo = 'ADCIONAR PERMISSÃO COMO PSICÓLOGO';
    const textorRemoveProfsaude = 'REMOVER PERMISSÃO COMO PROFISSIONAL DE SAÚDE';
    const textoRemovePsicologo = 'REMOVER PERMISSÃO COMO PSICÓLOGO';
    const [textoAtualProfSaude, setTextoAtualProfSaude] = useState('');
    const [textoAtualPsicologo, setTextoAtualPsicologo] = useState('');
    const [iconBtnProfSaude, setIconBtnProfSaude] = useState('');
    const [iconBtnPsicologo, setIconBtnPsicologo] = useState('');
    const iconAdd = 'pi pi-plus-circle';
    const iconRemove = 'pi pi-minus-circle';
    const [styleBtnProfSaude, setStyleBtnProfSaude] = useState('');
    const [styleBtnPsicologo, setStyleBtnPsicologo] = useState('');
    const red = 'p-button-danger';

    const [permisaoProfsaude, setPermisaoProfsaude] = useState(true);
    const [permisaoPsicologo, setPermisaoPsicologo] = useState(true);

    const toast = useRef(null);
    
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'ACESSO REMOVIDO!',
            detail: 'Servidor desautorizado.',
            life: 7000
        });
    }

    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'ACESSO CONCEDIDO!',
            detail: 'Servidor autorizado',
            life: 7000
        });
    }

    useEffect(() => {
        if (servidorStr != null && servidorStr != undefined) {
            setServidor(JSON.parse(servidorStr))
        }

    }, [servidorStr])

    useEffect(() => {
        if (servidor != null && servidor != undefined) {
            setNome(servidor.nome);
            setEmail(servidor.email);
            setPermisaoProfsaude(servidor.permissaoDeAcessoProfissionalDeSaude);
            setPermisaoPsicologo(servidor.permissaoDeAcessoPsicologo);
        }

    }, [servidor])

    useEffect(() => {
        if (permisaoProfsaude) {
            setTextoAtualProfSaude(textorRemoveProfsaude);
            setIconBtnProfSaude(iconRemove);
            setStyleBtnProfSaude(red);
        }
        else {
            setTextoAtualProfSaude(textoAddProfsaude);
            setIconBtnProfSaude(iconAdd);
            setStyleBtnProfSaude('');
        }
        if (permisaoPsicologo) {
            setTextoAtualPsicologo(textoRemovePsicologo);
            setIconBtnPsicologo(iconRemove);
            setStyleBtnPsicologo(red);
        }
        else {
            setTextoAtualPsicologo(textoAddPsicologo);
            setIconBtnPsicologo(iconAdd);
            setStyleBtnPsicologo('');
        }

    }, [permisaoProfsaude, permisaoPsicologo])

    function inverterpermissaoProfsaude() {
        if (permisaoProfsaude) {
            ServidorService.getRemoverAcessoProfSaude(servidor.id);
            setPermisaoProfsaude(false);
            showError();

        } else {
            ServidorService.getConcederAcessoProfSaude(servidor.id);
            setPermisaoProfsaude(true);
            showSuccess();
        }
    }

    function inverterpermissaoPsicologo() {
        if (permisaoPsicologo) {
            ServidorService.getRemoverAcessoPsicologo(servidor.id);
            setPermisaoPsicologo(false);
            showError();
        } else {
            ServidorService.getConcederAcessoPsicologo(servidor.id);
            setPermisaoPsicologo(true);
            showSuccess();
        }
    }

    const btnProfsaude = () => {
        var disable = false;
        if(permisaoPsicologo){
            disable = true;
        }
        return <Button
            className={styleBtnProfSaude}
            label={textoAtualProfSaude}
            icon={iconBtnProfSaude}
            disabled={disable}
            onClick={inverterpermissaoProfsaude}
        ></Button>
    }

    const btnPsicologo = () => {
        var disable = false;
        if(permisaoProfsaude){
            disable = true;
        }
        return <Button
            className={styleBtnPsicologo}
            label={textoAtualPsicologo}
            icon={iconBtnPsicologo}
            disabled={disable}
            onClick={inverterpermissaoPsicologo}
        ></Button>
    }

    return (
        <div>
            <ToobarAdmin></ToobarAdmin>
            <Toast ref={toast} />
            <Card title='PERFIL DO SERVIDOR' >
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card
                    title='NOME'
                    subTitle={nome}
                >
                </Card>
                <Card
                    title='EMAIL'
                    subTitle={email}>

                </Card>
                <Card
                    title='PROFISSIONAL DE SAÚDE'>
                    {btnProfsaude()}
                </Card>
                <Card
                    title='PSICÓLOGO'>
                    {btnPsicologo()}
                </Card>
                <div>

                </div>
            </Card>

        </div>
    );
}