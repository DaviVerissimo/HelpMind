import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Periodo from '../Periodo';
import Cursos from '../Cursos';
import Semestre from '../Semestre';
import Campus from '../Campus';
import { Toast } from 'primereact/toast';
import EstatisticaService from '../../services/EstatisticaService';

export default function ConsultarEstatisticas(props) {

    const history = useHistory();
    const toast = useRef(null);
    const [carregamentoCompleto, setCarregamentoCompleto] = useState(false);
    const [carregamentoAnsiedade, setCarregamentoAnsiedade] = useState(false);
    const [carregamentoDepressao, setCarregamentoDepressao] = useState(false);

    const showInfo = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Aguarde!',
            detail: 'Processando....',
            life: 60000
        });
    };

    const showError = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Um erro inesperado acontesceu',
            detail: 'Tente outra hora.',
            life: 60000
        });
    };

    function prepararConsulta() {
        var campus = 'All';
        var curso = 'All';
        var periodo = 'All';
        var semestre = 'All';

        if (localStorage.getItem('campusComponente') != null && localStorage.getItem('campusComponente') != undefined && localStorage.getItem('campusComponente') != "undefined") {
            campus = localStorage.getItem('campusComponente');
        }

        if (localStorage.getItem('cursoComponente') != null && localStorage.getItem('cursoComponente') != undefined && localStorage.getItem('cursoComponente') != "" && localStorage.getItem('cursoComponente') != "undefined") {
            curso = localStorage.getItem('cursoComponente');
        }

        if (localStorage.getItem('periodoComponente') != null && localStorage.getItem('periodoComponente') != undefined && localStorage.getItem('periodoComponente') != "undefined") {
            periodo = localStorage.getItem('periodoComponente');
        }

        if (localStorage.getItem('SemestreComponente') != null && localStorage.getItem('SemestreComponente') != undefined && localStorage.getItem('SemestreComponente') != "undefined") {
            semestre = localStorage.getItem('SemestreComponente');
        }

        console.log(campus);

        const consultaEstatistica = {
            "campus": campus,
            "curso": curso,
            "periodo": periodo,
            "semestre": semestre
        }
        return consultaEstatistica;
    }

    const submeter = async () => {
        localStorage.setItem('rota', '/ansiedadeDepressaoGrafico')
        showInfo();
        const consultaEstatistica = prepararConsulta();

        try {
            const responseAnsiedade = await EstatisticaService.getByAnsiedade(consultaEstatistica);
            var estatisticaAnsiedade = responseAnsiedade.data;
            var estatisticaAnsiedadeStr = JSON.stringify(estatisticaAnsiedade);
            localStorage.setItem("estatisticaAnsiedade", estatisticaAnsiedadeStr);

            if (responseAnsiedade.status >= 200 && responseAnsiedade.status < 300) {
                setCarregamentoAnsiedade(true);
            }
        } catch (error) {
            showError()
        }

        try {
            const responseDepressao = await EstatisticaService.getByDepressao(consultaEstatistica);
            var estatisticaDepressao = responseDepressao.data;
            var estatisticaDepressaoStr = JSON.stringify(estatisticaDepressao);
            localStorage.setItem("estatisticaDepressao", estatisticaDepressaoStr);

            if (responseDepressao.status >= 200 && responseDepressao.status < 300) {
                setCarregamentoDepressao(true);
            }
        } catch (error) {
            showError()
        }
    };

    const submeterParaListagem = async () => {
        localStorage.setItem('rota', '/listarEstatisticas')
        showInfo();
        const consultaEstatistica = prepararConsulta();

        try {
            const responseAnsiedade = await EstatisticaService.getByAnsiedade(consultaEstatistica);
            var estatisticaAnsiedade = responseAnsiedade.data;
            var estatisticaAnsiedadeStr = JSON.stringify(estatisticaAnsiedade);
            localStorage.setItem("estatisticaAnsiedade", estatisticaAnsiedadeStr);

            if (responseAnsiedade.status >= 200 && responseAnsiedade.status < 300) {
                setCarregamentoAnsiedade(true);
            }
        } catch (error) {
            showError()
        }

        try {
            const responseDepressao = await EstatisticaService.getByDepressao(consultaEstatistica);
            var estatisticaDepressao = responseDepressao.data;
            var estatisticaDepressaoStr = JSON.stringify(estatisticaDepressao);
            localStorage.setItem("estatisticaDepressao", estatisticaDepressaoStr);

            if (responseDepressao.status >= 200 && responseDepressao.status < 300) {
                setCarregamentoDepressao(true);
            }
        } catch (error) {
            showError()
        }
    };

    useEffect(() => {
        if (carregamentoAnsiedade && carregamentoDepressao) {
            setCarregamentoCompleto(true);
        }
    }, [carregamentoAnsiedade, carregamentoDepressao]);

    useEffect(() => {
        if (carregamentoCompleto) {
            const logado = props.logado;
            const rota = localStorage.getItem('rota');
            history.push('/' + logado + rota);
        }
    }, [carregamentoCompleto]);
    return (
        <div>
            <div >
                <Card title="CONSULTAR ESTATÍSTICAS"></Card>
                <Toast ref={toast} />
                <Card>
                    <Button
                        icon='pi pi-chart-bar'
                        label="ACESSAR GRÁFICOS"
                        onClick={submeter}
                    />
                    <Button
                        className='p-mt-3 p-ml-3'
                        icon='pi pi-chart-line'
                        label="LISTAR ESTÁTISTICAS"
                        onClick={submeterParaListagem}
                    />
                </Card>
                <Card >
                    <Card subTitle='SEMESTRE'>
                        <Semestre></Semestre>
                    </Card>
                    <Card subTitle='CAMPUS'>
                        <Campus valido={true} ></Campus>
                    </Card>
                    <Card subTitle='CURSO'>
                        <Cursos></Cursos>
                    </Card>
                    <Card subTitle='PERIODO'>
                        <Periodo></Periodo>
                    </Card>

                </Card>
            </div>
        </div>

    );
}
