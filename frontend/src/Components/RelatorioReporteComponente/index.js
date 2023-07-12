import React from 'react';
import { Card } from 'primereact/card';

const RelatorioReporteComponente = ( props ) => {
  const estatisticaReporte = props.estatisticas;
  return (
    <div>
      {estatisticaReporte.map((estatistica, index) => (
        <div key={index}>
          <div style={{ display: 'flex' }}>
            <Card subTitle='CURSO' style={{ flex: '40%' }}>
              <h2>{estatistica.curso}</h2>
            </Card>
            <Card subTitle='Reportado' style={{ flex: '30%' }}>
              <h2>{estatistica.quantidadeReportado}</h2>
            </Card>
            <Card subTitle='Reportante' style={{ flex: '30%' }}>
              <h2>{estatistica.quantidadeReportante}</h2>
            </Card>
            <Card subTitle='Tentativa de Suicídio' style={{ flex: '30%' }}>
              <h2>{estatistica.quantidadeTentativaSuicidio}</h2>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatorioReporteComponente;
