import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import StopWatch from './machinecodings/StopWatch'
// import MutationObs from './machinecodings/MutationObs'
import WatchListContextWrapper from './contexts/WatchListContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchListContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WatchListContextWrapper>
  </StrictMode>,
)
