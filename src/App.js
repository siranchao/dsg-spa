import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path='/'>
            </Route>

            <Route path='/about'>
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
