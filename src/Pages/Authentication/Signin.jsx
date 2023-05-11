import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signin = () => {

    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handlerEmail = e => {

    }

    const hadlerPassword = e => {
        
    }

    const toggoleShowPassword = e => {

    }

    const handlerSubmit = e => {

    }

    return (
        <section className=''>
        <div className=''>
            <div className=''>

                {
                    error && <span className=''>{error}</span>
                }

                <h3 className=''>Welcome Back</h3>
                <p>Welcome Back, Please enter your details.</p>

                <form onSubmit={handlerSubmit} className=''>             

                    <div className="form-control ">
                        <label className="">Email</label>
                        <input onChange={handlerEmail} type="email" name='email' value={email} placeholder="Enter your email" className={` ${emailError && ''} ${email && !emailError && ''}`} />
                        {
                            emailError && <span className="text-error-clr"><small>{emailError}</small></span>
                        }
                    </div>

                    <div className="form-control w-full">
                        <label className="">Password</label>
                        <div className=''>
                            <input onChange={hadlerPassword} type={`${showPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='password' value={password} className={` ${passwordError && ''} ${password && !passwordError && ''}`} />
                            {
                                showPassword ?
                                    <FaEyeSlash onClick={toggoleShowPassword} className='' ></FaEyeSlash> :
                                    <FaEye onClick={toggoleShowPassword} className='' ></FaEye>
                            }
                            {
                                passwordError && <span className=""><small>{passwordError}</small></span>
                            }
                        </div>
                    </div>

                   

                    <input type="submit" value='Sign up' className=''  />
                </form>

                <p className=''>You have an account? <Link to='/signin' className=''> Sign in</Link></p>
            </div>
        </div>

    </section>
    );
};

export default Signin;