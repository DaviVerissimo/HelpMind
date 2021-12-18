import React from 'react';
import './styles.css'

let tipoPDF = true;
export default function Viewer(){
    
    if(!tipoPDF){
        return(

            <div>
            <iframe src="https://docs.google.com/gview?url=http://remote.url.tld/path/to/document.doc&embedded=true"
            ></iframe>       
            </div>
        );
    }
    else{
        return(

        <div className='pdf'>
        <embed src="http://infolab.stanford.edu/pub/papers/google.pdf" 
        type="application/pdf"   
        height="1000px" 
        width="1800"/>        
        </div>
        );
    }

}