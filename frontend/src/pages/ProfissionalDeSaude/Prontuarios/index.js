// import { Card } from 'primereact/card';
// import React from 'react';
// import { Button } from 'primereact/button';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import ToobarProfissionalDeSaude from '../ToobarProfissionalDeSaude';

// export default function PRONTUARIOS() {

//     var configBotao = "p-mr-3 p-mt-3";
//     const history = useHistory();

//     return (
//         <div>
//             <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
//             <div>
//                 <Card title='PRONTUÁRIOS ' >
//                     <Card className='p-col-16' >
//                         <div>
//                             <Button
//                                 className={'p-mt-3  p-mr-3'}
//                                 label="NOVO PRONTUÁRIO"
//                                 onClick={() => { history.push('/profissionalDeSaude/parescer') }}
//                             />
//                             <Button
//                                 className={configBotao}
//                                 label="LISTAR PRONTUÁRIOS"
//                                 onClick={() => { history.push('/profissionalDeSaude/listaProntuarios') }}
//                             />
//                         </div>
//                     </Card>
//                 </Card>

//                 <Card title='PARECER PSICÓLOGICO ' >
//                     <Card className='p-col-16' >
//                         <div>
//                             <Button
//                                 label="LISTAR PARECERES PSICÓLOGICOS"
//                                 onClick={() => { history.push('/profissionalDeSaude/listarParescerPsicologico') }}
//                             />
//                         </div>
//                     </Card>
//                 </Card>
//             </div>
//         </div>
//     );
// }