import React from "react";
import './styles.css'
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import ToobarPublica from "../../Publica/ToobarPublica";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { RadioButton } from 'primereact/radiobutton';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

export default function MateriaisOnline() {

    const cities = [
        { name: 'Depresão', code: 'NY' },
        { name: 'Ansiedade', code: 'RM' },
        { name: 'Suicidio', code: 'LDN' },
        { name: 'Outubro Rosa', code: 'IST' },
        { name: 'Biporalidade', code: 'PRS' }
    ];

    const [city, setCity] = useState('Ansiedade');

    const history = useHistory();

    const [value, setValue] = useState();

    return (

        <div> <ToobarPublica></ToobarPublica>

            <Card title="GERENCIA DE MATERIAIS"></Card>
            <div>
                <Card className="" >
                    <h5>CATEGORIA</h5>
                    {/* <Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="TODAS" /> */}
                    <RadioButton className="p-mt-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Depresão</label>
                    <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Ansiedade</label>
                    <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Suicidio</label>
                    <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Outubro Rosa</label>
                    <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Biporalidade</label>
                    <RadioButton className="p-ml-3" value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
                    <label>Bulling</label>
                </Card>

                <Card>
                    <div className='' style={{ height: '100%' }}  >
                        <div className="card">
                            <DataTable value={cities} responsiveLayout="scroll">

                                <Column field="" 
                                // header="Depresão"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button onClick={() => { history.push('/material/Viewer') }} >VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Açoes"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>
                                <Column field="" 
                                // header="Ansiedade"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Suicidio"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Outubro Rosa"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Biporalidade"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Toxicidade social"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Bulling"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                <Column field="" 
                                // header="Açoes"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Card>
                                                        <div>
                                                            <img src={img1} alt="logo" style={{ height: '10.75em', width: 'auto' }} />
                                                            <h7>Meu titulo das cataratas do niagua</h7>
                                                            <Button>VISUALIZAR</Button>
                                                        </div>
                                                    </Card>




                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column>

                                {/* <Column field="" header="Açoes"
                                    body={
                                        <div>
                                            <Card>
                                                <div>
                                                    <Button className="p-mb-5  p-mr-3 p-col-0" label="" icon="pi pi-file" />
                                                    <Button className="p-mb-5  p-mr-3 p-col-0" label="" icon="pi pi-pencil" />
                                                    <Button className="p-mb-5  p-mr-3 p-col-0 p-button-danger" label="" icon="pi pi-trash" />
                                                </div>
                                            </Card>
                                        </div>

                                    }
                                ></Column> */}
                            </DataTable>
                        </div>
                    </div>
                </Card>
            </div>

        </div>

    );
}