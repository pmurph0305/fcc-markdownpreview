import React from 'react';

import "./Preview.css"

const Preview = ({text}) => {
  return (
    <div className="preview-container">
      <label htmlFor="preview" className="preview-label">Markdown Preview</label>
      {/* User Story #2: I can see an element with a corresponding id="preview". */}
      {/* User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea. */}
      <div id="preview" className="preview-display">{text}</div>
    </div>
  )
}

export default Preview;