import React from 'react';

export default function Logo() {
    return (
        /* STREAMING_CHUNK:Rendering Logo container and SVG mark */
        <div className="flex items-center gap-2.5">
            {/* 
        Placeholder SVG for the logo mark. 
        Pending exact SVG export from Figma to ensure pixel-perfect accuracy.
      */}
            <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                <path d="M10 0L0 14H10L20 0H10Z" fill="#111827" />
                <path d="M14 18L4 32H14L24 18H14Z" fill="#111827" />
            </svg>
            
            <span
                className="font-sans font-black italic text-[34.43px] leading-[120%] tracking-[0%] text-[#FEFEFE] uppercase"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
                Shipnow
            </span>
        </div>
    );
}