import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Home />

        {/* <div className='container'>
          <Routes>
            <Route path='/'>
            </Route>

            <Route path='/about'>
            </Route>

          </Routes>
        </div> */}

      </div>
    </Router>
  );
}

export default App;
