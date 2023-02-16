import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import BotaoVoltar from '../BotaoVoltar';
import axios from 'axios';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import URL from '../../services/URL';

export default function EscolheGraficoComponente(props) {
    const history = useHistory();
    const aux = 'p-ml-3'
    var valido = true;
    const [campus, setCampus] = useState(null);
    const [campi, setCampi] = useState(null);
    const [campusObrigatorio, setCampusObrigatorio] = useState();
    const [invalid, setInvalid] = useState('p-invalid block');
    var valido = true;

    useEffect(async () => { //campus
        var lista = [];
        const campus = URL.getDominio() + "/curso/listarCampus";
        axios.get(campus)
            .then(Response => {
                var dataCampus = Response.data;
                dataCampus.forEach(item => {
                    lista.push(item);
                });

                lista = lista.map(
                    (elementoCampus) => {
                        return {
                            label: elementoCampus,
                            value: elementoCampus
                        }
                    }
                ).sort((a, b) => a.label.localeCompare(b.label));
                setCampi(lista);

            })
            .catch(error => console.log(error))

    }, []);
    // fazer a validação
    const toast = useRef(null);
    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Não foi possivel Enviar!',
            detail: 'Verifique  se todos os campos foram preenchidos.',
            life: 5000
        });
    }
    async function submeter() {
        if (campus == null || campus == '') {
            setCampusObrigatorio(invalid);
            valido = false;
        }
        if (valido) {
            localStorage.setItem('campusComponente', campus);
            const logado = props.logado;
            history.push('/' + logado + '/ansiedadeDepressaoGrafico');
        }
        else { showError() }

    }

    return (

        <div>
            <Toast ref={toast} />
            <Card title="ESCOLHER GRÁFICO"></Card>
            <Card>
                <Card>
                    <BotaoVoltar></BotaoVoltar>
                </Card>
                <Card subTitle="ANSIEDADE E DEPRESSÃO POR CAMPUS E SEUS RESPECTIVOS CURSOS" >
                    {/* <Campus valido={valido} layout={layout}></Campus> */}
                    <Dropdown className={campusObrigatorio} filter value={campus} options={campi} onChange={(e) => setCampus(e.value)} placeholder="Escolha um campus" />
                    <Button className={aux} icon='pi pi-chart-bar' label="CONSULTAR" onClick={submeter} />
                </Card>
            </Card>
        </div>

    );
}