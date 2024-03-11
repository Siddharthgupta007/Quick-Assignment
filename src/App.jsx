import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student_details from './components/student_details';
import Student_home from './components/student_home';

function App() {
  

  return (
    <>

      
     <BrowserRouter>
      <Routes>
      <Route path="/student_details" element={<Student_details  username="sam"/>} />
      <Route path="/" element={<Student_home />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
