import { React } from "react";
import Typography from "@mui/material/Typography";

export default function CvQualifications(props) {
  return (
    <div className='cv-qualifications'>
      <Typography variant='subtitle1' style={{ fontWeight: "600" }}>
        Umiejętności pasujące do ogłoszenia o pracę
      </Typography>
      {props.professionalSkills.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant='subtitle2' style={{ color: "#6900ff" }}>
            Umiejętności twarde
          </Typography>
          <div className='cv-qualifications-item'>
            {props.professionalSkills.map((entity) => (
              <div
                className={`cv-qualifications-item-${entity.label}`}
                key={entity.start_char}>
                {entity.text}
                {/* <div className={`cv-qualifications-label-${entity.label}`}>{entity.label}</div> */}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.softSkills.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant='subtitle2' style={{ color: "#c500ff" }}>
            Umiejętności miękkie
          </Typography>
          <div className='cv-qualifications-item'>
            {props.softSkills.map((entity) => (
              <div
                className={`cv-qualifications-item-${entity.label}`}
                key={entity.start_char}>
                {entity.text}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.itSkills.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant='subtitle2' style={{ color: "#01aea8" }}>
            Umiejętności IT
          </Typography>
          <div className='cv-qualifications-item'>
            {props.itSkills.map((entity) => (
              <div
                className={`cv-qualifications-item-${entity.label}`}
                key={entity.start_char}>
                {entity.text}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.languageSkills.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant='subtitle2' style={{ color: "#00bdee" }}>
            Umiejętności językowe
          </Typography>
          <div className='cv-qualifications-item'>
            {props.languageSkills.map((entity) => (
              <div
                className={`cv-qualifications-item-${entity.label}`}
                key={entity.start_char}>
                {entity.text}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.education.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant='subtitle2' style={{ color: "#5d7dc9" }}>
            Edukacja
          </Typography>
          <div className='cv-qualifications-item'>
            {props.education.map((entity) => (
              <div
                className={`cv-qualifications-item-${entity.label}`}
                key={entity.start_char}>
                {entity.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
