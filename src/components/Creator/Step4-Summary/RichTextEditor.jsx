import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useSelector } from "react-redux";

export default function RichTextEditor(props) {
  const { companyName, searchedPosition, salaryTo, salaryFrom, salaryTime, salaryType, salaryContract, aboutCompany } = useSelector((state) => state.stepOneReducer);
  const { responsibilities, customizedResponsibilities, copiedQualificationEffects, copiedSelectedText, requirements, customizedRequirements, educationLevel, studiesName, studiesStage, benefits, customizedBenefits } = useSelector((state) => state.stepTwoReducer);
  const { rodo, applicationWay, applicationExpectation, applicationDate, contactInformation} = useSelector((state) => state.stepThreeReducer);

  const contentToEdit = `<div className="job-offer-summary" contentEditable="true"> 
<h6> Stanowisko: <span> ${searchedPosition} </span> 
</h6> 
<h6> Nazwa firmy: <span> ${companyName} </span> 
</h6> 
<h6> O firmie: <span> ${aboutCompany} </span> 
</h6> 
<h6> Wynagrodzenie: <span>${salaryFrom} - ${
    salaryTo
  } ${salaryType} / ${salaryTime} ${
    salaryContract
  } </span>
</h6>
<h6> Zakres obowiązków: <span> 
  <ul>
    ${responsibilities.map(
      (responsibility) =>
        `<li key=${responsibility}>${responsibility}</li>`
    )}
 ${copiedQualificationEffects.map(
   (effect) =>
     `<li key=${effect}>${effect}</li>`
 )}
 ${copiedSelectedText.map(
   (text) =>
     `<li key=${text}>${text}</li>`
 )}
 ${customizedResponsibilities.map(
  (responsibility) =>
    `<li key=${responsibility.name}>${responsibility.name}</li>`
)}
 </ul> </span>
</h6>
<h6> Wymagania: <span>
  <ul>
     <li>wykształcenie ${educationLevel} ${studiesName} ${studiesStage}
    </li>
    ${requirements.map((requirement) =>
    `<li key=${requirement}>${requirement}</li>`)}
    ${customizedRequirements.map((requirement) =>
      `<li key=${requirement.name}>${requirement.name}</li>`)}
      </ul></span>
</h6>
<h6> Benefity: <span>
  <ul>
    ${benefits.map((benefit) =>
    `<li key=${benefit}>${benefit}</li>`)}
    ${customizedBenefits.map((benefit) =>
      `<li key=${benefit.name}>${benefit.name}</li>`)}
    </ul></span>
</h6>
<h6> O firmie: <span> ${aboutCompany} </span>
</h6>
<h6> Przetwarzanie 
 danych: <p className="summary-p"> ${rodo} </p>
</h6>
<p>Sposób przesyłania zgłoszeń: <span>${applicationWay} </span></p>
<p>Oczekiwania dotyczące formy zgłoszeń: <span>${applicationExpectation} </span></p>
<p>Termin przesyłania zgłoszeń: <span>${applicationDate} </span></p>
<p>Dane kontaktowe: <span>${contactInformation} </span></p>
</div>`;


  const contentBlock = htmlToDraft(contentToEdit);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div>
      <Editor
        defaultEditorState={editorState}
        wrapperClassName='text-editor-wrapper'
        editorClassName='text-editor'
        onEditorStateChange={onEditorStateChange}
        editorStyle={{lineHeight: '90%'}}
      />
      {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
    </div>
  );
}
