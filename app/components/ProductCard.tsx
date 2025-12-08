"use client";

import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
}

export default function ProductCard({ id, title, price, description, category, image, rating }: ProductCardProps) {
    const { user } = useAuth();
    const router = useRouter();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent parent link click if needed, though card currently doesn't link
        if (!user) {
            router.push("/login?redirect=/");
            return;
        }
        // Add logic for adding to cart
        alert("Added to cart! (Simulated)");
    };

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                {/* Placeholder Image wrapper */}
                <div className="h-full w-full flex items-center justify-center text-gray-400 bg-gray-50 group-hover:scale-105 transition-transform duration-500">
                    {/* Using img tag for external URL simplicity in this demo */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={title} className="h-full w-full object-contain p-8 opacity-90 group-hover:opacity-100 mix-blend-multiply" />
                </div>

                <button onClick={handleAddToCart} className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 hover:bg-black hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
            </div>

            <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{category}</p>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-black line-clamp-1">{title}</h3>
                <p className="text-sm font-semibold text-gray-900">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}
