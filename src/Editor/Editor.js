import React from 'react';
import './Editor.css'


const Editor = ({markdownText, onChange}) => {
  return (
    <div className="editor-container">
      <label className="editor-label" htmlFor="editor">Markdown Editor</label>
      <textarea 
        id="editor" 
        className="editor-textarea" 
        onChange={onChange} 
        value={markdownText}
      >
      </textarea>
    </div>
  )
}

export default Editor;