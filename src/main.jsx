import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MathJaxContext } from "better-react-mathjax";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathJaxContext
      version={3}
      config={{
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
        svg: {
          fontCache: "global",
        },
        options: {
          enableMenu: false,
        },
      }}
    >
      <App />
    </MathJaxContext>
  </React.StrictMode>,
)
