import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../../services/ProductService';
import MaterialService from '../../../../services/MaterialService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import ToobarAdmin from '../../ToobarAdmin';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import BotaoVoltar from '../../../../Components/BotaoVoltar';
import URL from '../../../../services/URL';

export default function GerenciaMaterial() {

    var largura = window.screen.width;
    const history = useHistory();
    var btnDeleteTexto = 'DELETE'
    var configBtnDelete = "p-button-danger ";
    var largura = window.screen.width;

    if (largura < 640) {
        btnDeleteTexto = ''
        configBtnDelete = "p-button-danger p-button-rounded ";

    }

    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    let emptyMaterial = {
        id: null,
        nome: '',
        categoria: null,
        nomeDoArquivo: ''
    };

    const [products, setProducts] = useState(null);
    const [materiais, setMateriais] = useState([])
    const allMaterial = () => {
        MaterialService.getMaterial().then((response) => {
            setMateriais(response.data)
        });
    };
    {
        materiais.map((material, key) => {
        })

    }

    useEffect(() => {
        allMaterial()

    }, [])

    const [productDialog, setProductDialog] = useState(false);
    const [deleteMaterialDialog, setDeleteMaterialDialog] = useState(false);
    const [deleteAllMaterialDialog, setDeleteAllMaterialDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [material, setMaterial] = useState(emptyMaterial);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteMaterialDialog(false);
    }

    const hideDeleteAllProductDialog = () => {
        setDeleteAllMaterialDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    }

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteMaterialDialog(true);
    }

    const download = (material) => {
        setProduct(material);
        window.open(URL.getDominio() + '/file/files/' + material.nomeDoArquivo);
    }

    const deleteMaterial = () => {

        const headers = {
            'headers': {
                'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                'Content-Type': 'application/json'
            }
        }

        axios.post(URL.getDominio() + "/material/removerMaterial/", material.id, headers)
            .then(Response => { })
            .catch(error => console.log(error))
        allMaterial();

        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'O matérial ' + material.nome + ' foi deletado! RECARREGUE PARA VER MUDANÇAS.', life: 5000 });
        setDeleteMaterialDialog(false);
        allMaterial();
    }

    const deleteAllMaterial = () => {

        const headers = {
            'headers': {
                'Authorization': 'Bearer ' +  localStorage.getItem('token') ,
                'Content-Type': 'application/json'
            }
        }

        axios.get(URL.getDominio() + "/material/removerAllMaterialAllFiles/", headers)
            .then(Response => { })
            .catch(error => console.log(error))
        allMaterial();

        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Todos os matériais foram deletados! RECARREGUE PARA VER MUDANÇAS.', life: 5000 });
        setDeleteAllMaterialDialog(false);
        allMaterial();
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            const importedData = data.map(d => {
                d = d.split(',');
                const processedData = cols.reduce((obj, c, i) => {
                    c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
                    obj[c] = d[i].replace(/['"]+/g, '');
                    (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData['id'] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _product = { ...product };
        _product['category'] = e.value;
        setProduct(_product);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const direita = () => {
        return (
            <React.Fragment>
                
                <Button label="APAGAR TODOS OS MATÉRIAIS" icon="pi pi-trash" className="  p-button-danger p-mr-3" onClick={deletarAll} />
                <Button label="NOVO MATERIAL" icon="pi pi-plus" className="" onClick={() => { history.push('/Admin/material/create') }} />
            </React.Fragment>
        )
    }
    const esquerda = () => {
        return (
            <React.Fragment>
                {/* <Button label="NOVO BOTÂO" icon="pi pi-plus" className="p-mt-1" onClick={() => { history.push('/Admin/material/create') }} /> */}
            </React.Fragment>
        )
    }



    const imageBodyTemplate = (rowData) => {
        return <img src={`images/product/${rowData.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button className={configBtnDelete} label={btnDeleteTexto} icon='pi pi-trash' onClick={() => deletar(rowData)} ></Button>
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">pesquisar por materiais</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteMaterialDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteMaterial} />
        </React.Fragment>
    );

    const deleteAllMaterialDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteAllProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteAllMaterial} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    let nomeDoArquivo;
    let nomeMaterial;
    let nomeDaCapa;
    let categoria;
    let id;

    let setDadosMaterial = (rowData) => {
        nomeDoArquivo = rowData.nomeDoArquivo;
        nomeMaterial = rowData.nome;
        nomeDaCapa = rowData.nomeDaCapa;
        categoria = rowData.categoria;
        id = rowData.id;

        return rowData.nomeDoArquivo;
    }

    const deletar = (material) => {
        setMaterial(material);
        setDeleteMaterialDialog(true)
    }

    const deletarAll = () => {

        setDeleteAllMaterialDialog(true)
    }

    return (

        <div> <ToobarAdmin></ToobarAdmin>

            <Card title="GERENCIA DE MATERIAIS DE APOIO"></Card>
            <Card>
                <BotaoVoltar></BotaoVoltar>
                
            </Card>
            <div>
                <div>
                    <Card>
                        <div className="datatable-crud-demo">
                            <Toast ref={toast} />

                            <div className="card">
                                <Toolbar className="mb-2" right={direita}
                                ></Toolbar>
                                <DataTable ref={dt} value={materiais} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id"
                                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                                    <Column field="nome" header="Nome" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column field="categoria" header="Categoria" sortable style={{ minWidth: '12rem' }}></Column>
                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                </DataTable>
                            </div>

                            <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                                {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />}
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                                </div>
                                <div className="field">
                                    <label htmlFor="description">Description</label>
                                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                                </div>

                                <div className="field">
                                    <label className="mb-3">Category</label>
                                    <div className="formgrid grid">
                                        <div className="field-radiobutton col-6">
                                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                                            <label htmlFor="category1">Accessories</label>
                                        </div>
                                        <div className="field-radiobutton col-6">
                                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                                            <label htmlFor="category2">Clothing</label>
                                        </div>
                                        <div className="field-radiobutton col-6">
                                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                                            <label htmlFor="category3">Electronics</label>
                                        </div>
                                        <div className="field-radiobutton col-6">
                                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                                            <label htmlFor="category4">Fitness</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="formgrid grid">
                                    <div className="field col">
                                        <label htmlFor="price">Price</label>
                                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                                    </div>
                                    <div className="field col">
                                        <label htmlFor="quantity">Quantity</label>
                                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                                    </div>
                                </div>
                            </Dialog>

                            <Dialog visible={deleteMaterialDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteMaterialDialogFooter}>
                                <div className="confirmation-content">
                                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                    {<span> Deseja realmente deletar esse material: {material.nome} </span>}
                                </div>
                            </Dialog>
                            <Dialog visible={deleteAllMaterialDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteAllMaterialDialogFooter}>
                                <div className="confirmation-content">
                                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                    {<span> DESEJA REALMENTE DELETAR TODOS OS MATERIAIS E SEUS RESPECTIVOS ARQUIVOS? </span>}
                                </div>
                            </Dialog>

                            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                                <div className="confirmation-content">
                                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                    {product && <span>Are you sure you want to delete the selected products?</span>}
                                </div>
                            </Dialog>
                        </div>
                    </Card>
                </div>
            </div>

        </div>

    );
}
