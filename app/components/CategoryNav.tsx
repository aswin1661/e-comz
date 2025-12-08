export default function CategoryNav() {
    const categories = [
        "All",
        "Electronics",
        "Fashion",
        "Home & Living",
        "Beauty",
        "Essentials",
        "Sports",
        "Accessories"
    ];

    return (
        <div className="w-full border-b border-gray-100 bg-white py-4 sticky top-16 z-40">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-1">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all
                    ${index === 0
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
