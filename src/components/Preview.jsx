import React from 'react';
import './Preview.css';
function Preview({ htmlCode, cssCode, jsCode }) {
  const srcDoc = `
    <html>
      <head><style>${cssCode}</style></head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `;

  return (
    <div className="preview-container">
      <div className="preview-header">
        <label>Output (Live Preview)</label>
      </div>
      <iframe
        id="preview-window"
        srcDoc={srcDoc}
        title="preview"
        sandbox="allow-scripts allow-modals allow-same-origin"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Preview;