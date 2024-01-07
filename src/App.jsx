import { useEffect, useState } from "react";
import Form from "./components/form";
import Home from "./components/home";

function App() {
  const [password, setpassword] = useState('');
  const [isOpen, setisOpen] = useState(true);
  const [error, setError] = useState(false)
  const [errorMassage, seterrorMassage] = useState('')

  function register(e) {
    e.preventDefault()
    
    if (password === "oybek") {
      setisOpen(false)
    }else if (password === '') {
      seterrorMassage("Malumot to'liq kiritilmagan")
      setError(true)
    }
    else{
      seterrorMassage("Parol noto'g'ri")
      setError(true)
    }
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {isOpen && <Form setpassword={setpassword} register={register} error={error} setError={setError} errorMassage={errorMassage}/>}
      {isOpen || <Home/>}
    </div>
  );
}

export default App;
