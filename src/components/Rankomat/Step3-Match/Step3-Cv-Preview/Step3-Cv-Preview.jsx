import React from "react";
import parse from "html-react-parser";

export default function CvPreview (props) {

    return (
      <div className='end-text' >
        <div className='end-text-item'>
          <div>
            <p id='correctedTextLabel'></p>
            <div className='corrected-text' style={{whiteSpace: "pre-line", lineHeight: 2}}>{parse(props.text)}</div>
          </div>
        </div>
      </div>
    );
 
}