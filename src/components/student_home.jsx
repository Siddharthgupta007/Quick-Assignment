import React from 'react'
import { useState} from 'react'
import Student_details from './student_details';
import { useNavigate } from 'react-router-dom';

const URL = "https://randomuser.me/api/"

const Student_home = () => {
  
  const navigate = useNavigate();

  const [userName, setUser] = useState("sam")
  const [phone, setPhone] = useState("9267963125")


  const [data, setData] = useState(null)
  const [error, seterror] = useState(false)
  const fetchData = async (URL) => {

    try {
      const res = await fetch(URL)
      const json = await res.json()

      setData(json);
    } catch (error) {
      seterror(true)  
    }
  };

  
  fetchData(URL)
  if(data)
  console.log(data)
else
console.log("Error in fetching data")
  
  return (
   <>
     <div className='flex'>
      <h1>Home component</h1>
      <h3>UserName: {userName}</h3>
      <h3>Phone no: {phone}</h3>
      <Student_details username = {userName}/>
     </div>
      
    <div className=" flex">
    <p>Navigate to Details page:
    <button onClick={() => navigate('/student_details')}>Click Me</button>
    </p>
    
    </div>
   </>
   
  )
}

export default Student_home