import React from 'react';

const Signup = () => {
    return (
        <section className=' mx-5 md:mx-0 py-12 md:py-24'>
            <div className='flex justify-center items-center bg-white'>
                <div className='w-[400px]'>

                    {
                        error && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2 text-center rounded'>{error}</span>
                    }

                    <h3 className='text-4xl font-bold pb-6'>Welcome Back</h3>
                    <p>Welcome Back, Please enter your details.</p>

                    <form onSubmit={handlerSubmit} className='pt-5'>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Name</label>
                            <input onChange={handlerUserName} type="text" name='name' placeholder="Enter your Name" value={userName} className={`input input-bordered w-full focus:border-black ${userNameError && 'input-error focus:border-error-clr'} ${userName && !userNameError && 'input-success focus:border-green'}`} />
                            {
                                userNameError && <span className="text-error-clr"><small>{userNameError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Email</label>
                            <input onChange={handlerEmail} type="email" name='email' value={email} placeholder="Enter your email" className={`input input-bordered w-full focus:border-black ${emailError && 'input-error focus:border-error-clr'} ${email && !emailError && 'input-success focus:border-green'}`} />
                            {
                                emailError && <span className="text-error-clr"><small>{emailError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Password</label>
                            <div className='relative'>
                                <input onChange={hadlerPassword} type={`${showPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='password' value={password} className={`input input-bordered w-full focus:border-black ${passwordError && 'input-error focus:border-error-clr'} ${password && !passwordError && 'input-success focus:border-green'}`} />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                                {
                                    passwordError && <span className="text-error-clr"><small>{passwordError}</small></span>
                                }
                            </div>
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Photo URL <small>(Optional)</small></label>
                            <div className='relative'>
                                <input type="text" placeholder="Enter your PhotoURL" name='photo' className="input input-bordered w-full focus:border-black" />
                            </div>

                        </div>

                        <div className="pt-5 flex items-center">
                            <input onClick={handlerterms} className="accent-pink ml-2 mr-3" type="checkbox" name="accept" />
                            <small>
                                <label className="text-pink">
                                    Accept <span className="font-semibold">Trerms and Condition</span>
                                </label>
                            </small>
                        </div>

                        <input type="submit" value='Sign up' className='bg-pink hover:bg-btn-hover text-white w-full py-2 rounded-lg cursor-pointer mt-5' disabled={!accepted ? true : false} />
                    </form>

                    <p className='text-center mt-5 lg:mb-24'>You have an account? <Link to='/signin' className='font-semibold text-pink'> Sign in</Link></p>
                </div>
            </div>

        </section>
    );
};

export default Signup;