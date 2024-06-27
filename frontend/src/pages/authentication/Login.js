import React, { useEffect, useState } from 'react'
import auth_banner from "../../assets/images/auth page/auth banner.jpg";
import google_logo from "../../assets/images/auth page/search.png";
import logo from "../../assets/images/landingpage/mentor logo.jpg";
import { useGoogleLogin } from "@react-oauth/google";

import { useForm } from "react-hook-form";
import {validateGoogleUser} from '../../helpers/validateGoogleUser';

function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    //google login logic
    const handleGoogleLogin = useGoogleLogin({
		onSuccess: (resp) => { validateGoogleUser(resp?.access_token).then(resp => console.log(resp)).catch(err => console.log(err))},
		onError: (error) => console.log("Login Failed:", error),
	});

  return (
    <div class="h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="flex-1 p-8 md:p-12">
            <div class="max-w-md w-full mx-auto">
                <img src={logo} width="150" alt="mentor brand logo" className='mb-4' />
                <h2 class="text-2xl mb-2">Sign in to your account</h2>
                {/* login form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-4">
                        <label class="block text-gray-700" for="email">Email address</label>
                        <input {...register("email", {required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} type="email" class="w-full pl-4 text-sm text-gray-700" />
                        {errors.email?.type === 'required' && <p style={{color:'red'}}>email required</p>}
                        {errors.email?.type === 'pattern' && <p style={{color:'red'}}>Please check your email</p>}
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700" for="password">Password</label>
                        <input {...register("password", { required: true, minLength:6 })} type="password" id="password" class="w-full pl-4 text-sm text-gray-700" />
                        {errors.password?.type === 'required' && <p style={{color:'red'}}>Password required</p>}
                        {errors.password?.type === 'minLength' && <p style={{color:'red'}}>Password should me 6 or more characters</p>}
                    </div>
                    <div class="flex justify-between mb-4">
                        <div className='text-blue-600 font-semibold'>
                        New user? register now
                        {/* <input type="checkbox" id="remember" class="mr-2" />
                        <label class="text-gray-700" for="remember">Remember me</label> */}
                        </div>
                        <div class="text-blue-500">Forgot password?</div>
                    </div>
                    <button type='submit' class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Sign in</button>
                </form>
                <button onClick={handleGoogleLogin} class="my-8 bg-white border-2 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center w-full">
                    <img src={google_logo} alt="Google Logo" class="h-4 w-4 mr-2" />
                    Continue with Google
                </button>
            </div>
        </div>
        <div class="hidden lg:block h-full">
            <img src={auth_banner} alt="Login pic" class="object-cover h-full w-full" />
        </div>
    </div>
  )
}

export default Login