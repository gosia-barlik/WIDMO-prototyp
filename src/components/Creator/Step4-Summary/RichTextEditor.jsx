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
  const { searchedPosition, salaryTo, salaryFrom, salaryTime, salaryType, salaryContract, aboutCompany } = useSelector((state) => state.stepOneReducer);
  const { responsibilities, copiedQualificationEffects, copiedSelectedText, requirements, educationLevel, studiesName, studiesStage, rodo } = useSelector((state) => state.stepTwoReducer);

  const contentToEdit = `<div className="job-offer-summary" contentEditable="true"> 
<h6> Stanowisko: <span> ${searchedPosition} </span> 
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
 </ul> </span>
</h6>
<h6> Wymagania: <span>
  <ul>
     <li>wykształcenie ${educationLevel} ${studiesName} ${studiesStage}
    </li>
    ${requirements.map((requirement) =>
    `<li key=${requirement}>${requirement}</li>`)}</ul></span>
</h6>
<h6> O firmie: <span> ${aboutCompany} </span>
</h6>
<h6> Przetwarzanie 
 danych: <p className="summary-p"> ${rodo} </p>
</h6>
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
