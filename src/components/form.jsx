import React from "react";

const Form = ({ register, setpassword, error , setError , errorMassage}) => {
    setTimeout(() => {
        if (error === true) {
            setError(false)
        }
    }, 2000);
  return (
    <div className="w-[500px] h-[450px] px-[100px] bg-slate-100 rounded-xl shadow-xl">
      <h1 className="text-center mt-10 text-xl">Parolni kiriting</h1>
      <form>
        <div className="flex flex-col gap-3 mt-16">
          <label htmlFor="password">Parol</label>
          <input
            type="password"
            className="py-2 pl-2"
            onChange={(e) => setpassword(e.target.value.toLocaleLowerCase())}
          />
        {error && <span className="text-red-600">{errorMassage}</span>}
        </div>
        <button
          onClick={(e) => register(e)}
          className="px-5 py-3 rounded-md mt-6 bg-green-200"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Form;
