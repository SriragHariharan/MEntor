import React from 'react';
import logo from "../../assets/images/landingpage/mentor logo.jpg";
import { useForm } from "react-hook-form";

function VerifyOtp() {
    const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="h-screen flex flex-col justify-center bg-teal-50">
			<div class="flex items-center justify-center">
				<div class="max-w-sm w-full mx-auto p-6 my-10">
					<div class="text-center">
						<h2 class="text-2xl md:text-3xl font-semibold my-2">
							Verify your Email
						</h2>
					</div>
					<div class="text-center text-sm md:text-md text-gray-800 dark:text-gray-400 my-2">
						We have sent code to your email
					</div>
					<div class="text-center text-sm md:text-md font-bold text-gray-800 dark:text-gray-400 mb-4">
						username@mail.com
					</div>
					<form
						class="flex flex-col justify-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							{...register("otp", {
								required: true,
								minLength: 6,
								maxLength: 6,
							})}
							type="text"
							class="w-full pl-4 text-sm text-gray-700"
						/>
						{errors.otp?.type === "required" && (
							<p style={{ color: "red" }}>OTP required</p>
						)}
						{(errors.otp?.type === "minLength" || errors.otp?.type === 'maxLength') && (
							<p style={{ color: "red" }}>
								OTP should be 6 characters long
							</p>
						)}
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                            Please introduce the 6 digit code we sent via email.
                        </p>
                        <button type="submit" className='bg-green-500 p-2 text-white w-full mt-6 rounded-md'>Verify OTP</button>
					</form>
				</div>
			</div>
			<div className="flex justify-center">
				<img src={logo} alt="brand logo" width="100" />
			</div>
		</div>
	);
}

export default VerifyOtp;
