import React from 'react';
import HeroSection from '@/components/login/HeroSection';
import LoginForm from '@/components/login/LoginForm';

export default function LoginPage() {
    return (
        /* STREAMING_CHUNK:Main Layout Grid */
        <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white">

            {/* Left Panel: Hero Section (Branding & Images) */}
            <section className="w-full h-full min-h-[500px] lg:min-h-screen">
                <HeroSection />
            </section>

            {/* Right Panel: Login Form Container */}
            <section className="w-full h-full flex items-center justify-center p-4 md:p-8">
                <LoginForm />
            </section>

        </main>
    );
}