import { Editor } from "@tinymce/tinymce-react";
import { MathJax } from "better-react-mathjax";
import { useRef, useState } from "react";
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  /** @type {import("react").MutableRefObject<Editor["editor"]>} */
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="main-editor">
        <Editor
          apiKey="veuvo9h0a0rv0c9idy7mti6m5fpa84ljqucjvpc7tidpl91s"
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            external_plugins: {
              tiny_mce_wiris: `https://cdn.jsdelivr.net/npm/@wiris/mathtype-tinymce6@8.4.0/plugin.min.js`,
              mathjax: `https://cdn.jsdelivr.net/npm/@dimakorotkov/tinymce-mathjax@1.0.8/plugin.min.js`
            },
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | ' +
              'mathjax',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            extended_valid_elements: '*[*]',
            draggable_modal: true,
            mathjax: {
              lib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-svg.min.js'
            }
          }}
        />
      </div>
      <div className="main-content">
        <button
          onClick={() => {
            if (editorRef.current) {
              localStorage.setItem("content", editorRef.current.getContent())
            }
          }}
        >Save</button>
        <button onClick={() => {
          const content = localStorage.getItem("content");
          setContent(content);
        }}>
          Preview
        </button>
        <MathJax style={{ height: "100%" }} dynamic>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </MathJax>
      </div>
    </>
  )
}

export default App
