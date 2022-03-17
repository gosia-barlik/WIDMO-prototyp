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

export default function RichTextEditor(props) {
  const contentToEdit = `<div className="job-offer-summary" contentEditable="true"> 
<h6> Stanowisko: <span> ${props.searchedPosition} </span> 
</h6> 
<h6> Wynagrodzenie: <span>${props.salaryFrom} - ${
    props.salaryTo
  } ${props.salaryType} / ${props.salaryTime} ${
    props.salaryContract
  } </span>
</h6>
<h6> Zakres obowiązków: <span> 
  <ul>
    ${props.responsibilities.map(
      (responsibility) =>
        `<li key=${responsibility}> ${responsibility} 
        </li>`
    )}
 ${props.copiedQualificationEffects.map(
   (effect) =>
     `<li key=${effect}> ${effect} 
      </li>`
 )}
 ${props.copiedSelectedText.map(
   (text) =>
     `<li key=${text}> ${text}
      </li>`
 )}
 </ul> </span>
</h6>
<h6> Wymagania: <span>
  <ul>
     <li>wykształcenie ${props.educationLevel} ${props.studiesName} ${props.studiesStage}
    </li>
    ${props.requirements.map((requirement) =>
    `<li key=${requirement}> ${requirement} 
    </li>`)}</ul></span>
</h6>
<h6> O firmie: <span> ${props.aboutCompany} </span>
</h6>
<h6> Przetwarzanie 
 danych: <p className="summary-p"> ${props.RODO} </p>
</h6>
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
    const editorCurrentValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(editorCurrentValue);
  };

  return (
    <div>
      <Editor
        defaultEditorState={editorState}
        wrapperClassName='text-editor-wrapper'
        editorClassName='text-editor'
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
    </div>
  );
}
