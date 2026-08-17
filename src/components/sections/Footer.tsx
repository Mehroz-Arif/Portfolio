"use client";

export default function Footer() {
    return (
        <footer className="py-7 bg-[#f4ece1] border-t border-[#2e2319]/5 text-center select-none">
            <div className="w-full px-6">
                <p className="text-sm sm:text-base font-normal text-[#9e8c7d] tracking-wide">
                    Copyright © {new Date().getFullYear()} | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
