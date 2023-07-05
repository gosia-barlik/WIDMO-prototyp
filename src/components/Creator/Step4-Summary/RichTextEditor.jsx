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
  const {
    searchedPosition,
    jobOffer
  } = useSelector((state) => state.stepOneReducer);
  const {
    responsibilitiesToHtml,
    requirementsToHtml,
    benefitsToHtml,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
  } = useSelector((state) => state.stepTwoReducer);

  const {
    rodo,
    applicationWay,
    applicationExpectation,
    applicationDate,
    contactInformation,
  } = useSelector((state) => state.stepThreeReducer);

  const education =
    !studiesName ?
    `<h6> Wykształcenie: </h6>
    <span> ${educationLevel}</span>`:
    `<h6> Wykształcenie: </h6>
    <span> ${educationLevel} ${studiesName}</span>`

  const contentToEdit = `<div className="job-offer-summary" contentEditable="true"> 
<h3>${searchedPosition} 
</h3> 
<h5> ${jobOffer.companyName}
</h5> 
<h6> ${jobOffer.companyDescription} 
</h6> 
<h6> ${jobOffer.salaryFrom} - ${jobOffer.salaryTo} ${jobOffer.salaryType} / ${jobOffer.salaryTime} ${jobOffer.contractType} 
</h6>   
<h6> Zakres obowiązków: <span> 
${responsibilitiesToHtml} </span>
</h6>
<h6> Wymagania: <span>
${requirementsToHtml}</span>
</h6>
${education}

<h6> Benefity: <span>
${benefitsToHtml}</span>
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
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );

  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div>
      <Editor
        defaultEditorState={editorState}
        wrapperClassName='text-editor-wrapper'
        editorClassName='text-editor'
        onEditorStateChange={onEditorStateChange}
        editorStyle={{ lineHeight: "90%" }}
      />
      {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
    </div>
  );
}
