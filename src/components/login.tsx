import logo from "../logo.svg";
import pablo from "../img/pablo-sign-in.svg";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface error {
    code: number;
    message: string;
    status: string;
}

function Login(props:any) {

    const [ email, setEmail ] = useState<string>();
    const [ password, setPassword ] = useState<string>();
    const [ error, setError ] = useState<any|null>();
    const navigate = useNavigate()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            if (!validate()) return;
            localStorage.setItem( 'lendsqr.user', `{email: ${email}, password: ${password}}`)
            localStorage.setItem('lendsqr.authenticated', 'true');
            navigate('/dashboard');
        }
    }

    const validate = () => {
        if (!email) return setError({code: 1, message: 'Email is required', status:'ERR'})
        if (email.split('@').length!=2) return setError({code: 1, message: 'Enter a valid email of the form "username@lendsqr.com"', status:'ERR'})
        if (email.split('@')[1]!='lendsqr.com') return setError({code: 1, message:'Email must be a lendsqr.com email.', status:'ERR'})
        if (!password) return setError({code: 1, message: `Password is required.`, status: 'ERR'})
        if (password.length < 5) return setError({code: 1, message:`Password must be more than 5 characters`, status: 'ERR'})
        if (!(/[\d]+/.test(password))) return setError({code: 1, message: `Password must contain letters and numbers`, status: 'ERR'})
        setError(null);
        return true;
    }

    

  return (
    <>
        <div className="section align-middle wf-section">
        <div className="container w-container">
            <div className="row row-2 _w-100">
                <div className="col col-py-4">
                    <div className="logo">
                        <img src={logo} loading="lazy" alt=""></img>
                    </div>
                    <div className="center-img-wrapper">
                        <img src={pablo} loading="lazy" id="w-node-f28a1217-a232-3947-f964-e77863501bb7-2719fc1a" alt=""></img>
                    </div>
                </div>
                <div id="w-node-_165cf382-a921-b164-5ab9-01c58a2063c9-2719fc1a" className="col col-py-4">
                    <div className="head-wrapper">
                        <h1 className="heading">Welcome!</h1>
                        <div className="text-block">Enter your login details</div>
                    </div>
                    <div>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" aria-label="Email Form" onSubmit={ handleSubmit }>
                                <label className="field-label">Name</label>
                                <input type="email" className="form-field w-input" onChange={(e) => { setEmail(e.target.value) }} maxLength={256} name="email" data-name="email" placeholder="Email" id="email"/>
                                <label className="field-label-2">Email Address</label>
                                <input type="password" className="form-field w-input" onChange={(e) => { setPassword(e.target.value) }} maxLength={256} name="password" data-name="Password" placeholder="Password" id="password" required/>
                                { (error)? (
                                    <div className="error-msg py-2"><div className="font-icon"></div>{error.message}</div>
                                ) : ''}
                                <a href="/" className="link-block w-inline-block">
                                    <div>Forgot password?</div>
                                </a>
                                <input type="submit" value="Log in" data-wait="Please wait..." className="btn-w-100 mt-4 w-button"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login;