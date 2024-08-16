import React from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <div className="w-full h-full">
      <Router>
      <Navbar/>

      
      <Routes>
        <Route path="/Time" element={<News author="time" key="time"/>}/>
        <Route path="/Abc-news" element={<News author="abc-news" key="abc-news"/>}/>
        <Route path="/Wallstreet" element={<News author="the-wall-street-journal" key="the-wall-street-journal"/>}/>
        <Route path="/Wired" element={<News author="wired" key="wired"/>}/>
        <Route path="/bbC-News" element={<News author="bbc-news" key="bbc-news"/>}/>
      </Routes>

      </Router>
      </div>
    </div>
  )
}

export default App
