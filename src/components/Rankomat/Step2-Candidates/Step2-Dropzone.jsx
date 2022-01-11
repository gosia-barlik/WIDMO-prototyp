import React from 'react';
import {useDropzone} from 'react-dropzone';

export default function Step2Dropzone(props) {

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:25,
    accept: 'image/jpeg, image/png, application/pdf,.doc,.docx'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path} className='accepted-files'>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path}>
          {file.path}
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone' })} style={{fontSize:"14px"}}>
        <input {...getInputProps()} />
        <p >Kliknij lub przeciągnij i upuść pliki, aby je dodać</p>
        <em>akceptowane formaty: pdf, doc, docx, jpg</em>
      </div>
      <aside style={{fontSize:"14px"}}>
        <h4>Pliki zaakceptowane</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Pliki odrzucone</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

