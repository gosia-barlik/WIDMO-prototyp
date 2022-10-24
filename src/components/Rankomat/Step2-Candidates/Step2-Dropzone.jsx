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

// CAROUSEL
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

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

      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-10-px'>
        {files.map((file) => (
          <div key={file.path} className='accepted-files'>
            <PictureAsPdfIcon style={{ color: "red", marginLeft: "25px" }} />
            {file.name}
          </div>
        ))}
      </Carousel> */}
    </section>
  );
}
