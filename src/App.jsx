import './App.css'
import Home from './pages/Home';
import MovieRouter from './routes/Router';
import Navbar from './components/Navbar';
import WatchListContextWrapper from './contexts/WatchListContext';
function App() {
  return (
    <>
      {/* <Navigation />
      <Routing /> */}
      <Navbar />
      <WatchListContextWrapper>
        <MovieRouter />
      </WatchListContextWrapper>
    </>
  )
}

export default App

