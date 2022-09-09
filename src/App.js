import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import Checklist from './pages/Checklist'
import Guide from './pages/Guide'
import Tools from './pages/Tools'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/App.css';
import './styles/Home.css';
import './styles/Navbar2.css'

function App() {

  return (
    <div className='App'>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>

          <Route path='/checkList' element={<Checklist />}>
          </Route>

          <Route path='/guide' element={<Guide />}>
          </Route>

          <Route path='/tools' element={<Tools />}>
          </Route>

          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
      </div>

      <Footer />

      <div className='navbar2'>
        <Navbar2 />
      </div>

    </div>
  );
}

export default App;
