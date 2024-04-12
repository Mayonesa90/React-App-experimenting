import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './modules/Nav/Nav.jsx'
import Profile from './modules/Nav/Profile/Profile.jsx'
import Landing from './modules/Nav/Landing/Landing.jsx'




function App() {

  return (
    <>
      <Nav />
      <div className=" flex flex-col flex-1 mx-auto w-full border-solid border-white border-2 content-center rounded-xl">
      <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" />
      </Routes>
      </div>
    </>
  )
}

export default App
