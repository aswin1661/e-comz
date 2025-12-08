import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative h-[600px] w-full bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.png"
                    alt="Summer Collection"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay for text readability */}
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
                    Summer Collection
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-sm font-medium">
                    Discover the new aesthetic. Minimalist designs for the modern wardrobe.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Shop Now
                </button>
            </div>
        </div>
    );
}
