import { useEffect, useState } from "react";
import Form from "./components/form";
import Home from "./components/home";

function App() {
  const [password, setpassword] = useState();
  const [isOpen, setisOpen] = useState(true);
  const [error, setError] = useState(false)


  function register(e) {
    e.preventDefault()
    if (password === "oybek") {
      setisOpen(false)
    }else{
      setError(true)
    }
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {isOpen && <Form setpassword={setpassword} register={register} error={error} setError={setError}/>}
      {isOpen || <Home/>}
    </div>
  );
}

export default App;
