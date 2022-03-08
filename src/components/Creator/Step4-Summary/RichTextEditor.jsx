import React, { useState }  from 'react';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


export default function RichTextEditor(props){

  const contentBlock = htmlToDraft('<p>Lorem ipsum...</p>');
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

 
  const onEditorStateChange = (editorState) => {
    setEditorState (editorState)
  };

    return (
      <div>
        <Editor
          defaultEditorState={editorState}
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor"
          onEditorStateChange={onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
}