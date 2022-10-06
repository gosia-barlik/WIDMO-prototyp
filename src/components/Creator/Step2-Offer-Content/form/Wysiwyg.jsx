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
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilitiesToHtml,
} from "../../../../store/actions/stepTwoActions";

export default function Wysiwyg (props) {

//   const { responsibilities, customizedResponsibilities, copiedSelectedText } = useSelector((state) => state.stepTwoReducer);
 
  
  const contentBlock = htmlToDraft(props.contentToEdit);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    draftToHtml(convertToRaw(editorState.getCurrentContent()));
    props.setValueToHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
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
