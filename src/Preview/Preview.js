import React from 'react';

import "./Preview.css"

const Preview = () => {
  return (
    <div className="preview-container">
      <label htmlFor="preview" className="preview-label">Markdown Preview</label>
      {/* User Story #2: I can see an element with a corresponding id="preview". */}
      <div id="preview" className="preview-display">sdasdsadas</div>
    </div>
  )
}

export default Preview;