import ProductCard from "./ProductCard";

export default function ProductFeed() {
    // Mock Data
    const products = [
        {
            id: 1,
            title: "Minimalist Daily Backpack",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
            category: "Accessories",
            image: "/images/backpack.png",
            rating: { rate: 4.5, count: 120 }
        },
        {
            id: 2,
            title: "Premium Cotton T-Shirt",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
            category: "Fashion",
            image: "/images/tshirt.png",
            rating: { rate: 4.1, count: 259 }
        },
        {
            id: 3,
            title: "Modern Utility Jacket",
            price: 55.99,
            description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
            category: "Fashion",
            image: "/images/jacket.png",
            rating: { rate: 4.7, count: 500 }
        },
        {
            id: 4,
            title: "Gold Chain Bracelet",
            price: 695,
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
            category: "Jewelry",
            image: "/images/bracelet.png",
            rating: { rate: 4.6, count: 400 }
        },
        // Reuse images for demo purposes
        {
            id: 5,
            title: "Everyday Carry Backpack",
            price: 98.00,
            description: "A versatile backpack for the modern commuter.",
            category: "Accessories",
            image: "/images/backpack.png",
            rating: { rate: 4.2, count: 85 }
        },
        {
            id: 6,
            title: "Classic White Tee",
            price: 18.00,
            description: "Essential wardrobe staple. 100% organic cotton.",
            category: "Fashion",
            image: "/images/tshirt.png",
            rating: { rate: 4.8, count: 320 }
        }
    ];

    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}
