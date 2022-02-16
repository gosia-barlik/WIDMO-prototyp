import { React, useState } from "react";
import { useEffect } from "react";

export default function CvDetails(props) {

  return (
    <div className='cv-details'>
      <div className='cv-details-item'>
        {props.response.map((entity) => (
          <div className={`cv-details-item-${entity.label}`} key={entity.start_char} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>{entity.text}<div className={`cv-details-label-${entity.label}`}>{entity.label}</div></div>
        ))}
      </div>
    </div>
  );
}
