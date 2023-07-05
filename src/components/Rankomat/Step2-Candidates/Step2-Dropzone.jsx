import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setResumes } from "../../../store/actions/rankomatActions/rankomatStepTwoActions";
import { setAll } from "../../../store/actions/rankomatActions/rankomatStepThreeActions";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  fontSize: "12px",
  backgroundColor: "white",
};


export default function Step2Dropzone(props) {
  const dispatch = useDispatch();
  const { resumes } = useSelector((state) => state.rankomatStepTwoReducer);
  const onSetResumes = (newResumes) => {
    dispatch(setResumes(newResumes));
    dispatch(setAll(newResumes));
  };

  // const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: "image/*, .doc, .docx, .pdf",
    onDrop: (acceptedFiles) => {
      let i = 0;
      acceptedFiles.forEach((file) => (file.id = i++));
      onSetResumes(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = resumes.map((resume) => (
    <div style={thumb} key={resume.name}>
      <div style={thumbInner}>
        <img src={resume.preview} style={img} alt={resume.name} />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    resumes.forEach((resume) => URL.revokeObjectURL(resume.preview));
  }, [resumes]);

  return (
    <section className='container' style={{ marginTop: "40px" }}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Button className='button-outlined' variant='outlined' onClick={open}>
          Wybierz pliki
        </Button>
        <p style={{ fontSize: "12px" }}>lub przeciagnij i upuść pliki tutaj</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>

      
    </section>
  );
}
