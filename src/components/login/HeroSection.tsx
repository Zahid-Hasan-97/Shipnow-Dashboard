import React from 'react';
import Logo from './Logo';
import Image from 'next/image';

export default function HeroSection() {
    return (
        /* STREAMING_CHUNK:Hero Section Container */
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#856DF3] p-8 lg:p-26.5">

            {/* STREAMING_CHUNK:Logo Placement */}
            <div className="mb-12 lg:mb-10.5">
                <Logo />
            </div>

            {/* STREAMING_CHUNK:Overlapping Images Container */}
            {/* The relative container allows the secondary image to be absolute positioned relative to the main image */}
            <div className="relative mb-12 lg:mb-15">
                {/* Main Image (Delivery Van) */}
                <Image
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600&auto=format&fit=crop"
                    alt="ShipNow Delivery Van"
                    className="w-60 h-60 md:w-70 md:h-70 lg:w-85 lg:h-85 object-cover rounded-2xl shadow-lg"
                />

                <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Customer tracking shipment"
                    className="absolute -top-8 -right-8 md:-top-10 md:-right-10 lg:-top-12 lg:-right-12 w-30 h-37.5 md:w-35 md:h-45 lg:w-40 lg:h-50 object-cover rounded-xl border-[6px] md:border-[8px] border-[#856DF3] shadow-md"
                />
            </div>

            {/* STREAMING_CHUNK:Typography */}
            <div className="text-center max-w-100 flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight font-sans">
                    Welcome to ShipNow
                </h1>
                <p className="text-white/90 text-sm md:text-base font-sans leading-relaxed">
                    Manage your shipments, fleet, and warehouse in one smart dashboard.
                </p>
            </div>

        </div>
    );
}