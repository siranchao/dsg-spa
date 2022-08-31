import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css';
import './styles/Home.css';
import './styles/Navbar2.css'

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
        <Footer />

        <div className='navbar2'>
          <Navbar2 />
        </div>

      </div>
    </Router>
  );
}

export default App;
