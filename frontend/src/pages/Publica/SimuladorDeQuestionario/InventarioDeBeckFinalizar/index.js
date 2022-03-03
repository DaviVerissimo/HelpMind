import { Card } from 'primereact/card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import ToobarDiscente from '../../../Discente/ToobarDiscente';

export default function InventarioDeBeckFinalizar() {
    
    const [checked, setChecked] = useState();
    
    return (
        <div> <ToobarDiscente></ToobarDiscente>
            <div>
                <Card title='INVENTÁRIO DE DEPRESSÃO DE BECK (BDI) FINALIZAÇÂO' ></Card>
            </div>

            <div>
                <Card>
                <Card className="p-col-5 " >
                    <Checkbox name='New York' name="city" value="Chicago" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    <label > Declaro estar ciente e concordo com o inteiro teor da aplicação deste inventário, inclusive
                        tendo conhecimento que haverá o acesso aos resultados, interpretação e ações de promoção, prevenção e
                        encaminhamentos pelos  profissionais de saúde do campus de origem  aos dados e diante da necessidade
                        encaminhamento a rede externa de saúde mental. Lembrando que seus dados serão de proteção e sigilo dos
                        profissionais de saúde do campus e psicólogo interno e externo. </label>
                </Card>
                </Card>
            </div>
            <div>
                <Card title='FINALIZE PARA ENVIAR' className='p-col-15'>

                    <div>
                        <Card>
                            <Button className="p-mb-3 p-col-1 p-button-secondary  " style={{ right: '10px' }} label="CANCEL" />
                            <Button className="p-mb-3 p-col-2" label="FINALIZAR" />
                        </Card>
                    </div>

                    <Card className='' >
                        <div className="home-container p-grid p-justify-center p-align-center p-col-14 " style={{ height: '100%' }} >

                            <div className="div-listbox p-col-2 " >

                            </div>

                        </div>
                    </Card>
                </Card>
            </div>

        </div>

    );

}