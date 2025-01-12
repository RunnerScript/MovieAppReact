import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import StopWatch from './machinecodings/StopWatch'
import MutationObs from './machinecodings/MutationObs'
// import { Provider } from 'react-redux'
import WatchListContextWrapper from './contexts/WatchListContext'
createRoot(document.getElementById('root')).render(
  <MutationObs />
  // <StrictMode>
  // <Provider store={store}>
  // <WatchListContextWrapper>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </WatchListContextWrapper>
  // </Provider>
  // </StrictMode>,
)
