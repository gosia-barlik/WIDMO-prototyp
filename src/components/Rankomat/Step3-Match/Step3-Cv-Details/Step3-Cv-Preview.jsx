import React from "react";
import parse from "html-react-parser";

export default function CvPreview (props) {

    return (
      <div className='cv-text' >
        <div className='cv-text-item'>
          <div>
            <div className='cv-text' style={{whiteSpace: "pre-line", lineHeight: 2}}>{parse(props.text)}</div>
          </div>
        </div>
      </div>
    );
 
}