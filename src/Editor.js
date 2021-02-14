import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/theme/material.css'
import React, { useState } from 'react'
import { Controlled as CodeEditor } from 'react-codemirror2'
import "./App.css"
function Editor(props) {
    const{
        language,
        displayName,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(true)
    function handleChange(editor, data, value){
        onChange(value)
    }
    return (
        <div className={`editor-container ${open? ``:`collapsed`}` }>
            <div className="editor-title">
                {displayName}
                <button type="button" className="btn" onClick={()=>setOpen(prevOpen => !prevOpen)}>{open? <FullscreenExitIcon/> : <FullscreenIcon/>} </button>
            </div>
            <CodeEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    )
}

export default Editor
