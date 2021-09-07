import React,{useState} from 'react'
import Form from './pages/Form'
import FormSuccess from './pages/FormSuccess';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function submitForm() {
    setIsLoggedIn(true);
  }
   
  return (
    <div>
      {!isLoggedIn ? (<div>
        <Form submitForm={submitForm} />
        {/* <p>{isLoggedIn.toString()}</p
        > */}

      </div>) : (<FormSuccess  />)}
      
    </div>
  )
}

export default App
