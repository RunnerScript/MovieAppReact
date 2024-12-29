import './App.css'
import Home from './pages/Home';
import MovieRouter from './routes/Router';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <Navigation />
      <Routing /> */}
      <Navbar />
      <MovieRouter />
    </>
  )
}

export default App

