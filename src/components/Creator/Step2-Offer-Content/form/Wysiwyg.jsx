import React, { useState, useEffect } from "react";
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

export default function Wysiwyg (props) {
 
  const createEditorContentState = (contentToEdit) => {
    const contentBlock = htmlToDraft(contentToEdit);
    return ContentState.createFromBlockArray(contentBlock.contentBlocks);
   } 

   const contentState = createEditorContentState(props.contentToEdit);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  const onEditorBlur = () => {
    if(draftToHtml(convertToRaw(editorState.getCurrentContent())) !== props.contentToEdit)
          props.setValueToHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  useEffect(() => {
    const contentState = createEditorContentState(props.contentToEdit);
    setEditorState(EditorState.createWithContent(contentState));
  }, [props]);

  return (
    <div>
      <Editor
        editorState={editorState}
        onBlur = {onEditorBlur}
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
