import { useState } from "react";
import axios from "../configs/axios-config";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!input?.password || !input?.email) return;
    try {
      await axios.post("/user/login", input)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = `${window.location.origin}`
          }
        })
    } catch (error) {
      setErrorMessage(error?.response?.data?.message);
    }
  }
  return (
    <div className='flex justify-center my-28 container'>
      <form className='Login md:w-[60%] my-20' onSubmit={handleLogin}>
        <h3>Welcome Back</h3>
        <p>Enter your details below</p>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <input type='email' placeholder='Enter Your Email' required onChange={e => setInput({ ...input, email: e.target.value })}></input>
        <input
          type='password'
          placeholder='Enter Your Password'
          required
          onChange={e => setInput({ ...input, password: e.target.value })}
        ></input>
        <button className='btn' onClick={handleLogin}>Login</button>
        <p className='redirect-text'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
