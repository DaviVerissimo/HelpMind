import React from 'react';
import './styles.css'
import { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
//import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import ToobarADM from '../../ADM/ToobarADM';

import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

// export const FileUploadDemo = () => {
//   const [totalSize, setTotalSize] = useState(0);
//   const toast = useRef(null);
//   const fileUploadRef = useRef(null);

//   const onUpload = () => {
//       toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
//   }

//   const onTemplateSelect = (e) => {
//       let _totalSize = totalSize;
//       e.files.forEach(file => {
//           _totalSize += file.size;
//       });

//       setTotalSize(_totalSize);
//   }

//   const onTemplateUpload = (e) => {
//       let _totalSize = 0;
//       e.files.forEach(file => {
//           _totalSize += (file.size || 0);
//       });

//       setTotalSize(_totalSize);
//       toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
//   }

//   const onTemplateRemove = (file, callback) => {
//       setTotalSize(totalSize - file.size);
//       callback();
//   }

//   const onTemplateClear = () => {
//       setTotalSize(0);
//   }

//   const onBasicUpload = () => {
//       toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
//   }

//   const onBasicUploadAuto = () => {
//       toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
//   }

//   const headerTemplate = (options) => {
//       const { className, chooseButton, uploadButton, cancelButton } = options;
//       const value = totalSize/10000;
//       const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

//       return (
//           <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
//               {chooseButton}
//               {uploadButton}
//               {cancelButton}
//               <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
//           </div>
//       );
//   }

//   const itemTemplate = (file, props) => {
//       return (
//           <div className="flex align-items-center flex-wrap">
//               <div className="flex align-items-center" style={{width: '40%'}}>
//                   <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
//                   <span className="flex flex-column text-left ml-3">
//                       {file.name}
//                       <small>{new Date().toLocaleDateString()}</small>
//                   </span>
//               </div>
//               <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
//               <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
//           </div>
//       )
//   }

//   const emptyTemplate = () => {
//       return (
//           <div className="flex align-items-center flex-column">
//               <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
//               <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
//           </div>
//       )
//   }

//   const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
//   const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
//   const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

//   return (
//       <div>
//           <Toast ref={toast}></Toast>

//           <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
//           <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
//           <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

//           <div className="card">
//               <h5>Advanced</h5>
//               <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
//                   emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

//               <h5>Template</h5>
//               <FileUpload ref={fileUploadRef} name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" multiple accept="image/*" maxFileSize={1000000}
//                   onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
//                   headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
//                   chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

//               <h5>Basic</h5>
//               <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

//               <h5>Basic with Auto</h5>
//               <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
//           </div>
//       </div>
//   )
// }

export default function Create() {

  const categorias = [
    { name: 'Depresão', code: 'NY' },
    { name: 'Ansiedade', code: 'RM' },
    { name: 'Suicidio', code: 'LDN' },
    { name: 'Outubro Rosa', code: 'IST' },
    { name: 'Biporalidade', code: 'PRS' }
  ];
  const [categoria, setCategoria] = useState('Ansiedade');
  const [nome, setNome] = useState('');

  return (

    <div> <ToobarADM></ToobarADM>
      <div>
        <Card title='NOVO MATERIAL' >
          <Card>
            <div className=""  >
              <Button className="p-mb-3 p-col-1 p-button-secondary " style={{ right: '10px' }} label="CANCEL" />
              <Button className="p-mb-3 p-col-1" label="SALVAR" onClick={null} />
            </div>
          </Card>
          <Card subTitle='NOME' >
            <InputText className='entradaNome' value={nome} onChange={(e) => setNome(e.target.value)} />
          </Card>
          <Card subTitle='CATEGORIA' >
            <Dropdown className='p-col-10 p-mr-6 ' optionLabel="name" value={categoria} options={categorias} onChange={(e) => setCategoria(e.value)} placeholder="TODAS" />
            <Button className="p-mb-3 p-col-1" label="NOVA CATEGORIA" onClick={null} />
          </Card>
          <Card subTitle='ARQUIVO' >
            {/* <FileUpload className='p-mb-3 p-col-4' ></FileUpload> */}
            <FileUpload name="arquivo" url="/file/upload"  ></FileUpload>
          </Card>
          <Card subTitle='CAPA' >
            <FileUpload></FileUpload>
          </Card>
        </Card>
      </div>

    </div>

  );
}