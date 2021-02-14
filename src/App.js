import Editor from './Editor'
import './App.css';
import { useState,useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage'

function App() {
  const [HTML, setHtml] = UseLocalStorage('html','')
  const [css, setCss] = UseLocalStorage('css','')
  const [js, setJs] = UseLocalStorage('js','')
  const [srcDoc, setSrcDoc] = useState(``)
  useEffect(() =>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`<html>
        <body>${HTML}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    },250)

    return () => clearTimeout(timeout)
  },[HTML, css, js])
  
  
  return (
    <div className="App">
      <div className="header">Live Code Editor</div>
      <>
        <div className="top">
          <Editor  language="xml" displayName="HTML" value={HTML} onChange={setHtml}/>
          <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
          <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/>
        </div>
        <div className="bottom">
          <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameborder="0" width="100%" height="100%"/>
        </div>
      </>
      <div className="footer">Developed by istaique ahmed arik</div>
    </div>
  );
}

export default App;
