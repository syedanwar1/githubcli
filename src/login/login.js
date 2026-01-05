import './loginStyle.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = useState(false);
  const [border,setBorder] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{

  },[border])

  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

	if(!email || !password){
		setBorder(true);
		return;
	}

    const res = await fetch('http://localhost:3000/login/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

	if(!res.ok){
	setBorder(true);
	}

    if (res.ok) {
      localStorage.setItem('message', data.message);
      navigate('/about');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };

    const res = await fetch('http://localhost:3000/login/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Signup successful');
      setValue(false);
    }
  };

  return (
    <div className="authPage">
      <div className={`container ${value ? 'right-panel-active' : ''}`}>

        {/* SIGN UP */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <input name="username" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* SIGN IN */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input name="email" type="email" placeholder="Email" className={border ? 'input-error' : ''} onChange={() => setBorder(false)} />
            <input name="password" type="password" placeholder="Password" className={border ? 'input-error' : ''}  onChange={() => setBorder(false)} />
			<p style={{display:border?'block':'none', color:'red'}}>Please enter valid username or password</p>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* OVERLAY */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button className="ghost" onClick={() => setValue(false)} style={{marginRight:'100px'}}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button className="ghost" onClick={() => setValue(true)} style={{marginLeft: '100px'}}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
