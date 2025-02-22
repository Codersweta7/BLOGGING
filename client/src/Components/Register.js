import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../configs/axios-config';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  async function registerUser(ev) {
    ev.preventDefault();

    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match!');
      return;
    }

    try {
      await axios.post('/user/signup', { username, email, password })
        .then(async () => {
          setMessage('✅ Registration Successful!');
          await axios.post("/user/login", { email, password })
            .then((res) => {
              if (res.status === 200) {
                window.location.href = `${window.location.origin}`
              }
            })
        })

    } catch (error) {
      setMessage(error?.response?.data?.message);
    }
  }

  return (
    <div className='flex justify-center my-28 container'>
      <form className='register md:w-[60%] my-20 ' onSubmit={registerUser}>
        <h3>
          <span>Sign Up</span> For Free
        </h3>
        <p>Let's sign up quickly to get started</p>
        {message && <p className='message text-danger'>{message}</p>}

        <input
          type='text'
          name='userName'
          placeholder='Enter Your Name'
          value={username}
          onChange={(ev) => setUserName(ev.target.value)}
          required
        />
        <input
          type='email'
          name='userEmail'
          placeholder='Enter Your Email'
          value={email}
          onChange={(ev) => setUserEmail(ev.target.value)}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          required
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Your Password'
          value={confirmPassword}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          required
        />

        <button className='btn pl-3'>Sign Up</button>

        <p className='redirect-text'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>


      </form>
    </div>
  );
}
