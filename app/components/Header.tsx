"use client";

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
                            E-COMZ
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Shop</Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">New Arrivals</Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Brands</Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Sale</Link>
                    </div>

                    {/* Icons/User */}
                    <div className="flex items-center space-x-6">
                        {/* Search (Dummy) */}
                        <button className="text-gray-600 hover:text-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium">Hi, {user.name}</span>
                                <button onClick={logout} className="text-xs text-red-500 hover:text-red-700">Logout</button>
                            </div>
                        ) : (
                            <Link href="/login" className="flex items-center text-gray-600 hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </Link>
                        )}

                        <button className="text-gray-600 hover:text-black transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
