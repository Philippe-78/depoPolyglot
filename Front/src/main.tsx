import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './app/App'
import './index.css'


 createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
     <div className="app">   
        <App />
    </div> 
    </>
  </StrictMode>,
)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

// )