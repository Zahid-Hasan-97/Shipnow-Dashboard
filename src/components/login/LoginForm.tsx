'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation'; // Uncomment later for routing

// 1. Zod Schema for validation
const loginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    // const router = useRouter();

    // 2. React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    // 3. Form submission handler
    const onSubmit = (data: LoginFormValues) => {
        console.log('Form Submitted:', data);
        alert('Login Successful! (Redirecting to Dashboard...)');
        // router.push('/dashboard');
    };

    return (
        <div className="w-full max-w-[400px] mx-auto p-6 md:p-8 flex flex-col justify-center h-full">

            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-8">
                {/* Small Purple Logo */}
                <div className="mb-4 text-[#856DF3]">
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0L0 14H10L20 0H10Z" fill="currentColor" />
                        <path d="M14 18L4 32H14L24 18H14Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-sans">Welcome Back</h2>
                <p className="text-sm text-gray-500 font-sans">
                    Log in to continue managing your logistics with ShipNow
                </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans">

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-900">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter a valid email address"
                        className={`w-full p-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#856DF3] transition-all text-sm ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'
                            }`}
                        {...register('email')}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-900">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a strong password"
                            className={`w-full p-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#856DF3] transition-all text-sm pr-12 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'
                                }`}
                            {...register('password')}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    {errors.password && (
                        <span className="text-xs text-red-500 mt-1">{errors.password.message}</span>
                    )}
                </div>

                {/* Options Row (Remember Me & Forgot Password) */}
                <div className="flex items-center justify-between mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-[#856DF3] focus:ring-[#856DF3] cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">Remember Me</span>
                    </label>
                    <a href="#" className="text-sm text-[#856DF3] hover:underline font-medium">
                        Forgot Password?
                    </a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#27272A] hover:bg-black text-white font-medium py-3 rounded-lg transition-colors mt-6 text-sm"
                >
                    Login
                </button>

            </form>

            {/* Footer Link */}
            <p className="text-center text-sm text-gray-500 mt-8 font-sans">
                Don't have an account?{' '}
                <a href="#" className="text-[#856DF3] hover:underline font-medium">
                    Register
                </a>
            </p>

        </div>
    );
}