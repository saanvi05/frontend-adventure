import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import './CodeEditors.css';

import { dracula } from '@uiw/codemirror-theme-dracula';
import { autocompletion } from '@codemirror/autocomplete';

import { EditorView } from '@codemirror/view';

function CodeEditors({ htmlCode, onHtmlChange, cssCode, onCssChange, jsCode, onJsChange }) {
  
  const sharedExtensions = [
    autocompletion({ override: null }),
   
    EditorView.lineWrapping, 
  ];

  return (
    <div className="code-editors">
      <div className="editor-container">
        <label htmlFor="html-code">HTML</label>
        <CodeMirror
          value={htmlCode}
          onChange={onHtmlChange}
          theme={dracula} 
          extensions={[html(), ...sharedExtensions]} 
        />
      </div>
      <div className="editor-container">
        <label htmlFor="css-code">CSS</label>
        <CodeMirror
          value={cssCode}
          onChange={onCssChange}
          theme={dracula}
          extensions={[css(), ...sharedExtensions]}
        />
      </div>
      <div className="editor-container">
        <label htmlFor="js-code">JavaScript</label>
        <CodeMirror
          value={jsCode}
          onChange={onJsChange}
          theme={dracula}
          extensions={[javascript({ jsx: true }), ...sharedExtensions]}
        />
      </div>
    </div>
  );
}

export default CodeEditors;