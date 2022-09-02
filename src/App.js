import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './styles/App.css';
import './styles/Home.css';
import './styles/Navbar2.css'


function App() {
  //set a empty states
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  //when App is rendering, useEffect hook to fetch data
  useEffect(() => {
    //use fake json REST api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <Router>
      <div className='App'>
        <Navbar />

        {isLoading && <div>Is Loading...</div>}
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
